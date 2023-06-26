/* Parse Syntax/AST for Verilog */

open Ast

type rec stmt_structured =
 | SStmtTimingControl(timing_control, option<stmt_structured>)
 | SStmtAssn(assn_type, var, option<delay>, exp)
 | SStmtDisplay(string, array<exp_or_time>)
 | SStmtMonitor(string, array<exp_or_time>)
 | SStmtFinish(exp)
 | SStmtIf(exp, stmt_structured)
 | SStmtIfElse(exp, stmt_structured, stmt_structured)
 | SSBlock(array<stmt_structured>)

// JS API
let mk_SStmtTimingControl = (tc, opts) => SStmtTimingControl(tc, opts)
let mk_SStmtAssn = (at, v, d, e) => SStmtAssn(at, v, d, e)
let mk_SStmtDisplay = (str, es) => SStmtDisplay(str, es)
let mk_SStmtMonitor = (str, es) => SStmtMonitor(str, es)
let mk_SStmtFinish = (e) => SStmtFinish(e)
let mk_SStmtIf = (ec, st) => SStmtIf(ec, st)
let mk_SStmtIfElse = (ec, st, sf) => SStmtIfElse(ec, st, sf)
let mk_SSBlock = (ss) => SSBlock(ss)

type top_level =
 | TLVars(array<(string, option<exp>)>)
 | TLNets(string, delay, array<(string, option<exp>)>)
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

let str_to_proc_type = (pt) =>
 switch pt {
 | "initial" => ProcInitial
 | "always" => ProcAlways(Always)
 | "always_comb" => ProcAlways(AlwaysComb)
 | "always_latch" => ProcAlways(AlwaysLatch)
 | "always_ff" => ProcAlways(AlwaysFf)
 | _ => Js.Exn.raiseError("impossible proc type")
}
