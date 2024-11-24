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

let compile_out_arg_format_b = (ao) =>
 switch ao {
 | OAExp(e) => ETExp(e)
 | _ => raise(CompileError("Invalid format (%b)"))
}

let compile_out_arg_format_d = (ao) =>
 switch ao {
 | OATime => ETTime
 | _ => raise(CompileError("Invalid format (%d)"))
}

let compile_out_arg = (args : array<out_arg>) : (string, array<exp_or_time>) => {
 let i = ref(0)
 let strs = []
 let outargs = []

 while i.contents < Belt.Array.length(args) {
  switch Belt.Array.getExn(args, i.contents) {
  | OAExp(e) => {
     Belt.Array.push(strs, "%b");
     Belt.Array.push(outargs, ETExp(e));
     i := i.contents + 1
  }
  | OATime => {
     Belt.Array.push(strs, "%d");
     Belt.Array.push(outargs, ETTime);
     i := i.contents + 1
  }
  | OAStr(str) => {
     Belt.Array.push(strs, str);
     i := i.contents + 1

     let j = ref(0)
     while j.contents < Js.String.length(str) {
      if Js.String.get(str, j.contents) == "%" {
       // If j is increased in the beginning it seems that the code is miscompiled?

       // returns undefined on OoB
       let c = Js.String.get(str, j.contents + 1)

       if j.contents + 1 >= Js.String.length(str) || i.contents >= Js.Array.length(args) {
        raise(CompileError("Invalid format reference"))
       } else if c == "b" {
        let ao = Belt.Array.getExn(args, i.contents)
        i := i.contents + 1
        Belt.Array.push(outargs, compile_out_arg_format_b(ao));
       } else if c == "d" {
        let ao = Belt.Array.getExn(args, i.contents)
        i := i.contents + 1
        Belt.Array.push(outargs, compile_out_arg_format_d(ao));
       } else {
        raise(CompileError("unsupported format"))
       }

       j := j.contents + 2
      } else {
       j := j.contents + 1
      }
    }
  }
  | OAEmpty => {
     Belt.Array.push(strs, " ");
     i := i.contents + 1
  }
  }
 }

 (Js.Array.joinWith("", strs), outargs)
}

let rec compile_stmt = (s) => {
 switch s {
 | SStmtTimingControl(tc, None) => [StmtTimingControl(tc)]
 | SStmtTimingControl(tc, Some(s)) => Js.Array2.concat([StmtTimingControl(tc)],
                                                       compile_stmt(s))
 | SStmtWait(e, None) => [StmtWait(e)]
 | SStmtWait(e, Some(s)) => Js.Array2.concat([StmtWait(e)],
                                             compile_stmt(s))
 | SStmtAssn(assn_type, var, d, exp) => [StmtAssn(assn_type, var, d, exp)]

 | SStmtDisplay(es) => {
    let (str, es) = compile_out_arg(es)
    [StmtDisplay(str, es)]
   }
 | SStmtMonitor(es) => {
    let (str, es) = compile_out_arg(es)
    [StmtMonitor(str, es)]
   }
 | SStmtFinish(e) => [StmtFinish(e)]

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
 | TLGates(_, _, _) =>
   Js.Exn.raiseError("impossible: gates should have been pre-processed away")
 | TLProc(pt, s) =>
   let pt = str_to_proc_type(pt)
   let ss = compile_stmt(s)
   let proc = { proc_type: pt, stmts: ss }

   pt == ProcFinal
   ? {...m, finals: Js.Array2.concat(m.finals, [proc])}
   : {...m, procs: Js.Array2.concat(m.procs, [proc])}
 }
}

// Top-level entry

let compile = (ss) =>
 Js.Array.reduce(compile_top_level, vmodule_empty, ss)
