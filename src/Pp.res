// Pretty-printer

open Utils
open Verilog

let dummy_fragments = (l) => {
 Js.Array.mapi((e, i) => <React.Fragment key={ Belt.Int.toString(i) }>e</React.Fragment>, l)
}

let op2_str = (op) =>
 switch op {
 | LAnd => "&&"
 | LOr => "||"
 | BAnd => "&"
 | BOr => "|"
 | BXOr => "^"
 | Add => "+"
 }

// TODO: Handle parens better
let rec exp_str = (e) =>
 switch (e) {
 | ExpVal(v) => value_str(v)
 | ExpVar(var) => var
 | ExpNot(e) => "!(" ++ exp_str(e) ++ ")"
 | ExpOp2(e1, op, e2) => "(" ++ exp_str(e1) ++ ") " ++ op2_str(op) ++ " (" ++ exp_str(e2) ++ ")"
 }

let exp_or_time_str = (e) =>
 switch e {
 | ETExp(e) => exp_str(e)
 | ETTime => "$time"
 }

let delay_str = (d) =>
 switch (d) {
 | Delay0 => ""
 | Delay1(d1) => "#" ++ Belt.Int.toString(d1)
 | Delay2(d1, d2) => "#(" ++ Belt.Int.toString(d1) ++ ", " ++ Belt.Int.toString(d2) ++ ")"
 | Delay3(d1, d2, d3) => "#(" ++ Belt.Int.toString(d1) ++ ", " ++ Belt.Int.toString(d2) ++ ", " ++ Belt.Int.toString(d3) ++ ")"
 }

let delay_opt_str = (dopt) =>
 switch dopt {
 | None => "" 
 | Some(d) => delay_str(d) ++ " "
 }

let rec event_expression_str = (e) =>
 switch e {
 | EEPos(var) => "posedge " ++ var
 | EENeg(var) => "negedge " ++ var
 | EEEdge(var) => var
 | EENever => "0"
 | EEOr(e1, e2) => event_expression_str(e1) ++ " or " ++ event_expression_str(e2)
 }

let timing_control_str = (tc) =>
 switch tc {
 | TMDelay(d) => "#" ++ Belt.Int.toString(d) //delay_str(d)
 | TMEvent(e) => "@(" ++ event_expression_str(e) ++ ")"
 | TMStar => "@(*)"
 }

let display_args_str = (str, es) => 
 "\"" ++ str ++ "\"" ++ (Js.Array.length(es) == 0 ? "" : ",\n          ") ++ Js.Array.joinWith("", intersperse(", ", Js.Array.map(exp_or_time_str, es)))
    
let stmt_str_help = (s) =>
 switch s {
 | StmtTimingControl(tc) => timing_control_str(tc)
 | StmtAssn(AssnBlocking, var, dopt, e) => var ++ " = " ++ delay_opt_str(dopt) ++ exp_str(e)
 | StmtAssn(AssnNonBlocking, var, dopt, e) => var ++ " <= " ++ delay_opt_str(dopt) ++ exp_str(e)
 | StmtDisplay(str, es) => "$display(" ++ display_args_str(str, es) ++ ")"
 | StmtMonitor(str, es) => "$monitor(" ++ display_args_str(str, es) ++ ")"
 | StmtFinish => "$finish"
 | StmtGoto(n) => "goto " ++ Belt.Int.toString(n)
 | StmtGotoIf(e, n) => "goto " ++ Belt.Int.toString(n) ++ " when " ++ exp_str(e)
 }

let stmt_str = (pc, lasti, s, i) => {
 let out = stmt_str_help(s)
 let out = React.string(" " ++ (lasti == i ? out ++ ";" : out ++ ";\n"))
 pc == i ? <b> out </b> : out
}

let stmts_str = (pc : int, ss : array<stmt>) => {
 Js.Array.mapi(stmt_str(pc, Js.Array.length(ss) - 1), ss)
}

let cont_str = (c : cont) =>
 Utils.joinNonEmpty(" ", ["assign", delay_str(c.delay), c.lhs, "=", exp_str(c.rhs) ++ ";"])

let decl_init_str = (v : option<value>) =>
 switch (v) {
 | None => ""
 | Some(v) => " = " ++ value_str(v)
 }

let decl_str = (d:decl) =>
 "logic " ++ d.target ++ decl_init_str(d.init) ++ ";"

let net_type_str = (nt) =>
 switch nt {
 | NetTypeWire => "wire"
 | NetTypeAnd => "wand"
 | NetTypeOr => "wor"
 }

let net_str = (n:net) =>
 Utils.joinNonEmpty(" ", [net_type_str(n.type_), delay_str(n.delay), n.name ++ ";"])

let proc_type_str = (t) =>
 switch (t) {
 | ProcAlways(Always) => "always"
 | ProcAlways(AlwaysComb) => "always_comb"
 | ProcInitial => "initial"
 | ProcFinal => "final"
 }

let proc_str = (proc_env, p, i) => {
 let es = Js.Array.concatMany(
          [[<span className="comment"> { React.string("// Process " ++ Belt.Int.toString(i + 1)) } </span>,
            React.string("\n" ++ proc_type_str(p.proc_type)), React.string(" begin\n")],
           stmts_str(if proc_env[i].state == ProcStateFinished { -1 } else { proc_env[i].pc }, p.stmts),
           [React.string("\nend")]], [])
 React.array(dummy_fragments(es))
}

let process_index_str = (k) => {
 switch (k) {
 | IndexCont(i) => "cont: " ++ Belt.Int.toString(i + 1)
 | IndexProcess(i) => "proc: " ++ Belt.Int.toString(i + 1)
 }
}

let proc_running_state_str = (s) =>
 switch (s) {
 | ProcStateRunning => "running"
 | ProcStateWaiting => "waiting"
 | ProcStateBlocked => "blocked"
 | ProcStateFinished => "finished"
 }

let event_nba_str = (e) => 
 switch e {
 | EventNBA(id, var, v) => <li key={ Belt.Int.toString(id) }> { React.string("nba(" ++ var ++ " <= " ++ value_str(v) ++ ")") } </li>
 | _ => Js.Exn.raiseError("impossible")
 }

let event_str = (ps, e) => {
 switch e {
 | EventContUpdate(_, i, v) => React.string("update(" ++ ps[i].lhs ++ "(" ++ Belt.Int.toString(i) ++ ")): " ++ value_str(v))
 | EventBlockUpdate(_, i, var, v) => React.string("eval(" ++ process_index_str(IndexProcess(i)) ++ ", " ++ var ++ " = " ++ value_str(v) ++ ")")
 | EventEvaluation(_, i) => React.string("eval(" ++ process_index_str(i) ++ ")")
 | EventNBA(_, var, v) => React.string("nba(" ++ var ++ " <= " ++ value_str(v) ++ ")")
 | Events(_, es) => <ol> {React.string("NBA events:")} { React.array(Belt.Array.map(es, event_nba_str)) } </ol>
 }
}

let vmodule_str = (m, proc_env) => {
 let r = intersperse(
   React.string("\n\n"),
   Js.Array2.concat(
   [React.string(Js.Array.joinWith("\n", Js.Array.map(decl_str, m.vars))),
    React.string(Js.Array.joinWith("\n", Js.Array.map(net_str, m.nets))),
    React.string(Js.Array.joinWith("\n", Js.Array.map(cont_str, m.conts)))],
    Js.Array.mapi(proc_str(proc_env), m.procs)))
  React.array(dummy_fragments(r))
}

let monitor_str = (m) =>
 switch m {
 | None => React.string("No monitor")
 | Some((str, es, _)) => <code> { React.string(stmt_str_help(StmtMonitor(str, es))) } </code>
 }
