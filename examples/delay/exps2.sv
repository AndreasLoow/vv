module exps2;

logic a = 0, b = 0;

// Unclear if edge is w.r.t. to state at start of wait
// or w.r.t. state-by-state update while waiting
always @(posedge (a == b)) $display("RUN");

// See exps3 and exps4 for variants;
// different simulators give different results
// for different variants 

initial a = 1;

initial b = 1;

endmodule
