open Bit
open Ast

/* Semantics of Verilog */

// Event structure + runtime state

type event_id = int
let event_id_counter = ref(0:event_id)

let next_event_id = () => {
 let id = event_id_counter.contents
 event_id_counter.contents = id + 1
 id
}

type rec event
 = EventContUpdate(event_id, int, value) // continuous assignment update
 | EventBlockUpdate(event_id, int, string, value) // delayed assignment from block
 | EventNBA(event_id, string, value)
 | EventEvaluation(event_id, int) // run process (e.g., wake up from waiting)
 | EventDelayedEvaluation(event_id, int) // run process for delayed processes
 | Events(event_id, array<event>) // sequence of events from NBA, must be just EventNBA...

let dest_EventNBA = (e) =>
 switch e {
 | EventNBA(_, var, v) => (var, v)
 | _ => Js.Exn.raiseError("bug: expected EventNBA")
 }

let event_key = (e) =>
 switch e {
 | EventContUpdate(id, _, _) => Belt.Int.toString(id)
 | EventBlockUpdate(id, _, _, _) => Belt.Int.toString(id)
 | EventNBA(id, _, _) => Belt.Int.toString(id)
 | EventEvaluation(id, _) => Belt.Int.toString(id)
 | EventDelayedEvaluation(id, _) => Belt.Int.toString(id)
 | Events(id, _) => Belt.Int.toString(id)
}

type time_slot =
 { active: array<event>, inactive: array<event>, nba: array<event> }

let empty_time_slot =
 { active: [], inactive: [], nba: [] }

type region = RegionActive | RegionInactive | RegionNBA

// REF: 9.7 Fine-grain process control
type proc_running_state = ProcStateFinished | ProcStateRunning | ProcStateWaiting

// Currently no need for local vars,
// some of the data in here might be redundant w.r.t.
// what's in the queue...
type proc_state = {
 pc: int, // the instruction to execute next
 state: proc_running_state
}

type status = Running | RunningFinals | Finished(option<value>)

let status_str = (s) =>
 switch s {
 | Running => "running"
 | RunningFinals => "running-finals"
 | Finished(None) => "finished"
 | Finished(Some(v)) => "finished(" ++ value_str(v) ++ ")"
 }

let is_running = (s) =>
 switch s {
 | Running => true
 | RunningFinals => true
 | _ => false
 }

// env is both nets and variables (cannot have name overlap anyway)
type state =
 { vmodule: vmodule,
   status: status,
   env: Belt.Map.String.t<value>,
   cont_env: array<value>, // latest computed value for conts
   proc_env: array<proc_state>,
   queue: array<(int, time_slot)>,
   monitor: option<(string, array<exp_or_time>, option<array<value_or_time>>)>, // this represents the "postponed" region
   output: string,
   time: int,
   process_nba_first: bool }

let lookupNetExn = (nets, netname) =>
 switch Js.Array.find(n => n.name == netname, nets) {
 | None => Js.Exn.raiseError("missing key")
 | Some(n) => n
 }

let get_net_delay = (nets, netname) => {
 let net = lookupNetExn(nets, netname)
 net.delay
}

let net_has_driver = (netname, conts) => {
 Js.Array.some(n => n.lhs == netname, conts)
}

// Value eval

let val_bit_bind = (f, v) =>
 switch v {
 | ValBit(v) => f(v)
 }

let val_bit_bind2 = (f, v1, v2) =>
 switch (v1, v2) {
 | (ValBit(v1), ValBit(v2)) => f(v1, v2)
 }

let val_bit_lift = (f, v) =>
 ValBit(val_bit_bind(f, v))

let val_bit_lift2 = (f, v1, v2) =>
 ValBit(val_bit_bind2(f, v1, v2))

let val_not = val_bit_lift(bit_not)
let val_and = val_bit_lift2(bit_and)
let val_or = val_bit_lift2(bit_or)
let val_xor = val_bit_lift2(bit_xor)
let val_add = val_bit_lift2(bit_add)
let val_eq = val_bit_lift2(bit_eq)
let val_neq = val_bit_lift2(bit_neq)
let val_case_eq = val_bit_lift2(bit_case_eq)
let val_case_neq = val_bit_lift2(bit_case_neq)
let val_cond = val_bit_lift2(bit_cond)
let val_is_true = val_bit_bind(bit_is_true)
let val_is_false = val_bit_bind(bit_is_false)
let val_edge = val_bit_bind2(bit_edge)

// REF: 12.4
// If the cond_predicate expression evaluates to true (that is, has a nonzero known value), the first statement
// shall be executed. If it evaluates to false (that is, has a zero value or the value is x or z), the first
// statement shall not execute. If there is an else statement and the cond_predicate expression is false, the else
// statement shall be executed.
let is_if_true = (ValBit(b)) =>
 switch b {
  | BitTrue => true
  | _ => false
 }

// Expression eval

// REF (Sec. 11.3.5): &&, ||, ->, and ?: are evaluated by short-circuit, all other ops are strict.
let rec run_exp = (env, e) =>
 switch e {
 | ExpVal(v) => v
 | ExpVar(var) => Belt.Map.String.getExn(env, var)
 | ExpNot(e) => run_exp(env, e) |> val_not
 | ExpOp2(e1, LAnd, e2) =>
   // REF (Sec. 11.4.7):
   // The && and || operators shall use short circuit evaluation as follows:
   // - The first operand expression shall always be evaluated.
   // - For &&, if the first operand value is logically false then the second operand shall not be evaluated.
   //
   // ASSUMPTION: "logically false" is just "false", i.e. x and z are not "logically false" (probably just a pedantic node, but strictly speaking the notion of "logically false" has not been introduced anywhere)

   let v1 = run_exp(env, e1)

   if val_is_false(v1) {
     v1
   } else {
     let v2 = run_exp(env, e2)
     val_and(v1, v2)
   }
 | ExpOp2(e1, LOr, e2) =>
   // See above REF.

   let v1 = run_exp(env, e1)

   if val_is_true(v1) {
     v1
   } else {
     let v2 = run_exp(env, e2)
     val_or(v1, v2)
   }
 | ExpOp2(e1, op, e2) =>
   let v1 = run_exp(env, e1)
   let v2 = run_exp(env, e2)

   switch op {
   | LAnd => Js.Exn.raiseError("impossible")
   | LOr => Js.Exn.raiseError("impossible")
   | BAnd => val_and(v1, v2)
   | BOr => val_or(v1, v2)
   | BXOr => val_xor(v1, v2)
   | Add => val_add(v1, v2)
   | Eq => val_eq(v1, v2)
   | NEq => val_neq(v1, v2)
   | CaseEq => val_case_eq(v1, v2)
   | CaseNEq => val_case_neq(v1, v2)
   }
 | ExpCond(e1, e2, e3) =>
   let v1 = run_exp(env, e1)

   switch v1 {
   | ValBit(BitTrue) =>
     run_exp(env, e2)
   | ValBit(BitFalse) =>
     run_exp(env, e3)
   | _ =>
     let v2 = run_exp(env, e2)
     let v3 = run_exp(env, e3)
     val_cond(v2, v3)
   }
 }

let run_exp_or_time = (time, env, e) =>
 switch e {
 | ETExp(e) => VTValue(run_exp(env, e))
 | ETTime => VTTime(time)
 }

let rec exp_depends_on_var = (e, v) =>
 switch e {
 | ExpVal(_) => false
 | ExpVar(v') => v == v'
 | ExpNot(e) => exp_depends_on_var(e, v)
 | ExpOp2(e1, _, e2) => exp_depends_on_var(e1, v) ||
                        exp_depends_on_var(e2, v)
 | ExpCond(e1, e2, e3) => exp_depends_on_var(e1, v) ||
                          exp_depends_on_var(e2, v) ||
                          exp_depends_on_var(e3, v)
 }

let cont_depends_on_var = (cont, v) =>
 exp_depends_on_var(cont.rhs, v)

// ASSUMPTION: Simply add net delay to each update... is this the same as doing a separate delay
//             when the update is eventually run? If so, this is much easier to implement...
let calculate_event_delay = (nets, netname, delay) => {
 let net_delay = get_net_delay(nets, netname)
 delay_plus(net_delay, delay)
}

// maxtime just a micro-optimization telling us how far into the future we need to look;
// made everything very ugly since re-script does not have break/return...
// microoptimization should probably just be removed...
let find_queued_update = (queue : array<(int, time_slot)>, maxtime, driver_i) => {
 let break = ref(false)
 let i = ref(0)

 let found_time = ref(-1)
 let found_qi = ref(-1)

 let is_event_update_for_driver = (e) => {
   switch (e) {
   | EventContUpdate(_, i, _) => i == driver_i
   | _ => false
   }
  }

 while !break.contents && i.contents < Js.Array.length(queue) {
  let (time, q) = Belt.Array.getExn(queue, i.contents)

  if time > maxtime {
    break := true
  } else {
    let match = Js.Array.findIndex(is_event_update_for_driver, q.active)

    if match != -1 {
      break := true
      found_time := i.contents
      found_qi := match
    }
  }

  i := i.contents + 1
 }

 if found_time.contents == -1 {
  None
 } else {
  Some((found_time.contents, found_qi.contents))
 }
}

let array_remove = (arr, i) => {
 let pre = Js.Array.slice(~start=0, ~end_=i, arr)
 let post = Js.Array.slice(~start=i + 1, ~end_=Js.Array.length(arr), arr)
 Js.Array2.concat(pre, post)
}

let region_get = (q, t) =>
 switch t {
 | RegionActive => q.active
 | RegionInactive => q.inactive
 | RegionNBA => q.nba
}

let region_set = (q, t, region) =>
 switch t {
 | RegionActive => {...q, active: region}
 | RegionInactive => {...q, inactive: region}
 | RegionNBA => {...q, nba: region}
}

let add_event = (queue, t, time, e) => {
 let i = Js.Array.findIndex(((time', _)) => { time' >= time }, queue)

 if i == -1 {
  let q = region_set(empty_time_slot, t, [e])
  Js.Array2.concat(queue, [(time, q)])
 } else if fst(Belt.Array.getExn(queue, i)) == time {
  let q = snd(Belt.Array.getExn(queue, i))
  let region = Js.Array2.concat(region_get(q, t), [e])
  let q = region_set(q, t, region)
  let queue = Js.Array.copy(queue)
  let _ = Belt.Array.setExn(queue, i, (time, q))
  queue
 } else {
  let pre = Js.Array.slice(~start=0, ~end_=i, queue)
  let q = region_set(empty_time_slot, t, [e])
  let post = Js.Array.slice(~start=i, ~end_=Js.Array.length(queue), queue)
  Js.Array2.concat(Js.Array2.concat(pre, [(time, q)]), post)
 }
}

let proc_inc_pc = (p, ps) => {
 let newpc = ps.pc + 1

 if newpc == Js.Array.length(p.stmts) {
  {pc: 0, state: is_repeating_proc_type(p.proc_type) ? ProcStateRunning : ProcStateFinished}
 } else {
  {pc: newpc, state: ProcStateRunning}
 }
}

let rec ee_is_sensitive_to = (ee, env, oldenv) =>
 switch ee {
 | EEPos(e) =>
   let newv = run_exp(env, e)
   let oldv = run_exp(oldenv, e)
   val_edge(oldv, newv) == EdgePos
 | EENeg(e) =>
   let newv = run_exp(env, e)
   let oldv = run_exp(oldenv, e)
   val_edge(oldv, newv) == EdgeNeg
 | EEEdge(e) =>
   let newv = run_exp(env, e)
   let oldv = run_exp(oldenv, e)
   val_edge(oldv, newv) != EdgeNone
 | EENever =>
   false
 | EEOr(ee1, ee2) =>
   ee_is_sensitive_to(ee1, env, oldenv) ||
   ee_is_sensitive_to(ee2, env, oldenv)
 }

let stm_is_sensitive_to = (tm, env, oldenv) =>
 switch tm {
 | StmtTimingControl(TMEvent(ee)) =>
   ee_is_sensitive_to(ee, env, oldenv)
 | StmtWait(e) =>
   is_if_true(run_exp(env, e))
 | _ => false
 }

let run_listeners = (s, contI, var, oldenv) => {
 if (Belt.Map.String.getExn(s.env, var) == Belt.Map.String.getExn(oldenv, var)
     || s.status == RunningFinals) {
  // nothing has changed, and also don't run listeners in running-finals mode
  s
 } else {
  let queue = Js.Array.copy(s.queue)

  // listening continuous assignments
  let updates = s.vmodule.conts
              |> Js.Array.mapi((var, i) => (var, i))
              |> Js.Array.filter(((c, j)) => contI != j && cont_depends_on_var(c, var))

  let updates = Js.Array.map(((c : cont, i)) => (c.delay, (i, run_exp(s.env, c.rhs))), updates)

  let replace_update_event = (queue, (delay, (i, v))) => {
    let delay = calculate_event_delay(s.vmodule.nets, Belt.Array.getExn(s.vmodule.conts, i).lhs, delay)
    // ASSUMPTION: The "to value" is the new value of the driver,
    //             not the new value (= result of resolution function) of the net.
    //             This is what simulators do as well.
    let d = delay_value(delay, v)
    let md = delay_max(delay)

    let queue = switch find_queued_update(queue, s.time + md, i) {
                | None => queue
                | Some((qqi, qi)) =>
                  let (time, q) = Belt.Array.getExn(queue, qqi)
                  let active = Js.Array.copy(q.active)
                  let _ = Js.Array2.spliceInPlace(active, ~pos=qi, ~remove=1, ~add=[])

                  // remove whole sub-queue if active empty...
                  if active == [] {
                   array_remove(queue, qqi)
                  } else {
                   let queue = Js.Array.copy(queue)
                   let _ = Belt.Array.setExn(queue, qqi, (time, {...q, active: active}))
                   queue
                  }
                }

    let queue = add_event(queue, RegionActive, s.time + d, EventContUpdate(next_event_id(), i, v))
    queue
  }
  let queue = Js.Array.reduce(replace_update_event, queue, updates)

  // listening processes
  let toactivate =
   s.proc_env
   |> Js.Array.mapi((ps, i) => (ps, i))
   |> Js.Array.filter(((ps, i)) =>
       ps.state == ProcStateWaiting &&
       stm_is_sensitive_to(Belt.Array.getExn(Belt.Array.getExn(s.vmodule.procs, i).stmts, ps.pc), s.env, oldenv))
   |> Js.Array.map(((ps, i)) => (proc_inc_pc(Belt.Array.getExn(s.vmodule.procs, i), ps), i))

  // micro-optimisation in case nothing has changed
  let proc_env = toactivate == [] ? s.proc_env : Js.Array.copy(s.proc_env)
  let _ = Js.Array.forEach(((ps, i)) => Belt.Array.setExn(proc_env, i, ps), toactivate)

  // schedule events for now-running processes
  let newevents =
   toactivate
   |> Js.Array.filter(((ps, _)) => ps.state == ProcStateRunning)
   |> Js.Array.map(((_, i)) => EventEvaluation(next_event_id(), i))
  let (ts, queue0) = Belt.Array.getExn(queue, 0)
  let active = Js.Array2.concat(queue0.active, newevents)
  let queue0 = {...queue0, active: active}
  let _ = Belt.Array.setExn(queue, 0, (ts, queue0))

  {...s, proc_env: proc_env, queue: queue}
 }
}

let step_proc_goto = (s, i, jump) => {
 let proc_env = Js.Array.copy(s.proc_env)
 let ps = Belt.Array.getExn(proc_env, i)
 let p = Belt.Array.getExn(s.vmodule.procs, i)

 let newpc = ps.pc + jump

 let ps = if newpc == Js.Array.length(p.stmts) {
  {pc: 0, state: is_repeating_proc_type(p.proc_type) ? ProcStateRunning : ProcStateFinished}
 } else {
  {...ps, pc: newpc}
 }

 let _ = Belt.Array.setExn(proc_env, i, ps)
 {...s, proc_env: proc_env}
}

let value_or_time_str_value = (v) =>
 switch v {
 | VTValue(v) => value_str_clean(v)
 | _ => Js.Exn.raiseError("expected value found time")
 }

let value_or_time_str_time = (v) =>
 switch v {
 | VTTime(t) => Belt.Int.toString(t)
 | _ => Js.Exn.raiseError("expected time found value")
 }

// extremely inefficient, a string builder would be nice here?
let format = (str, vs) => {
 let buf = ref("")
 let i = ref(0)
 let vsi = ref(0)

 while i.contents < Js.String.length(str) {
  if Js.String.get(str, i.contents) == "%" {
   i := i.contents + 1

   let c = Js.String.get(str, i.contents)

   if c == "b" {
    buf := Js.String2.concat(buf.contents, value_or_time_str_value(Belt.Array.getExn(vs, vsi.contents)))
    vsi := vsi.contents + 1
   } else if c == "d" {
    buf := Js.String2.concat(buf.contents, value_or_time_str_time(Belt.Array.getExn(vs, vsi.contents)))
    vsi := vsi.contents + 1
   } else {
    Js.Exn.raiseError("unsupported format")
   }

  i := i.contents + 1
  } else {
   buf := Js.String2.concat(buf.contents, Js.String.get(str, i.contents))
   i := i.contents + 1
  }
 }

 // always newline at the end
 buf := Js.String2.concat(buf.contents, "\n")
 buf.contents
}

// differences in time must be ignored
let display_eq = (v1, v2) =>
 switch (v1, v2) {
 | (VTTime(_), VTTime(_)) => true
 | (VTValue(v1), VTValue(v2)) => v1 == v2
 | _ => Js.Exn.raiseError("impossible")
 }

let run_display = (s, str, es, prev) => {
 let vs = Js.Array.map(run_exp_or_time(s.time, s.env), es)
 let same = switch prev {
 | None => false
 | Some(prev) => Belt.Array.every2(vs, prev, display_eq)
 }

 if same {
  (vs, s.output)
 } else {
  let output = format(str, vs)
  let output = Js.String2.concat(s.output, output)
  (vs, output)
 }
}

let rec step_proc = (s, i) => {
 let p = Belt.Array.getExn(s.vmodule.procs, i)
 let ps = Belt.Array.getExn(s.proc_env, i)

 switch Belt.Array.getExn(p.stmts, ps.pc) {
 | StmtTimingControl(TMDelay(delay)) =>
   let ps = {...ps, state: ProcStateWaiting}
   let proc_env = Js.Array.copy(s.proc_env)
   let _ = Belt.Array.setExn(proc_env, i, ps)

   let region = delay == 0 ? RegionInactive : RegionActive
   let queue = add_event(s.queue, region, s.time + delay, EventDelayedEvaluation(next_event_id(), i))
   {...s, proc_env: proc_env, queue: queue}

 | StmtTimingControl(TMEvent(_)) =>
   let ps = {...ps, state: ProcStateWaiting}
   let proc_env = Js.Array.copy(s.proc_env)
   let _ = Belt.Array.setExn(proc_env, i, ps)

   {...s, proc_env: proc_env}

 | StmtWait(e) =>
   // ASSUMPTION: unclear if we should allow context-switching to
   // another process here when the condition is already true;
   // currently we do not allow it
   let v = run_exp(s.env, e)

   let ps = is_if_true(v)
            ? proc_inc_pc(p, ps)
            : {...ps, state: ProcStateWaiting}
   let proc_env = Js.Array.copy(s.proc_env)
   let _ = Belt.Array.setExn(proc_env, i, ps)

   {...s, proc_env: proc_env}

 | StmtTimingControl(TMStar) =>
   Js.Exn.raiseError("impossible, all stars should have been preprocessed away")

 | StmtAssn(AssnBlocking, var, dopt, e) =>
   let newv = run_exp(s.env, e)

   switch dopt {
   | None =>
     let oldenv = s.env
     let env = Belt.Map.String.set(s.env, var, newv)

     let ps = proc_inc_pc(p, ps)
     let proc_env = Js.Array.copy(s.proc_env)
     let _ = Belt.Array.setExn(proc_env, i, ps)

     let s = {...s, proc_env: proc_env, env: env}
     let s = run_listeners(s, -1, var, oldenv)
     s
   | Some(delay) =>
     let ps = {...ps, state: ProcStateWaiting}
     let proc_env = Js.Array.copy(s.proc_env)
     let _ = Belt.Array.setExn(proc_env, i, ps)

     let region = delay == 0 ? RegionInactive : RegionActive
     let queue = add_event(s.queue, region, s.time + delay, EventBlockUpdate(next_event_id(), i, var, newv))

     {...s, proc_env: proc_env, queue: queue}
   }

 | StmtAssn(AssnNonBlocking, var, dopt, e) =>
   let v = run_exp(s.env, e)

   let ps = proc_inc_pc(p, ps)
   let proc_env = Js.Array.copy(s.proc_env)
   let _ = Belt.Array.setExn(proc_env, i, ps)
   let delay = Belt.Option.getWithDefault(dopt, 0)

   let queue = add_event(s.queue, RegionNBA, s.time + delay, EventNBA(next_event_id(), var, v))
   let s = {...s, proc_env: proc_env, queue: queue}
   s

 | StmtDisplay(str, es) =>
   let (_, output) = run_display(s, str, es, None)

   let ps = proc_inc_pc(p, ps)
   let proc_env = Js.Array.copy(s.proc_env)
   let _ = Belt.Array.setExn(proc_env, i, ps)

   let s = {...s, proc_env: proc_env, output: output}
   s

 | StmtMonitor(str, es) =>
   let monitor = Some(str, es, None)

   let ps = proc_inc_pc(p, ps)
   let proc_env = Js.Array.copy(s.proc_env)
   let _ = Belt.Array.setExn(proc_env, i, ps)

   let s = {...s, proc_env: proc_env, monitor: monitor}
   s

 | StmtFinish(e) =>
   let v = run_exp(s.env, e)
   let oldstatus = s.status
   let s = {...s, status: Finished(Some(v))}

   switch oldstatus {
   | Running => run_finals(s)
   | _ => s
   }

 | StmtGoto(jump) =>
   step_proc_goto(s, i, jump)

 | StmtGotoUnless(e, jump) =>
   if is_if_true(run_exp(s.env, e)) {
    let ps = proc_inc_pc(p, ps)
    let proc_env = Js.Array.copy(s.proc_env)
    let _ = Belt.Array.setExn(proc_env, i, ps)
    let s = {...s, proc_env: proc_env}
    s
   } else {
    step_proc_goto(s, i, jump)
   }
 }
}

and steps_proc = (s, i) => {
 let fuel = ref(0)
 let sref = ref(s)

 while fuel.contents < 100 &&
       is_running(sref.contents.status) &&
       Belt.Array.getExn(sref.contents.proc_env, i).state == ProcStateRunning {
   fuel := fuel.contents + 1

   sref := step_proc(sref.contents, i)
 }

 if fuel.contents == 100 { Js.Exn.raiseError("time out!") }

 sref.contents
}

and run_finals_itr = (s, i) =>
 if (i >= Js.Array.length(s.vmodule.finals)) {
  s
 } else {
  let p = Belt.Array.getExn(s.vmodule.finals, i)

  let _ = Js.Array.push(p, s.vmodule.procs)
  let final_ps = {pc: 0, state: ProcStateRunning}
  let j = Js.Array.push(final_ps, s.proc_env)

  let s = steps_proc(s, j - 1)
  let _ = Js.Array.pop(s.vmodule.procs)
  let _ = Js.Array.pop(s.proc_env)

  is_running(s.status)
  ? run_finals_itr(s, i + 1)
  : s
 }

and run_finals = (s) => {
 let oldstatus = s.status
 let s = {...s, proc_env: Js.Array.copy(s.proc_env), status: RunningFinals}
 let s = run_finals_itr(s, 0)

 // Restore old status in case $finish was not called again
 is_running(s.status) ? {...s, status: oldstatus} : s
}

let region_shift = (region, ei) => {
 let e = Belt.Array.getExn(region, ei)
 switch e {
 | Events(_, [_]) =>
   let _ = Js.Array2.spliceInPlace(region, ~pos=ei, ~remove=1, ~add=[])
 | Events(id, es) =>
   let es = Js.Array.copy(es)
   let _ = Js.Array.shift(es)
   region[ei] = Events(id, es)
 | _ =>
   let _ = Js.Array2.spliceInPlace(region, ~pos=ei, ~remove=1, ~add=[])
 }
}

// Entry functions:

let build_proc_state = (p) => {
 // REF(p. 207): The procedure is automatically triggered once at time zero, after all initial and always
 // procedures have been started so that the outputs of the procedure are consistent with the inputs.

 // pc = 1 to skip initial event control
 let pc = switch (p.proc_type) {
 | ProcAlways(AlwaysComb) => 1
 | ProcAlways(AlwaysLatch) => 1
 | _ => 0
 }
 { pc: pc, state: ProcStateRunning }
}

let run_exp_init = (env, eopt) =>
 switch eopt {
 | None => ValBit(BitX)
 | Some(e) => run_exp(env, e)
 }

let build_state = (m : vmodule, old_process_nba_first) => {
 let proc_es = m.procs
             |> Js.Array.mapi((p, i) => (p, i))
             |> Js.Array.filter(((p, _)) => proc_run_at_0(p.proc_type))
             |> Js.Array.map(((_, i)) => EventEvaluation(next_event_id(), i))

 let env = Belt.Map.String.fromArray(Belt.Array.map(m.nets, net => (net.name, ValBit(net_has_driver(net.name, m.conts) ? BitX : BitZ))))
 let env = Belt.Array.reduce(m.vars, env, (env, d) => Belt.Map.String.set(env, d.target, run_exp_init(env, d.init)))

 { vmodule: m,
   status: Running,
   env: env,
   // ASSUMPTION: Based on what simulators seem to do, this should be X,
   //             but I haven't found anything in the standard saying this.
   //             The standard says that unconnected nets should be Z --
   //             it is unclear what to do here...
   cont_env: Belt.Array.map(m.conts, _ => ValBit(BitX)),
   // ASSUMPTION: Always processes start in running state,
   //             they have not reached the first blocking/control
   //             statement yet.
   proc_env: Belt.Array.map(m.procs, build_proc_state),
   queue: [(0, {...empty_time_slot, active: proc_es})],
   monitor: None,
   output: "",
   time: 0,
   process_nba_first: old_process_nba_first }
 }

let build_initial_cont_update_event = (s, p, i) => {
  // ASSUMPTION: Should we always schedule an event -- even when v is just 'z?
  let v = run_exp(s.env, p.rhs)
  let d = calculate_event_delay(s.vmodule.nets, p.lhs, p.delay)
  let d = delay_value(d, v)
  (d, EventContUpdate(next_event_id(), i, v))
}

// things of init that requires full state to run
let run_init = (s:state) => {
  // REF: 4.9.1 Continuous assignment
  // REF: A continuous assignment process is also evaluated at time zero in order to propagate constant values.
  let es = Js.Array.mapi(build_initial_cont_update_event(s), s.vmodule.conts)

  // ASSUMPTION: Unclear if values in es should propagate to env directly or be events?
  //             Probably events as implemented now?

  let queue = Js.Array.reduce((queue, (delay, e)) => { add_event(queue, RegionActive, delay, e) }, s.queue, es)
  {...s, queue: queue}
 }

let event_active = (s, time, i) =>
 s.status == Running &&
 s.time == time &&
 (!s.process_nba_first ||
  switch s.queue[0] {
  | None => true
  | Some((_, queue0)) =>
    switch queue0.active[0] {
    | Some(Events(_, _)) => i == 0
    | _ => true
    }
  })

// Precondition: event_active(s, <current time>, i) must be true
// run active event nr. ei
let run_event = (s:state, ei:int) => {
 // remove run event
 let (ts, queue0) = Belt.Array.getExn(s.queue, 0)
 let active = Js.Array.copy(queue0.active)
 let e = Belt.Array.getExn(active, ei)
 let _ = region_shift(active, ei)
 let queue0 = {...queue0, active: active}
 let queue = Js.Array.copy(s.queue)
 let _ = Belt.Array.setExn(queue, 0, (ts, queue0))
 let s = {...s, queue: queue}

 switch e {
 | EventContUpdate(_, i, v) =>
   let cont_env = Js.Array.copy(s.cont_env)
   let _ = Belt.Array.setExn(cont_env, i, v)

   let var = Belt.Array.getExn(s.vmodule.conts, i).lhs
   let net = lookupNetExn(s.vmodule.nets, var)

   // propagate new driver value to net, i.e., re-run resolution function
   let newv = s.vmodule.conts
            |> Js.Array.mapi((var, i) => (var, i))
            |> Js.Array.filter(((c, _)) => c.lhs == var)
            |> Js.Array.map(((_, i)) => Belt.Array.getExn(cont_env, i))
            |> Utils.reduce0(val_bit_lift2(net_type_res(net.type_)))
   let env = Belt.Map.String.set(s.env, var, newv)
   let oldenv = s.env
   let s = {...s, cont_env: cont_env, env: env}

   let s = run_listeners(s, i, var, oldenv)
   s

 | EventBlockUpdate(_, i, var, newv) =>
   let oldenv = s.env
   let env = Belt.Map.String.set(s.env, var, newv)

   let ps = Belt.Array.getExn(s.proc_env, i)
   let p = Belt.Array.getExn(s.vmodule.procs, i)
   let ps = proc_inc_pc(p, ps)
   let proc_env = Js.Array.copy(s.proc_env)
   let _ = Belt.Array.setExn(proc_env, i, ps)

   let s = {...s, proc_env: proc_env, env: env}
   let s = run_listeners(s, -1, var, oldenv)

   steps_proc(s, i)

 | EventEvaluation(_, i) =>
   steps_proc(s, i)

 | EventDelayedEvaluation(_, i) =>
   let p = Belt.Array.getExn(s.vmodule.procs, i)
   let ps = Belt.Array.getExn(s.proc_env, i)
   let ps = proc_inc_pc(p, ps)
   let proc_env = Js.Array.copy(s.proc_env)
   let _ = Belt.Array.setExn(proc_env, i, ps)
   let s = {...s, proc_env: proc_env}

   steps_proc(s, i)

 | Events(_, es) =>
   let es = Js.Array.copy(es)
   let e = Js.Array.shift(es)
   let e = Js.Option.getExn(e)
   let (var, newv) = dest_EventNBA(e)
   let oldenv = s.env
   let env = Belt.Map.String.set(s.env, var, newv)
   let s = {...s, env: env}
   let s = run_listeners(s, -1, var, oldenv)
   s

 | EventNBA(_, _, _) =>
   Js.Exn.raiseError("impossible: EventNBA cannot be in active region")
 }
}

let inactive_done_active = (s, time) =>
 s.status == Running &&
 s.time == time &&
 (switch Belt.Array.getExn(s.queue, 0) {
  | (_, queue0) =>
    queue0.active == [] &&
    queue0.inactive != []
  })

// Precondition: inactive_done_active must be true
let run_inactive_done = (s) => {
 let (_, queue0) = Belt.Array.getExn(s.queue, 0)

 let queue0 = {...queue0, active: queue0.inactive, inactive: []}
 let queue = Js.Array.copy(s.queue)
 let _ = Belt.Array.setExn(queue, 0, (s.time, queue0))
 {...s, queue: queue}
}

let nba_done_active = (s, time) =>
 s.status == Running &&
 s.time == time &&
 (switch Belt.Array.getExn(s.queue, 0) {
  | (_, queue0) =>
    queue0.active == [] &&
    queue0.inactive == [] &&
    queue0.nba != []
  })

// Precondition: nba_done_active must be true
let run_nba_done = (s) => {
 let (_, queue0) = Belt.Array.getExn(s.queue, 0)

 let e = Events(next_event_id(), queue0.nba)
 let queue0 = {...queue0, active: Js.Array2.concat(queue0.active, [e]), nba: []}
 let queue = Js.Array.copy(s.queue)
 let _ = Belt.Array.setExn(queue, 0, (s.time, queue0))
 {...s, queue: queue}
}

let time_active = (s) => {
 if s.status == Running {
  let len = Js.Array.length(s.queue)

  if len == 0 {
   Js.Exn.raiseError("impossible")
  } else {
   let region = snd(Belt.Array.getExn(s.queue, 0))
   region.active == [] && region.inactive == [] && region.nba == []
  }
 } else {
  false
 }
}

let run_monitor = (s) =>
 switch s.monitor {
 | None => s
 | Some(str, es, prev) =>
   let (vs, output) = run_display(s, str, es, prev)
   {...s, output: output, monitor: Some(str, es, Some(vs))}
 }

// Precondition: time_done(s) must be true
let run_time = (s) => {
 let s = run_monitor(s)
 let queue = Js.Array.copy(s.queue)
 let _ = Js.Array.shift(queue)

 if Js.Array.length(queue) == 0 {
  let s = {...s, queue: queue, status: Finished(None)}
  run_finals(s)
 } else {
  let (time, _) = Belt.Array.getExn(queue, 0)
  {...s, queue: queue, time: time}
 }
}
