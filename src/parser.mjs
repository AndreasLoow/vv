import * as Utils from './Utils.mjs';
import * as Bit from './Bit.mjs';
import * as Ast from './Ast.mjs';
import * as AstParse from './AstParse.mjs';

// timing handling in Stmt should result in "shift-reduce conflict"?
const verilogGrammar = ohm.grammar(String.raw`
  verilogGrammar {
    Module = "module" id ("(" ")")? ";" Top* "endmodule"

    ProcType = "initial" | "always_comb" | "always_latch" | "always_ff" | "always" | "final"

    Decl = id "=" Exp -- init
         | id -- no_init

    GateDecl = id? "(" ListOf<Exp, ","> ")"

    Top = type NonemptyListOf<Decl, ","> ";" -- decl

        | WireType NonemptyListOf<Decl, ","> ";" -- net
        | WireType Delay NonemptyListOf<Decl, ","> ";" -- net_delay

        | "assign" id "=" Exp ";" -- cont
        | "assign" Delay id "=" Exp ";" -- cont_delay

        | gate NonemptyListOf<GateDecl, ","> ";" -- gate
        | gate Delay NonemptyListOf<GateDecl, ","> ";" -- gate_delay

        | ProcType Stmt -- proc

    MinTypMax = number ":" number ":" number -- full
              | number -- single

    DelayCont = "#" number -- single
              | "#" "(" MinTypMax ")" -- mintypmax

    TimeCont = DelayCont -- delay
             | "@" id -- id
             | "@" "(" Event_Exp ")" -- event
             | "@" "(" "*" ")" -- star
             | "@" "*" -- star_no_para

    Stmt = id "=" Exp ";" -- blocking
         | id "=" DelayCont Exp ";" -- blocking_delay
         | id "<=" Exp ";" -- nonblocking
         | id "<=" DelayCont Exp ";" -- nonblocking_delay

         | "if" "(" Exp ")" Stmt "else" Stmt -- if_else
         | "if" "(" Exp ")" Stmt -- if

         | "$display" "(" string "," NonemptyListOf<ExpOrTime, ","> ")" ";" -- display
         | "$display" "(" string ")" ";" -- display_no_args

         | "$monitor" "(" string "," NonemptyListOf<ExpOrTime, ","> ")" ";" -- monitor
         | "$monitor" "(" string ")" ";" -- monitor_no_args

         | "$finish" ";" -- finish
         | "$finish" "(" Exp ")" ";" -- finish_arg

         | TimeCont Stmt -- time_stmt
         | TimeCont ";" -- time

         | "wait" "(" Exp ")" Stmt -- wait_stmt
         | "wait" "(" Exp ")" ";" -- wait

         | "begin" Stmt* "end" -- block

    Delay = "#" "(" MinTypMax "," MinTypMax "," MinTypMax ")" -- three
          | "#" "(" MinTypMax "," MinTypMax ")" -- two
          | "#" "(" MinTypMax ")" -- one
          | "#" number -- one_no_para

    WireType = "wire" | "tri" | "wand" | "triand" | "wor" | "trior"

    Event_Exp = Event_Exp ("or" | ",") Event_Exp1 -- or
               | Event_Exp1
    Event_Exp1 = "posedge" Exp -- posedge
               | "negedge" Exp -- negedge
               | "edge" Exp -- edge
               | Exp -- exp

    // REF: 11.3.2 Operator precedence
    Exp = Exp1 "?" Exp ":" Exp -- cond
        | Exp1

    Exp1 = Exp1 "||" Exp2 -- lor
         | Exp2

    Exp2 = Exp2 "&&" Exp3 -- land
         | Exp3

    Exp3 = Exp3 "|" Exp4 -- bor
         | Exp4

    Exp4 = Exp4 "^" Exp5 -- bxor
         | Exp5

    Exp5 = Exp5 "&" Exp6 -- band
         | Exp6

    Exp6 = Exp6 "==" Exp7 -- eq
         | Exp6 "!=" Exp7 -- neq
	 | Exp6 "===" Exp7 -- case_eq
         | Exp6 "!==" Exp7 -- case_neq
         | Exp7

    Exp7 = Exp7 "+" Exp8 -- add
         | Exp8

    Exp8 = ("!" | "~") Exp8 -- not
         | Exp9

    Exp9 = id -- id
         | bit -- bit
         | "0" -- zero
         | "1" -- one
         | "(" Exp ")" -- paren

    ExpOrTime = Exp -- exp
              | "$time" -- time

    number = digit+
    bit = "1'b" ("0" | "1" | "x" | "X" | "z" | "Z")
    string = "\"" (~"\"" any)* "\""
    id = letter (letter | digit | "_")*
    type = "logic" | "reg"

    gate = "and" | "nand" | "or" | "nor" | "xor" | "xnor" | "not" | "buf"

    comment = multiLineComment | singleLineComment
    multiLineComment = "/*" (~"*/" any)* "*/"
    singleLineComment = "//" (~lineTerminator any)*
    lineTerminator = "\n"

    space += comment
  }
`);

const t = verilogGrammar.createSemantics();
t.addOperation('translate', {
    Module(_1, _2, _3, _4, _5, ss, _6) { return ss.children.map(c => c.translate()); },

    Decl_no_init(lhs) { return AstParse.mk_pair(lhs.translate(), Utils.mk_None); },
    Decl_init(lhs, _, rhs) { return AstParse.mk_pair(lhs.translate(), Utils.mk_Some(rhs.translate())); },

    GateDecl(_1, _2, es, _3) { return es.asIteration().children.map(e => e.translate()); },
    
    Top_decl(_1, ds, _2) { return AstParse.mk_TLVars(ds.asIteration().children.map(d => d.translate())); },
    Top_net(nt, ds, _2) { return AstParse.mk_TLNets(nt.translate(), Ast.mk_Delay0, ds.asIteration().children.map(d => d.translate())); },
    Top_net_delay(nt, d, ds, _2) { return AstParse.mk_TLNets(nt.translate(), d.translate(), ds.asIteration().children.map(d => d.translate())); },
    Top_cont(_1, lhs, _2, rhs, _3) { return AstParse.mk_TLCont(lhs.translate(), Ast.mk_Delay0, rhs.translate()); },
    Top_cont_delay(_1, d, lhs, _2, rhs, _3) { return AstParse.mk_TLCont(lhs.translate(), d.translate(), rhs.translate()); },
    Top_gate(g, ds, _1) { return AstParse.mk_TLGates(g.sourceString, Ast.mk_Delay0, ds.asIteration().children.map(d => d.translate())); },
    Top_gate_delay(g, d, ds, _1) { return AstParse.mk_TLGates(g.sourceString, d.translate(), ds.asIteration().children.map(d => d.translate())); },
    Top_proc(pt, s) { return AstParse.mk_TLProc(pt.sourceString, s.translate()); },

    WireType(_) { return this.sourceString; },

    MinTypMax_full(_1, _2, n, _3, _4) { return n.translate(); },
    MinTypMax_single(n) { return n.translate(); },

    DelayCont_single(_1, n) { return n.translate(); },
    DelayCont_mintypmax(_1, _2, mtm, _3) { return mtm.translate(); },

    TimeCont_delay(dc) { return Ast.mk_TMDelay(dc.translate()); },
    TimeCont_id(_1, id) { return Ast.mk_TMEvent(Ast.mk_EEEdge(Ast.mk_ExpVar(id.translate()))); },
    TimeCont_event(_1, _2, ee, _3) { return Ast.mk_TMEvent(ee.translate()); },
    TimeCont_star(_1, _2, _4, _3) { return Ast.mk_TMStar; },
    TimeCont_star_no_para(_1, _2) { return Ast.mk_TMStar; },

    Stmt_blocking(e1, _1, e2, _2) { return AstParse.mk_SStmtAssn(Ast.mk_AssnBlocking, e1.translate(), Utils.mk_None, e2.translate()); },
    Stmt_blocking_delay(e1, _1, d, e2, _2) { return AstParse.mk_SStmtAssn(Ast.mk_AssnBlocking, e1.translate(), Utils.mk_Some(d.translate()), e2.translate()); },
    Stmt_nonblocking(e1, _1, e2, _2) { return AstParse.mk_SStmtAssn(Ast.mk_AssnNonBlocking, e1.translate(), Utils.mk_None, e2.translate()); },
    Stmt_nonblocking_delay(e1, _1, d, e2, _2) { return AstParse.mk_SStmtAssn(Ast.mk_AssnNonBlocking, e1.translate(), Utils.mk_Some(d.translate()), e2.translate()); },

    Stmt_if(_1, _2, ec, _3, st) { return AstParse.mk_SStmtIf(ec.translate(), st.translate()); },
    Stmt_if_else(_1, _2, ec, _3, st, _4, sf) { return AstParse.mk_SStmtIfElse(ec.translate(), st.translate(), sf.translate()); },

    Stmt_display(_1, _2, str, _3, es, _4, _5) { return AstParse.mk_SStmtDisplay(str.translate(), es.asIteration().children.map(e => e.translate())); },
    Stmt_display_no_args(_1, _2, str, _3, _4) { return AstParse.mk_SStmtDisplay(str.translate(), []); },

    Stmt_monitor(_1, _2, str, _3, es, _4, _5) { return AstParse.mk_SStmtMonitor(str.translate(), es.asIteration().children.map(e => e.translate())); },
    Stmt_monitor_no_args(_1, _2, str, _3, _4) { return AstParse.mk_SStmtMonitor(str.translate(), []); },

    Stmt_finish(_1, _2) { return AstParse.mk_SStmtFinish(Ast.mk_ExpVal(Ast.mk_ValBit(Bit.mk_BitTrue))); },
    Stmt_finish_arg(_1, _2, e, _3, _4) { return AstParse.mk_SStmtFinish(e.translate()); },

    Stmt_time_stmt(tm, s) { return AstParse.mk_SStmtTimingControl(tm.translate(), Utils.mk_Some(s.translate())); },
    Stmt_time(tm, _1) { return AstParse.mk_SStmtTimingControl(tm.translate(), Utils.mk_None); },

    Stmt_wait_stmt(_1, _2, e, _3, s) { return AstParse.mk_SStmtWait(e.translate(), Utils.mk_Some(s.translate())); },
    Stmt_wait(_1, _2, e, _3, _4) { return AstParse.mk_SStmtWait(e.translate(), Utils.mk_None); },

    Stmt_block(_1, ss, _2) { return AstParse.mk_SSBlock(ss.children.map(s => s.translate())); },

    Delay_one(_1, _2, d1, _3) { return Ast.mk_Delay1(d1.translate()); },
    Delay_one_no_para(_1, d1) { return Ast.mk_Delay1(d1.translate()); },
    Delay_two(_1, _2, d1, _3, d2, _4) { return Ast.mk_Delay2(d1.translate(), d2.translate()); },
    Delay_three(_1, _2, d1, _3, d2, _4, d3, _5) { return Ast.mk_Delay3(d1.translate(), d2.translate(), d3.translate()); },

    Event_Exp(e) { return e.translate(); },
    Event_Exp_or(e1, _1, e2) { return Ast.mk_EEOr(e1.translate(), e2.translate()); },

    Event_Exp1_exp(e) { return Ast.mk_EEEdge(e.translate()); },
    Event_Exp1_posedge(_, e) { return Ast.mk_EEPos(e.translate()); },
    Event_Exp1_negedge(_, e) { return Ast.mk_EENeg(e.translate()); },
    Event_Exp1_edge(_, e) { return Ast.mk_EEEdge(e.translate()); },

    Exp(e1) { return e1.translate(); },
    Exp_cond(e1, _1, e2, _2, e3) { return Ast.mk_ExpCond(e1.translate(), e2.translate(), e3.translate()); },

    Exp1(e1) { return e1.translate(); },
    Exp1_lor(e1, _, e2) { return Ast.mk_ExpOp2_LOr(e1.translate(), e2.translate()); },

    Exp2(e1) { return e1.translate(); },
    Exp2_land(e1, _, e2) { return Ast.mk_ExpOp2_LAnd(e1.translate(), e2.translate()); },

    Exp3(e1) { return e1.translate(); },
    Exp3_bor(e1, _, e2) { return Ast.mk_ExpOp2_BOr(e1.translate(), e2.translate()); },

    Exp4(e1) { return e1.translate(); },
    Exp4_bxor(e1, _, e2) { return Ast.mk_ExpOp2_BXOr(e1.translate(), e2.translate()); },

    Exp5(e1) { return e1.translate(); },
    Exp5_band(e1, _, e2) { return Ast.mk_ExpOp2_BAnd(e1.translate(), e2.translate()); },

    Exp6(e1) { return e1.translate(); },
    Exp6_eq(e1, _, e2) { return Ast.mk_ExpOp2_Eq(e1.translate(), e2.translate()); },
    Exp6_neq(e1, _, e2) { return Ast.mk_ExpOp2_NEq(e1.translate(), e2.translate()); },
    Exp6_case_eq(e1, _, e2) { return Ast.mk_ExpOp2_CaseEq(e1.translate(), e2.translate()); },
    Exp6_case_neq(e1, _, e2) { return Ast.mk_ExpOp2_CaseNEq(e1.translate(), e2.translate()); },

    Exp7(e1) { return e1.translate(); },
    Exp7_add(e1, _, e2) { return Ast.mk_ExpOp2_Add(e1.translate(), e2.translate()); },

    Exp8(e1) { return e1.translate(); },
    Exp8_not(_1, e1) { return Ast.mk_ExpNot(e1.translate()); },

    Exp9_id(e1) { return Ast.mk_ExpVar(e1.translate()); },
    Exp9_bit(e1) { return Ast.mk_ExpVal(e1.translate()); },
    Exp9_zero(_) { return Ast.mk_ExpVal(Ast.mk_ValBit(Bit.mk_BitFalse)); },
    Exp9_one(_) { return Ast.mk_ExpVal(Ast.mk_ValBit(Bit.mk_BitTrue)); },
    Exp9_paren(_1, e1, _2) { return e1.translate(); },

    ExpOrTime_exp(e) { return Ast.mk_ETExp(e.translate()); },
    ExpOrTime_time(_) { return Ast.mk_ETTime; },

    number(_) {
    	return parseInt(this.sourceString, 10);
    },

    bit(_, b) {
	var bb;

	switch (b.sourceString.toLowerCase()) {
	case "1": bb = Bit.mk_BitTrue; break;
	case "0": bb = Bit.mk_BitFalse; break;
	case "x": bb = Bit.mk_BitX; break;
	case "z": bb = Bit.mk_BitZ; break;
	default: throw "Impossible!";
	}

	return Ast.mk_ValBit(bb);
    },

    string(_1, str, _3) {
	return str.sourceString;
    },

    id(_1, _2) {
        return this.sourceString;
    }
});

export function parse(input) {
 try {
  const m = verilogGrammar.match(input);
  return AstParse.mk_ParseOk(t(m).translate());
 } catch (e) {
  if (e instanceof TypeError)
   return AstParse.mk_ParseFail(e.message);
  else
   throw e;
 }
}
