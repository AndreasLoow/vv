/* Syntax/AST for Verilog */

open Bit

// TODO: Add support for arrays
type value = ValBit(bit) //| ValArray(array<bit>)

// JS API
let mk_ValBit = (b) => ValBit(b)

let value_str = (v) => {
 switch (v) {
 | ValBit(b) => "1'b" ++ Bit.pp_bit(b)
 }
}

let value_str_clean = (v) => {
 switch (v) {
 | ValBit(b) => Bit.pp_bit(b)
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
 | TMWait(exp)

// JS API
let mk_TMDelay = (i) => TMDelay(i)
let mk_TMEvent = (ee) => TMEvent(ee)
let mk_TMStar = TMStar
let mk_TMWait = (e) => TMWait(e)

type stmt =
 | StmtTimingControl(timing_control)
 | StmtAssn(assn_type, var, option<delay>, exp)
 | StmtDisplay(string, array<exp_or_time>)
 | StmtMonitor(string, array<exp_or_time>)
 | StmtFinish(exp)
 | StmtGoto(int)
 | StmtGotoUnless(exp, int)

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
type proc_type = ProcAlways(always_type) | ProcInitial | ProcFinal

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
 | ProcFinal => false
 }

type proc = { proc_type: proc_type, stmts: array<stmt> }

let proc_run_at_0 = (t) =>
 switch (t) {
 | ProcAlways(_) => true
 | ProcInitial => true
 | ProcFinal => false
 }

type vmodule = {
 vars: array<decl>,
 nets: array<net>,
 conts: array<cont>,
 procs: array<proc>,
 finals: array<proc>
}

let vmodule_empty = {vars: [], procs: [], nets: [], conts: [], finals: []}
