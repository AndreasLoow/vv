open Ast
open AstParse

exception ElaboratorError(string)

let dest_ExpVar = (e) =>
 switch e {
 | ExpVar(var) => var
 | _ => raise(ElaboratorError("Expected data reference, found: " ++ Pp.exp_str(e)))
}

// Data object data
//
// First field to TVar:
// If the variable is given an initial value at declaration
//
// Second field to TVar:
// If a new-style always block or continuous assignment has "claimed" a variable;
// at most one new-style always block can claim a variable
type var_status = VarNothing | VarInited | VarClaimed | VarNewClaimed
type ddata = TVar(var_status) | TNet

let is_tvar = (dd) =>
 switch dd {
 | TVar(_) => true
 | _ => false
 }

type state =
 { env: Belt.Map.String.t<ddata>,
   out: array<top_level> }

let empty_state =
 { env: Belt.Map.String.empty,
   out: [] }

// Inefficient but modules generally small so OK for now
let log = (s, tl) =>
 {...s, out: Js.Array2.concat(s.out, [tl]) }

let check_decl = (s, var) =>
 if (Belt.Map.String.has(s.env, var)) {
  ()
 } else {
  raise(ElaboratorError("Undefined reference: " ++ var))
 }

let check_var = (s, var) =>
 switch Belt.Map.String.get(s.env, var) {
 | Some(TVar(_)) => ()
 | _ => raise(ElaboratorError("Undefined var: " ++ var))
}

let check_net = (s, net) =>
 switch Belt.Map.String.get(s.env, net) {
 | Some(TNet) => ()
 | _ => raise(ElaboratorError("Undefined net: " ++ net))
}

let rec check_exp = (s, e) =>
 switch e {
 | ExpVal(_) => ()
 | ExpVar(var) => check_decl(s, var)
 | ExpNot(e) => check_exp(s, e)
 | ExpOp2(e1, _, e2) => Js.Array.forEach(check_exp(s), [e1, e2])
 | ExpCond(e1, e2, e3) => Js.Array.forEach(check_exp(s), [e1, e2, e3])
}

let rec check_event_expression = (s, ee) =>
 switch ee {
 | EEPos(e) => check_exp(s, e)
 | EENeg(e) => check_exp(s, e)
 | EEEdge(e) => check_exp(s, e)
 | EENever => ()
 | EEOr(ee1, ee2) => Js.Array.forEach(check_event_expression(s), [ee1, ee2])
}

let check_timing_control = (s, tc) =>
 switch tc {
 | TMDelay(_) => ()
 | TMEvent(ee) => check_event_expression(s, ee)
 | TMStar => ()
 | TMWait(e) => check_exp(s, e)
}

let check_exp_or_time = (s, e) =>
 switch e {
 | ETExp(e) => check_exp(s, e)
 | ETTime => ()
}

let add_var = (s, (name, e)) =>
 if (Belt.Map.String.has(s.env, name)) {
  raise(ElaboratorError("Name collision: " ++ name))
 } else {
  Utils.option_forEach(e, check_exp(s))
  let env = Belt.Map.String.set(s.env, name, TVar(Belt.Option.isSome(e) ? VarInited : VarNothing))
  {...s, env: env}
}

let add_net = (s, (name, e)) =>
 if (Belt.Map.String.has(s.env, name)) {
  raise(ElaboratorError("Name collision: " ++ name))
 } else {
  Utils.option_forEach(e, check_exp(s))
  let env = Belt.Map.String.set(s.env, name, TNet)
  {...s, env: env}
}

let check_not_claimed = (env_prev, new_style, var) =>
 switch Belt.Map.String.get(env_prev, var) {
 | Some(TVar(VarClaimed)) =>
    new_style
    ? raise(ElaboratorError("Cannot write to claimed variable: " ++ var))
    : ()
 | Some(TVar(VarNewClaimed)) =>
    raise(ElaboratorError("Cannot write to claimed variable: " ++ var))
 | _ => ()
 }

let rec check_stmt = (env_prev, new_style, s, stm) =>
 switch stm {
 | SStmtTimingControl(tc, stm) =>
    check_timing_control(s, tc)
    switch stm {
    | Some(stm) => check_stmt(env_prev, new_style, s, stm)
    | None => s
    }
 | SStmtAssn(_, var, _, e) =>
    let _ = check_not_claimed(env_prev, new_style, var)
    check_var(s, var)
    check_exp(s, e)
    // Var now claimed
    let env = Belt.Map.String.set(s.env, var, TVar(new_style ? VarNewClaimed : VarClaimed))
    {...s, env: env}
 | SStmtDisplay(_, es) =>
    Js.Array.forEach(check_exp_or_time(s), es)
    s
 | SStmtMonitor(_, es) =>
    Js.Array.forEach(check_exp_or_time(s), es)
    s
 | SStmtFinish(e) =>
    check_exp(s, e)
    s
 | SStmtIf(e, stm) =>
    check_exp(s, e)
    check_stmt(env_prev, new_style, s, stm)
 | SStmtIfElse(e, stm1, stm2) =>
    check_exp(s, e)
    Js.Array.reduce(check_stmt(env_prev, new_style), s, [stm1, stm2])
 | SSBlock(stms) =>
    Js.Array.reduce(check_stmt(env_prev, new_style), s, stms)
}

// Could potentially handle writing to variables as well?
// Not supported for now
let check_gate = (s, es) =>
 if Js.Array.length(es) > 0 {
  let lhs = dest_ExpVar(Belt.Array.getExn(es, 0))
  check_net(s, lhs)

  Js.Array.forEach(check_exp(s), es)
 } else {
  ()
 }

let rec reads_star_exp = (e) =>
 switch e {
 | ExpVal(_) => Belt.Set.String.empty
 | ExpVar(var) => Belt.Set.String.fromArray([var])
 | ExpNot(e) => reads_star_exp(e)
 | ExpOp2(e1, _, e2) => Belt.Set.String.union(reads_star_exp(e1), reads_star_exp(e2))
 | ExpCond(e1, e2, e3) => Utils.unions([reads_star_exp(e1), reads_star_exp(e2), reads_star_exp(e3)])
}

let reads_star_exp_or_time = (e) =>
 switch e {
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
 | SStmtFinish(e) => reads_star_exp(e)
 | SStmtIf(e, s) => Belt.Set.String.union(reads_star_exp(e), reads_star(s))
 | SStmtIfElse(e, s1, s2) => Utils.unions([reads_star_exp(e), reads_star(s1), reads_star(s2)])
 | SSBlock(ss) => Utils.unions(Js.Array.map(reads_star, ss))
 }

let rec writes_star = (s) =>
 switch s {
 | SStmtTimingControl(_, None) => Belt.Set.String.empty
 | SStmtTimingControl(_, Some(s)) => writes_star(s)
 | SStmtAssn(_, var, _, _) => Belt.Set.String.fromArray([var])
 | SStmtDisplay(_, _) => Belt.Set.String.empty
 | SStmtMonitor(_, _) => Belt.Set.String.empty
 | SStmtFinish(_) => Belt.Set.String.empty
 | SStmtIf(_, s) => writes_star(s)
 | SStmtIfElse(_, s1, s2) => Belt.Set.String.union(writes_star(s1), writes_star(s2))
 | SSBlock(ss) => Utils.unions(Js.Array.map(writes_star, ss))
 }

let normalise_always_comb = (s) => {
 let read_vars = reads_star(s)
 let write_vars = writes_star(s)
 let vars = Belt.Set.String.removeMany(read_vars, Belt.Set.String.toArray(write_vars))
          |> Belt.Set.String.toArray
          |> Js.Array.map((e) => EEEdge(ExpVar(e)))
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
           |> Js.Array.map((e) => EEEdge(ExpVar(e)))
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
let rec num_ec = (pt, s) =>
 switch s {
 | SStmtTimingControl(TMDelay(_), _) => raise(ElaboratorError("Time control not allowed inside " ++ Pp.proc_type_str(pt)))
 | SStmtTimingControl(_, _) => 1
 | SStmtAssn(_, _, Some(_), _) => raise(ElaboratorError("Delayed assignments not allowed inside " ++ Pp.proc_type_str(pt)))
 | SStmtAssn(_, _, _, _) => 0
 | SStmtDisplay(_, _) => 0
 | SStmtMonitor(_, _) => 0
 | SStmtFinish(_) => 0
 | SStmtIf(_, s) => num_ec(pt, s)
 | SStmtIfElse(_, s1, s2) => num_ec(pt, s1) + num_ec(pt, s2)
 | SSBlock(ss) => Utils.sum(Js.Array.map(num_ec(pt), ss))
}

let validate_proc = (pt, s) =>
 if pt == ProcAlways(AlwaysComb) || pt == ProcAlways(AlwaysLatch) || pt == ProcFinal {
  num_ec(pt, s) == 0 ? () : raise(ElaboratorError("Event control not allowed inside " ++ Pp.proc_type_str(pt)))
 } else if pt == ProcAlways(AlwaysFf) {
  num_ec(pt, s) == 1 ? () : raise(ElaboratorError("Must be one and one only event control inside always_ff"))
 } else {
  ()
 }

let preprocess_proc = (pt, stm) =>
 switch pt {
 | ProcAlways(AlwaysComb) => normalise_always_comb(stm)
 | ProcAlways(AlwaysLatch) => normalise_always_comb(stm)
 | _ => preprocess_star(stm)
}

let elaborate_cont_delay = (d) =>
 switch d {
 | Delay0 => None
 | Delay1(d) => d == 0 ? None : Some(Delay1(d))
 | _ => raise(ElaboratorError("Delay type not supported in continuously assignments to variables yet"))
}

let elaborate_cont = (s, (lhs, d, rhs)) =>
 switch Belt.Map.String.get(s.env, lhs) {
 | Some(TVar(status)) =>
   switch status {
   | VarInited =>
      raise(ElaboratorError("Not allowed to write continuously to variable with initialisation: " ++ lhs))
   | VarClaimed =>
      raise(ElaboratorError("Not allowed to write continuously to already claimed variable: " ++ lhs))
   | VarNewClaimed =>
      raise(ElaboratorError("Not allowed to write continuously to already claimed variable: " ++ lhs))
   | VarNothing =>
      check_exp(s, rhs)
      // Elaborate into an always combinatorial block
      // ASSUMPTION: A little unclear if this should be blocking or nonblocking
      let d = elaborate_cont_delay(d)
      let proc = TLProc("always_comb", normalise_always_comb(SStmtAssn(AssnBlocking, lhs, d, rhs)))
      // Variable now claimed
      let env = Belt.Map.String.set(s.env, lhs, TVar(VarNewClaimed))

      log({...s, env: env}, proc)
   }
 | Some(TNet) => check_exp(s, rhs); log(s, TLCont(lhs, d, rhs))
 | None => raise(ElaboratorError("Undefined reference: " ++ lhs))
}

let is_new_style_always = (pt) =>
 pt == ProcAlways(AlwaysComb) ||
 pt == ProcAlways(AlwaysLatch) ||
 pt == ProcAlways(AlwaysFf)

let elaborate_proc = (s, (pt, stm)) => {
 let pt' = str_to_proc_type(pt)
 let _ = validate_proc(pt', stm)
 let s = check_stmt(s.env, is_new_style_always(pt'), s, stm)
 let stm = preprocess_proc(pt', stm)

 log(s, TLProc(pt, stm))
}

// maybe handle gates here as well?
let elaborate_top_level = (s, tl) =>
 switch tl {
 | TLVars(ds) => let s = Js.Array.reduce(add_var, s, ds); log(s, tl)
 | TLNets(_, _, ds) => let s = Js.Array.reduce(add_net, s, ds); log(s, tl)
 | TLCont(lhs, d, rhs) => elaborate_cont(s, (lhs, d, rhs))
 | TLGates(_, _, ds) => Js.Array.forEach(check_gate(s), ds); log(s, tl)
 | TLProc(pt, stm) => elaborate_proc(s, (pt, stm))
}

// Top-level entry

let elaborate = (ss) => {
 let s = Js.Array.reduce(elaborate_top_level, empty_state, ss)
 s.out
}

// TLProc
//   let _ = validate_proc(pt, s)
//   let s = preprocess_proc(pt, s)
