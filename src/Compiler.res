/* Compiler from AstParse to Ast */

open Ast
open AstParse

exception CompileError(string)

let dest_ExpVar = (e) =>
 switch e {
 | ExpVar(var) => var
 | _ => raise(CompileError("Expected variable, found: " ++ Pp.exp_str(e)))
}

let compile_var = ((lhs, rhs)) => {
 { target: lhs, init: rhs }
}

let compile_net = (nt, d, (var, rhs)) => {
 let nt = switch nt {
 | "wire"   => NetTypeWire
 | "tri"    => NetTypeWire

 | "wand"   => NetTypeAnd
 | "triand" => NetTypeAnd

 | "wor"    => NetTypeOr
 | "trior"  => NetTypeOr

 | _ => Js.Exn.raiseError("impossible net type")
 }

 let cont = Belt.Option.map(rhs, rhs => { lhs: var, delay: Delay0, rhs: rhs })

 ({ type_: nt, name: var, delay: d }, cont)
}

let compile_cont = (lhs, d, rhs) => {
 { lhs: lhs, delay: d, rhs: rhs }
}

let compile_not = (d, decl) => {
 if Js.Array.length(decl) == 2 {
  let lhs = dest_ExpVar(Belt.Array.getExn(decl, 0));
  let rhs = Belt.Array.getExn(decl, 1);
  { lhs: lhs, delay: d, rhs: rhs }
 } else {
  raise(CompileError("Expected two arguments to not gate"))
 }
}

// TODO: unclear if should be lazy or strict
let gate_to_op2 = (g) =>
 switch g {
 | "and" => BAnd
 | "or" => BOr
 | "xor" => BXOr
 | _ => Js.Exn.raiseError("impossible gate")
 }

let compile_op2 = (op2, d, decl) => {
 if Js.Array.length(decl) == 3 {
  let lhs = dest_ExpVar(Belt.Array.getExn(decl, 0));
  let rhs = ExpOp2(Belt.Array.getExn(decl, 1), op2, Belt.Array.getExn(decl, 2));
  { lhs: lhs, delay: d, rhs: rhs }
 } else {
  raise(CompileError("Expected three arguments to gate"))
 }
}

// No built-in operator for nor
let compile_nor = (d, decl) => {
 if Js.Array.length(decl) == 3 {
  let lhs = dest_ExpVar(Belt.Array.getExn(decl, 0));
  let rhs = ExpNot(ExpOp2(Belt.Array.getExn(decl, 1), BOr, Belt.Array.getExn(decl, 2)));
  { lhs: lhs, delay: d, rhs: rhs }
 } else {
  raise(CompileError("Expected three arguments to gate"))
 }
}

let rec compile_stmt = (s) => {
 switch s {
 | SStmtTimingControl(tc, None) => [StmtTimingControl(tc)]
 | SStmtTimingControl(tc, Some(s)) => Js.Array2.concat([StmtTimingControl(tc)],
                                                       compile_stmt(s))
 | SStmtAssn(assn_type, var, d, exp) => [StmtAssn(assn_type, var, d, exp)]

 | SStmtDisplay(str, es) => [StmtDisplay(str, es)]
 | SStmtMonitor(str, es) => [StmtMonitor(str, es)]
 | SStmtFinish => [StmtFinish]

 | SStmtIf(e, s) =>
   let ss = compile_stmt(s)
   Js.Array2.concat([StmtGotoUnless(e, Js.Array.length(ss) + 1)],
                    ss)
 | SStmtIfElse(e, s1, s2) =>
   let ss1 = compile_stmt(s1)
   let ss2 = compile_stmt(s2)
   Js.Array2.concatMany([StmtGotoUnless(e, Js.Array.length(ss1) + 2)],
                        [ss1, [StmtGoto(Js.Array.length(ss2) + 1)], ss2])

 | SSBlock(bss) =>
   Js.Array.reduce((ss, s) => Js.Array2.concat(ss, compile_stmt(s)), [], bss)
 }
}

let compile_top_level = (m, tl) => {
 switch (tl) {
 | TLVars(ds) =>
   let vars = Js.Array.map(compile_var, ds)
   {...m, vars: Js.Array2.concat(m.vars, vars)}
 | TLNets(nt, d, ds) =>
   let (nets, conts) = Belt.Array.unzip(Js.Array.map(compile_net(nt, d), ds))
   let conts = Js.Array.map(Belt.Option.getExn, Js.Array.filter(Belt.Option.isSome, conts))
   {...m, nets: Js.Array2.concat(m.nets, nets), conts: Js.Array2.concat(m.conts, conts)}
 | TLCont(lhs, d, rhs) =>
   let cont = compile_cont(lhs, d, rhs)
   {...m, conts: Js.Array2.concat(m.conts, [cont])}
 | TLGates(gate, d, ds) =>
   if (gate == "not") {
    let conts = Js.Array.map(compile_not(d), ds)
    {...m, conts: Js.Array2.concat(m.conts, conts)}
   } else if (gate == "and" || gate == "or") {
    let op2 = gate_to_op2(gate)
    let conts = Js.Array.map(compile_op2(op2, d), ds)
    {...m, conts: Js.Array2.concat(m.conts, conts)}
   } else if (gate == "nor") {
    let conts = Js.Array.map(compile_nor(d), ds)
    {...m, conts: Js.Array2.concat(m.conts, conts)}
   } else {
    raise(CompileError("Unsupported gate: " ++ gate))
   }
 | TLProc(pt, s) =>
   let pt = str_to_proc_type(pt)
   let ss = compile_stmt(s)
   let proc = { proc_type: pt, stmts: ss }

   {...m, procs: Js.Array2.concat(m.procs, [proc])}
 }
}

// Top-level entry

let compile = (ss) =>
 Js.Array.reduce(compile_top_level, vmodule_empty, ss)
