open Verilog

exception CompileError(string)

type rec stmt_structured =
 | SStmtTimingControl(timing_control, option<stmt_structured>)
 | SStmtAssn(assn_type, var, option<delay>, exp)
 | SStmtDisplay(string, array<exp_or_time>)
 | SStmtMonitor(string, array<exp_or_time>)
 | SStmtFinish
 | SStmtIf(exp, stmt_structured)
 | SStmtIfElse(exp, stmt_structured, stmt_structured)
 | SSBlock(array<stmt_structured>)

// JS API
let mk_SStmtTimingControl = (tc, opts) => SStmtTimingControl(tc, opts)
let mk_SStmtAssn = (at, v, d, e) => SStmtAssn(at, v, d, e)
let mk_SStmtDisplay = (str, es) => SStmtDisplay(str, es)
let mk_SStmtMonitor = (str, es) => SStmtMonitor(str, es)
let mk_SStmtFinish = SStmtFinish
let mk_SStmtIf = (ec, st) => SStmtIf(ec, st)
let mk_SStmtIfElse = (ec, st, sf) => SStmtIfElse(ec, st, sf)
let mk_SSBlock = (ss) => SSBlock(ss)

type top_level =
 | TLVars(array<(string, option<exp>)>)
 | TLNets(string, delay, array<string>)
 | TLGates(string, delay, array<array<exp>>)
 | TLCont(string, delay, exp)
 | TLProc(string, stmt_structured)

// JS API
let mk_pair = (x1, x2) => (x1, x2)
let mk_TLVars = (ds) => TLVars(ds)
let mk_TLNets = (nt, d, ds) => TLNets(nt, d, ds)
let mk_TLCont = (e1, d, e2) => TLCont(e1, d, e2)
let mk_TLGates = (g, d, ds) => TLGates(g, d, ds)
let mk_TLProc = (pt, s) => TLProc(pt, s)

type parse_result =
 | ParseOk(array<top_level>)
 | ParseFail(string)

// JS API
let mk_ParseOk = (ss) => ParseOk(ss)
let mk_ParseFail = (err) => ParseFail(err)

// Preprocessing

let rec reads_star_exp = (e) =>
 switch (e) {
 | ExpVal(_) => Belt.Set.String.empty
 | ExpVar(var) => Belt.Set.String.fromArray([var])
 | ExpNot(e) => reads_star_exp(e)
 | ExpOp2(e1, _, e2) => Belt.Set.String.union(reads_star_exp(e1), reads_star_exp(e2))
 | ExpCond(e1, e2, e3) => Utils.unions([reads_star_exp(e1), reads_star_exp(e2), reads_star_exp(e3)])
}

let reads_star_exp_or_time = (e) =>
 switch (e) {
 | ETExp(e) => reads_star_exp(e)
 | ETTime => Belt.Set.String.empty
}

let rec reads_star = (s) =>
 switch s {
 | SStmtTimingControl(_, None) => Belt.Set.String.empty
 | SStmtTimingControl(_, Some(s)) => reads_star(s)
 | SStmtAssn(_, _, _, e) => reads_star_exp(e)
 | SStmtDisplay(_, es) => Utils.unions(Js.Array.map(reads_star_exp_or_time, es))
 | SStmtMonitor(_, es) => Utils.unions(Js.Array.map(reads_star_exp_or_time, es))
 | SStmtFinish => Belt.Set.String.empty
 | SStmtIf(e, s) => Belt.Set.String.union(reads_star_exp(e), reads_star(s))
 | SStmtIfElse(e, s1, s2) => Utils.unions([reads_star_exp(e), reads_star(s1), reads_star(s2)])
 | SSBlock(ss) => Utils.unions(Js.Array.map(reads_star, ss))
 }

let rec writes_star = (s) =>
 switch s {
 | SStmtTimingControl(_, _) => Belt.Set.String.empty
 | SStmtAssn(_, var, _, _) => Belt.Set.String.fromArray([var])
 | SStmtDisplay(_, _) => Belt.Set.String.empty
 | SStmtMonitor(_, _) => Belt.Set.String.empty
 | SStmtFinish => Belt.Set.String.empty
 | SStmtIf(_, s) => writes_star(s)
 | SStmtIfElse(_, s1, s2) => Belt.Set.String.union(writes_star(s1), writes_star(s2))
 | SSBlock(ss) => Utils.unions(Js.Array.map(writes_star, ss))
 }

let normalise_always_comb = (s) => {
 let read_vars = reads_star(s)
 let write_vars = writes_star(s)
 let vars = Belt.Set.String.removeMany(read_vars, Belt.Set.String.toArray(write_vars))
          |> Belt.Set.String.toArray
          |> Js.Array.map((e) => EEEdge(e))
          |> event_expression_fromArray
 let ee = switch vars {
  | None => EENever
  | Some(vars) => vars
 }
 SStmtTimingControl(TMEvent(ee), Some(s))
}

let rec preprocess_star = (s) =>
 switch s {
 | SStmtTimingControl(TMStar, None) => SStmtTimingControl(TMEvent(EENever), None)
 | SStmtTimingControl(TMStar, Some(s)) =>
    let s = preprocess_star(s)
    let ee = reads_star(s)
           |> Belt.Set.String.toArray
           |> Js.Array.map((e) => EEEdge(e))
           |> event_expression_fromArray
    let ee = switch ee {
             | None => EENever
             | Some(ee) => ee
             }
    SStmtTimingControl(TMEvent(ee), Some(s))
 | SStmtIf(e, s) => SStmtIf(e, preprocess_star(s))
 | SStmtIfElse(e, s1, s2) => SStmtIfElse(e, preprocess_star(s1), preprocess_star(s2))
 | SSBlock(ss) => SSBlock(Js.Array.map(preprocess_star, ss))
 | s => s
}

// count the number of event controls
// and die if any blocking timing controls
let rec num_ec = (s) =>
 switch s {
 | SStmtTimingControl(TMDelay(_), _) => raise(CompileError("Time control not allowed inside new-type always"))
 | SStmtTimingControl(_, _) => 1
 | SStmtAssn(_, _, Some(_), _) => raise(CompileError("Delayed assignments not allowed inside new-type always"))
 | SStmtAssn(_, _, _, _) => 0
 | SStmtDisplay(_, _) => 0
 | SStmtMonitor(_, _) => 0
 | SStmtFinish => 0
 | SStmtIf(_, s) => num_ec(s)
 | SStmtIfElse(_, s1, s2) => num_ec(s1) + num_ec(s2)
 | SSBlock(ss) => Utils.sum(Js.Array.map(num_ec, ss))
}

let validate_proc = (pt, s) => 
 if pt == ProcAlways(AlwaysComb) || pt == ProcAlways(AlwaysLatch) {
  num_ec(s) == 0 ? () : raise(CompileError("Event control not allowed inside always_comb/always_latch"))
 } else if pt == ProcAlways(AlwaysFf) {
  num_ec(s) == 1 ? () : raise(CompileError("Must be one and one only event control inside always_ff"))
 } else {
  ()
 }

let preprocess_proc = (pt, s) =>
 switch pt {
 | ProcAlways(AlwaysComb) => normalise_always_comb(s)
 | ProcAlways(AlwaysLatch) => normalise_always_comb(s)
 | _ => preprocess_star(s)
}

// Compiler

let compile_var = ((lhs, rhs)) => {
 { target: lhs, init: rhs }
}

let compile_net = (nt, d, var) => {
 let nt = switch nt {
 | "wire"   => NetTypeWire
 | "tri"    => NetTypeWire

 | "wand"   => NetTypeAnd
 | "triand" => NetTypeAnd

 | "wor"    => NetTypeOr
 | "trior"  => NetTypeOr

 | _ => Js.Exn.raiseError("impossible net type")
 }

 { type_: nt, name: var, delay: d }
}

let compile_cont = (lhs, d, rhs) => {
 { lhs: lhs, delay: d, rhs: rhs }
}

let dest_ExpVar = (e) =>
 switch e {
 | ExpVar(var) => var
 | _ => raise(CompileError("Expected variable, found: " ++ Pp.exp_str(e)))
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

let compile_proc_type = (pt) =>
 switch pt {
 | "initial" => ProcInitial
 | "always" => ProcAlways(Always)
 | "always_comb" => ProcAlways(AlwaysComb)
 | "always_latch" => ProcAlways(AlwaysLatch)
 | "always_ff" => ProcAlways(AlwaysFf)
 | _ => Js.Exn.raiseError("impossible proc type")
}

let compile_top_level = (m, tl) => {
 switch (tl) {
 | TLVars(ds) =>
   let vars = Js.Array.map(compile_var, ds)
   {...m, vars: Js.Array2.concat(m.vars, vars)}
 | TLNets(nt, d, ds) =>
   let nets = Js.Array.map(compile_net(nt, d), ds)
   {...m, nets: Js.Array2.concat(m.nets, nets)}
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
   let pt = compile_proc_type(pt)
   let _ = validate_proc(pt, s)
   let s = preprocess_proc(pt, s)
   let ss = compile_stmt(s)
   let proc = { proc_type: pt, stmts: ss }

   {...m, procs: Js.Array2.concat(m.procs, [proc])}
 }
}

// Top-level entry

let compile = (ss) => {
 let m = {vars: [], nets: [], conts: [], procs: []}
 let m = Js.Array.reduce(compile_top_level, m, ss)
 m
}
