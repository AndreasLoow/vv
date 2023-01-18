open Bit

/* Syntax/AST */

// TODO: Add support for arrays
type value = ValBit(bit) //| ValArray(array<bit>)

// JS API
let mk_ValBit = (b) => ValBit(b)

// must be here since called from format
let value_str = (v) => {
 switch (v) {
 | ValBit(b) => "1'b" ++ Bit.pp_bit(b)
 }
}

type value_or_time = VTValue(value) | VTTime(int)

type var = string

// logical ops are lazy, "bitwise" are not
type op2 = LAnd | LOr | BAnd | BOr | BXOr | Add

type rec exp =
  | ExpVal(value)
  | ExpVar(var)
  | ExpNot(exp)
  | ExpOp2(exp, op2, exp)
  | ExpCond(exp, exp, exp)

// JS API
let mk_ExpVal = (v) => ExpVal(v)
let mk_ExpVar = (var) => ExpVar(var)
let mk_ExpNot = (e) => ExpNot(e)
let mk_ExpOp2_LAnd = (e1, e2) => ExpOp2(e1, LAnd, e2)
let mk_ExpOp2_LOr = (e1, e2) => ExpOp2(e1, LOr, e2)
let mk_ExpOp2_BAnd = (e1, e2) => ExpOp2(e1, BAnd, e2)
let mk_ExpOp2_BOr = (e1, e2) => ExpOp2(e1, BOr, e2)
let mk_ExpOp2_BXOr = (e1, e2) => ExpOp2(e1, BXOr, e2)
let mk_ExpOp2_Add = (e1, e2) => ExpOp2(e1, Add, e2)
let mk_ExpCond = (e1, e2, e3) => ExpCond(e1, e2, e3)

type exp_or_time = ETExp(exp) | ETTime

// JS API
let mk_ETExp = (e) => ETExp(e)
let mk_ETTime = ETTime

// delays: rise (= 1), fall (= 2), and turn-off delays (= 3)
type delay = Delay0 | Delay1(int) | Delay2(int, int) | Delay3(int, int, int)

// JS API
let mk_Delay0 = Delay0
let mk_Delay1 = (i1) => Delay1(i1)
let mk_Delay2 = (i1, i2) => Delay2(i1, i2)
let mk_Delay3 = (i1, i2, i3) => Delay3(i1, i2, i3)

// To 1 delay
let delay_1 = (d) =>
 switch (d) {
 | Delay0 => 0
 | Delay1(d1) => d1
 | Delay2(d1, _) => d1
 | Delay3(d1, _, _) => d1
 }

// To 0 delay
let delay_0 = (d) =>
 switch (d) {
 | Delay0 => 0
 | Delay1(d1) => d1
 | Delay2(_, d2) => d2
 | Delay3(_, d2, _) => d2
 }

// To x delay
let delay_x = (d) =>
 switch (d) {
 | Delay0 => 0
 | Delay1(d1) => d1
 | Delay2(d1, d2) => min(d1, d2)
 | Delay3(d1, d2, d3) => min(min(d1, d2), d3)
 }

// To z delay
let delay_z = (d) =>
 switch (d) {
 | Delay0 => 0
 | Delay1(d1) => d1
 | Delay2(d1, d2) => min(d1, d2)
 | Delay3(_, _, d3) => d3
 }

// REF: Table 28-9—Rules for propagation delays
let delay_bit = (d, b) =>
 switch (b) {
 | BitTrue => delay_1(d)
 | BitFalse => delay_0(d)
 | BitX => delay_x(d)
 | BitZ => delay_z(d)
 }

let delay_value = (d, v) =>
 switch (v) {
 | ValBit(b) => delay_bit(d, b)
 }

let opt_delay_value = (d, v) =>
 switch d {
 | None => 0
 | Some(d) => delay_value(d, v)
 }

let delay_max = (d) =>
 switch (d) {
 | Delay0 => 0
 | Delay1(d1) => d1
 | Delay2(d1, d2) => max(d1, d2)
 | Delay3(d1, d2, d3) => max(max(d1, d2), d3)
 }

let delay_plus = (d1, d2) =>
 Delay3(delay_1(d1) + delay_1(d2),
        delay_0(d1) + delay_0(d2),
        delay_z(d1) + delay_z(d2))

type edge = EdgePos | EdgeNeg | EdgeNone

let bit_edge = (from, to) =>
 switch (from, to) {
 | (BitFalse, BitFalse) => EdgeNone
 | (BitFalse, _) => EdgePos

 | (BitTrue, BitTrue) => EdgeNone
 | (BitTrue, _) => EdgeNeg

 | (BitX, BitFalse) => EdgeNeg
 | (BitX, BitTrue) => EdgePos
 | (BitX, _) => EdgeNone

 | (BitZ, BitFalse) => EdgeNeg
 | (BitZ, BitTrue) => EdgePos
 | (BitZ, _) => EdgeNone
 }

type assn_type = AssnBlocking | AssnNonBlocking

// JS API
let mk_AssnBlocking = AssnBlocking
let mk_AssnNonBlocking = AssnNonBlocking

// todo: vars can actually be general exps...
// always_comb, @*, @(*) are pre-processed away
type rec event_expression =
 | EEPos(var) // posedge
 | EENeg(var) // negedge
 | EEEdge(var) // any edge
 | EENever // hard-coded never, just needed since we restrict other cases to vars
 | EEOr(event_expression, event_expression) // "or" or ","
 // | iff <-- todo?

// JS API
let mk_EEPos = (var) => EEPos(var)
let mk_EENeg = (var) => EENeg(var)
let mk_EEEdge = (var) => EEEdge(var)
let mk_EEOr = (e1, e2) => EEOr(e1, e2)

let event_expression_fromArray = (xs) =>
 if xs == [] {
  None
 } else {
  Some(Utils.reduce0((e1, e2) => EEOr(e1, e2), xs))
 }

// LIMITATION: Actually, dynamically calculated delays are allowed (TMDelay)
type timing_control =
 | TMDelay(int) // e.g., #5 x = 4;
 | TMEvent(event_expression) // e.g., @(posedge clk or negedge rst)
 | TMStar
// | TMWait <-- TODO

// JS API
let mk_TMDelay = (i) => TMDelay(i)
let mk_TMEvent = (ee) => TMEvent(ee)
let mk_TMStar = TMStar

type stmt =
 | StmtTimingControl(timing_control)
 | StmtAssn(assn_type, var, option<delay>, exp)
 | StmtDisplay(string, array<exp_or_time>)
 | StmtMonitor(string, array<exp_or_time>)
 | StmtFinish
 | StmtGoto(int)
 | StmtGotoUnless(exp, int)

// precond: edge is never EdgeNone
let rec ee_is_sensitive_to = (ee, var, edge) =>
 switch ee {
 | EEPos(var') => var' == var && edge == EdgePos
 | EENeg(var') => var' == var && edge == EdgeNeg
 | EEEdge(var') => var' == var
 | EENever => false
 | EEOr(ee1, ee2) => ee_is_sensitive_to(ee1, var, edge) || ee_is_sensitive_to(ee2, var, edge)
 }

let tm_is_sensitive_to = (tm, var, ValBit(oldv), ValBit(newv)) =>
 switch tm {
 | StmtTimingControl(TMEvent(ee)) => {
   let edge = bit_edge(oldv, newv)

   if edge == EdgeNone {
     false
   } else {
     ee_is_sensitive_to(ee, var, edge)
   }
 }
 | _ => Js.Exn.raiseError("impossible")
 }

type cont = { lhs: var, delay: delay, rhs: exp }

type decl = { target: var, init: option<exp> }

// Table 6-1—Built-in net types
type net_type = NetTypeWire // Synonyms: tri
              | NetTypeAnd  // Synonyms: triand
              | NetTypeOr   // Synonyms: trior

let net_type_res = (nt) =>
 switch nt {
 | NetTypeWire => res_wire
 | NetTypeAnd => res_and
 | NetTypeOr => res_or
 }

// Uninteresting net types:
// uwire - "unresolved or unidriver wire", at most one driver allowed
// tri0/tri1 and supply0/supply1 -- just a wire with an implicit driver (of different strengths)

// Unsupported:
// trireg -- should probably look into this one...
// User-defined net types

type net = { type_: net_type, name: var, delay: delay }

type always_type = Always | AlwaysComb | AlwaysFf | AlwaysLatch
type proc_type = ProcAlways(always_type) | ProcInitial

let is_new_always_type = (at) =>
 switch at {
 | Always => false
 | _ => true
 }

let is_new_proc_type = (pt) =>
 switch pt {
 | ProcAlways(at) => is_new_always_type(at)
 | _ => false
 }

let is_repeating_proc_type = (pt) =>
 switch pt {
 | ProcAlways(_) => true
 | ProcInitial => false
 }

type proc = { proc_type: proc_type, stmts: array<stmt> }

let proc_run_at_0 = (t) =>
 switch (t) {
 | ProcAlways(_) => true
 | ProcInitial => true
 }

type vmodule = {
 vars: array<decl>,
 nets: array<net>,
 conts: array<cont>,
 procs: array<proc>
}

let vmodule_empty = {vars: [], procs: [], nets: [], conts: []}

/* Semantics */

// first element is pc
//type block_process_state = ProcedureState(int, block_process)

type event_id = int
let event_id_counter = ref(0:event_id)

let next_event_id = () => {
 let id = event_id_counter.contents
 event_id_counter.contents = id + 1
 id
}

type process_index = IndexCont(int) | IndexProcess(int)

type rec event
 = EventContUpdate(event_id, int, value) // continuous assignment update
 | EventBlockUpdate(event_id, int, string, value) // delayed assignment from block
 | EventNBA(event_id, string, value)
 | EventEvaluation(event_id, process_index) // wake up from waiting
 | Events(event_id, array<event>) // sequence of events from NBA, must be just EventNBA...

let dest_EventNBA = (e) =>
 switch e {
 | EventNBA(_, var, v) => (var, v)
 }

let event_key = (e) =>
 switch e {
 | EventContUpdate(id, _, _) => Belt.Int.toString(id)
 | EventBlockUpdate(id, _, _, _) => Belt.Int.toString(id)
 | EventNBA(id, _, _) => Belt.Int.toString(id)
 | EventEvaluation(id, _) => Belt.Int.toString(id)
 | Events(id, _) => Belt.Int.toString(id)
}

type event_queue =
 { active: array<event>, inactive: array<event>, nba: array<event> }

let empty_event_queue =
 { active: [], inactive: [], nba: [] }

type region = RegionActive | RegionInactive | RegionNBA

// TODO: should use the same name as the standard
type proc_running_state = ProcStateRunning | ProcStateWaiting | ProcStateBlocked | ProcStateFinished

// Currently no need for local vars,
// some of the data in here might be redundant w.r.t.
// what's in the queue...
type proc_state = {
 pc: int, // the instruction to execute next
 state: proc_running_state
}

type status = Running | Finished

let status_str = (s) =>
 switch s {
 | Running => "running"
 | Finished => "finished"
 }

// env is both nets and variables (cannot have name overlap anyway)
type state =
 { vmodule: vmodule,
   status: status,
   env: Belt.Map.String.t<value>,
   cont_env: array<value>, // latest computed value for conts
   proc_env: array<proc_state>,
   queue: array<(int, event_queue)>,
   monitor: option<(string, array<exp_or_time>, option<array<value_or_time>>)>, // this represents the "postponed" region
   output: string,
   time: int }

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
let val_cond = val_bit_lift2(bit_cond)
let val_is_true = val_bit_bind(bit_is_true)
let val_is_false = val_bit_bind(bit_is_false)
let val_edge = val_bit_bind2(bit_edge)

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

let build_evaluation_events = (conts, var) => {
 open Js.Array
 conts |> mapi((c, i) => (c, i))
       |> filter(((c, _)) => cont_depends_on_var(c, var))
       |> map(ci => EventEvaluation(next_event_id(), IndexCont(snd(ci))))
}

let in_array = (x, xs) => {
 Js.Option.isSome(Js.Array.find(e => e == x, xs))
}

// ASSUMPTION: Simply add net delay to each update... is this the same as doing a separate delay
//             when the update is eventually run? If so, this is much easier to implement...
let calculate_event_delay = (nets, netname, delay) => {
 let net_delay = get_net_delay(nets, netname)
 delay_plus(net_delay, delay)
}

// maxtime just a micro-optimization telling us how far into the future we need to look;
// made everything very ugly since re-script does not have break/return...
// microoptimization should probably just be removed...
let find_queued_update = (queue, maxtime, driver_i) => {
 let break = ref(false)
 let i = ref(0)

 let found_time = ref(-1)
 let found_qi = ref(-1)

 let is_event_update_for_driver = (e) => {
   switch (e) {
   | EventContUpdate(_, i, v) => i == driver_i
   | _ => false
   }
  }

 while !break.contents && i.contents < Js.Array.length(queue) {
  let (time, q) = queue[i.contents]

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
  let q = region_set(empty_event_queue, t, [e])
  Js.Array2.concat(queue, [(time, q)])
 } else if fst(queue[i]) == time {
  let q = snd(queue[i])
  let region = Js.Array2.concat(region_get(q, t), [e])
  let q = region_set(q, t, region)
  let queue = Js.Array.copy(queue)
  let _ = Belt.Array.setExn(queue, i, (time, q))
  queue
 } else {
  let pre = Js.Array.slice(~start=0, ~end_=i, queue)
  let q = region_set(empty_event_queue, t, [e])
  let post = Js.Array.slice(~start=i, ~end_=Js.Array.length(queue), queue)
  Js.Array2.concat(Js.Array2.concat(pre, [(time, q)]), post)
 }
}

let proc_inc_pc = (p, ps) => {
 let newpc = ps.pc + 1

 if newpc == Js.Array.length(p.stmts) {
  {...ps, pc: 0, state: is_repeating_proc_type(p.proc_type) ? ProcStateRunning : ProcStateFinished}
 } else {
  {...ps, pc: newpc, state: ProcStateRunning}
 }
}

let run_listeners = (s, contI, var, oldv, newv) => {
 if (oldv == newv) {
  // nothing has changed
  s
 } else {
  let queue = Js.Array.copy(s.queue)

  // listening continuous assignments
  let updates = s.vmodule.conts
              |> Js.Array.mapi((var, i) => (var, i))
              |> Js.Array.filter(((c, j)) => contI != j && cont_depends_on_var(c, var))

  let updates = Js.Array.map(((c : cont, i)) => (c.delay, EventContUpdate(next_event_id(), i, run_exp(s.env, c.rhs))), updates)

  let replace_update_event = (queue, (delay, EventContUpdate(_, i, v))) => {
    let delay = calculate_event_delay(s.vmodule.nets, s.vmodule.conts[i].lhs, delay)
    // ASSUMPTION: The "to value" is the new value of the driver, not the new value (= result of resolution function)
    //             of the net.
    let d = delay_value(delay, v)
    let md = delay_max(delay)

    let queue = switch find_queued_update(queue, s.time + md, i) {
                | None => queue
                | Some((qqi, qi)) =>
                  let (time, q) = queue[qqi]
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
   |> Js.Array.filter(((ps, i)) => ps.state == ProcStateWaiting &&
                                   tm_is_sensitive_to(s.vmodule.procs[i].stmts[ps.pc], var, oldv, newv))

  // todo: this is inefficient... what if nothing has changed...
  let proc_env = Js.Array.copy(s.proc_env)

  for i in 0 to (Js.Array.length(toactivate)-1) {
   let (ps, j) = toactivate[i]
   let ps = proc_inc_pc(s.vmodule.procs[j], ps)

   let _ = Belt.Array.setExn(proc_env, j, ps)
  }

  let newevents = Js.Array.map(((_, i)) => EventEvaluation(next_event_id(), IndexProcess(i)), toactivate)
  let (ts, queue0) = queue[0]
  let active = Js.Array2.concat(queue0.active, newevents)
  let queue0 = {...queue0, active: active}
  let _ = Belt.Array.setExn(queue, 0, (ts, queue0))

  {...s, proc_env: proc_env, queue: queue}
 }
}

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

let step_proc_goto = (s, i, jump) => {
 let proc_env = Js.Array.copy(s.proc_env)
 let ps = proc_env[i]
 let p = s.vmodule.procs[i]

 let newpc = ps.pc + jump

 let ps = if newpc == Js.Array.length(p.stmts) {
  {...ps, pc: 0, state: is_repeating_proc_type(p.proc_type) ? ProcStateRunning : ProcStateFinished}
 } else {
  {...ps, pc: newpc}
 }

 let _ = Belt.Array.setExn(proc_env, i, ps)
 {...s, proc_env: proc_env}
}

let value_or_time_str_value = (v) =>
 switch v {
 | VTValue(v) => value_str(v)
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
    buf := Js.String2.concat(buf.contents, value_or_time_str_value(vs[vsi.contents]))
    vsi := vsi.contents + 1
   } else if c == "d" {
    buf := Js.String2.concat(buf.contents, value_or_time_str_time(vs[vsi.contents]))
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

let step_proc = (s, ei, i) => {
 let p = s.vmodule.procs[i]
 let ps = s.proc_env[i]

 switch p.stmts[ps.pc] {
 | StmtTimingControl(TMDelay(delay)) => {
   let ps = proc_inc_pc(p, ps)
   let ps = {...ps, state: ProcStateBlocked}
   let proc_env = Js.Array.copy(s.proc_env)
   let _ = Belt.Array.setExn(proc_env, i, ps)

   let queue = add_event(s.queue, RegionActive, s.time + delay, EventEvaluation(next_event_id(), IndexProcess(i)))
   {...s, proc_env: proc_env, queue: queue}
 }
 | StmtTimingControl(TMEvent(d)) => {
   let ps = {...ps, state: ProcStateWaiting}
   let proc_env = Js.Array.copy(s.proc_env)
   let _ = Belt.Array.setExn(proc_env, i, ps)

   // TODO: A little unclear how waiting processes should be represented,
   //       currently they are just represented with the help of the list of processes,
   //       i.e., no events
   {...s, proc_env: proc_env}
 }
 | StmtAssn(AssnBlocking, var, dopt, e) => {
   let newv = run_exp(s.env, e)

   switch dopt {
   | None =>
     let oldv = Belt.Map.String.getExn(s.env, var)
     let env = Belt.Map.String.set(s.env, var, newv)

     let ps = proc_inc_pc(p, ps)
     let proc_env = Js.Array.copy(s.proc_env)
     let _ = Belt.Array.setExn(proc_env, i, ps)

     let s = {...s, proc_env: proc_env, env: env}
     let s = run_listeners(s, -1, var, oldv, newv)
     s
   | Some(d) =>
     let ps = {...ps, state: ProcStateBlocked}
     let proc_env = Js.Array.copy(s.proc_env)
     let _ = Belt.Array.setExn(proc_env, i, ps)

     let delay = delay_value(d, newv)
     let region = delay == 0 ? RegionInactive : RegionActive
     let queue = add_event(s.queue, region, s.time + delay, EventBlockUpdate(next_event_id(), i, var, newv))

     {...s, proc_env: proc_env, queue: queue}
   }
 }
 | StmtAssn(AssnNonBlocking, var, dopt, e) => {
   let v = run_exp(s.env, e)

   let ps = proc_inc_pc(p, ps)
   let proc_env = Js.Array.copy(s.proc_env)
   let _ = Belt.Array.setExn(proc_env, i, ps)
   let delay = opt_delay_value(dopt, v)

   let queue = add_event(s.queue, RegionNBA, s.time + delay, EventNBA(next_event_id(), var, v))
   let s = {...s, proc_env: proc_env, queue: queue}
   s
 }
 | StmtDisplay(str, es) => {
   let (_, output) = run_display(s, str, es, None)

   let ps = proc_inc_pc(p, ps)
   let proc_env = Js.Array.copy(s.proc_env)
   let _ = Belt.Array.setExn(proc_env, i, ps)

   let s = {...s, proc_env: proc_env, output: output}
   s
  }
 | StmtMonitor(str, es) => {
   let monitor = Some(str, es, None)

   let ps = proc_inc_pc(p, ps)
   let proc_env = Js.Array.copy(s.proc_env)
   let _ = Belt.Array.setExn(proc_env, i, ps)

   let s = {...s, proc_env: proc_env, monitor: monitor}
   s
  }
 | StmtFinish =>
   {...s, status: Finished}
 | StmtGoto(jump) =>
   step_proc_goto(s, i, jump)
 | StmtGotoUnless(e, jump) => {
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
}

let steps_proc = (s, ei, i) => {
 let fuel = ref(0)
 let sref = ref(s)

 while fuel.contents < 100 &&
       sref.contents.status == Running &&
       sref.contents.proc_env[i].state == ProcStateRunning {
   fuel := fuel.contents + 1

   sref := step_proc(sref.contents, ei, i)
 }

 if fuel.contents == 100 { Js.Exn.raiseError("time out!") }

 sref.contents
}

let region_shift = (region, ei) => {
 let e = region[ei]
 switch e {
 | Events(_, [e]) =>
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

let build_state = (m : vmodule) => {
 let proc_es = m.procs
             |> Js.Array.mapi((p, i) => (p, i))
             |> Js.Array.filter(((p, _)) => proc_run_at_0(p.proc_type))
             |> Js.Array.map(((p, i)) => EventEvaluation(next_event_id(), IndexProcess(i)))

 let env = Belt.Map.String.fromArray(Belt.Array.map(m.nets, net => (net.name, ValBit(net_has_driver(net.name, m.conts) ? BitX : BitZ))))
 let env = Belt.Array.reduce(m.vars, env, (env, d) => Belt.Map.String.set(env, d.target, run_exp_init(env, d.init)))

 { vmodule: m,
   status: Running,
   env: env,
   // ASSUMPTION: Based on what simulators seem to do, this should be X,
   //             but I haven't found anything in the standard saying this
   cont_env: Belt.Array.map(m.conts, _ => ValBit(BitX)),
   // ASSUMPTION: Always processes start in running state,
   //             they have not reached the first wait statement yet.
   proc_env: Belt.Array.map(m.procs, build_proc_state),
   queue: [(0, {...empty_event_queue, active: proc_es})],
   monitor: None,
   output: "",
   time: 0 }
 }

let build_initial_cont_update_event = (s, p, i) => {
  // TODO: Should we always schedule an event -- even when v is just 'z?
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

let event_active = (s, time, i) => {
 s.status == Running && s.time == time
}

// Precondition: event_active(s, <current time>, i) must be true
// run active event nr. ei
let run_event = (s:state, ei:int) => {
 // remove run event
 let (ts, queue0) = s.queue[0]
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

   let oldv = Belt.Map.String.getExn(s.env, var)
   // propagate new driver value to net, i.e., re-run resolution function
   let newv = s.vmodule.conts
            |> Js.Array.mapi((var, i) => (var, i))
            |> Js.Array.filter(((c, i)) => c.lhs == var)
            |> Js.Array.map(((_, i)) => Belt.Array.getExn(cont_env, i))
            |> Utils.reduce0(val_bit_lift2(net_type_res(net.type_)))
   let env = Belt.Map.String.set(s.env, var, newv)
   let s = {...s, cont_env: cont_env, env: env}

   let s = run_listeners(s, i, var, oldv, newv)
   s

 | EventEvaluation(_, IndexProcess(i)) =>
   let ps = s.proc_env[i]
   let ps = {...ps, state: ProcStateRunning}
   let proc_env = Js.Array.copy(s.proc_env)
   let _ = Belt.Array.setExn(proc_env, i, ps)
   let s = {...s, proc_env: proc_env}

   steps_proc(s, ei, i)

 | EventBlockUpdate(_, i, var, newv) =>
   let oldv = Belt.Map.String.getExn(s.env, var)
   let env = Belt.Map.String.set(s.env, var, newv)

   let ps = s.proc_env[i]
   let p = s.vmodule.procs[i]
   let ps = proc_inc_pc(p, ps)
   let proc_env = Js.Array.copy(s.proc_env)
   let _ = Belt.Array.setExn(proc_env, i, ps)

   let s = {...s, proc_env: proc_env, env: env}
   let s = run_listeners(s, -1, var, oldv, newv)
 
   steps_proc(s, ei, i)

 | Events(_, es) =>
   let es = Js.Array.copy(es)
   let e = Js.Array.shift(es)
   let e = Js.Option.getExn(e)
   let (var, newv) = dest_EventNBA(e)
   let oldv = Belt.Map.String.getExn(s.env, var)
   let env = Belt.Map.String.set(s.env, var, newv)
   let s = {...s, env: env}
   let s = run_listeners(s, -1, var, oldv, newv)
   s
 }
}

let inactive_done_active = (s) => {
 if s.status == Running {
  let (ts, queue0) = s.queue[0]
  queue0.active == [] &&
  queue0.inactive != []
 } else {
  false
 }
}

// Precondition: inactive_done_active must be true
let run_inactive_done = (s) => {
 let (ts, queue0) = s.queue[0]

 let queue0 = {...queue0, active: queue0.inactive, inactive: []}
 let queue = Js.Array.copy(s.queue)
 let _ = Belt.Array.setExn(queue, 0, (s.time, queue0))
 {...s, queue: queue}
}

let nba_done_active = (s) => {
 if s.status == Running {
  let (ts, queue0) = s.queue[0]
  queue0.active == [] &&
  queue0.inactive == [] &&
  queue0.nba != []
 } else {
  false
 }
}

// Precondition: nba_done_active must be true
let run_nba_done = (s) => {
 let (ts, queue0) = s.queue[0]

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
   let region = snd(s.queue[0])
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
  {...s, queue: queue, status: Finished}
 } else {
  let (time, _) = queue[0]
  {...s, queue: queue, time: time}
 }
}
