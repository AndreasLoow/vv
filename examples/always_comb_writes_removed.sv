module always_comb_writes_removed;

// Just to check if vars written to in block are removed from sense list...

logic a;

initial a = #5 1'b1;

//always @(a) a = a + 1'b1;
//
// the above gives 0 at time 5

//vs

always @(*) a = a + 1'b1;
//
// most simulators give 0 at time 5 as well here (i.e. writes not removed?),
// however, Synopsys loops forever (never printing anything at time 5)

initial $monitor("a = %b at time %d", a, $time);

endmodule
