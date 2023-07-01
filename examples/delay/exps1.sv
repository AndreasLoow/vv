module exps1;

logic a = 0, b = 0;

// Runs if positive edge on either a or b;
// can therefore run twice in this module
always @(posedge a or posedge b) $display("1");

// Runs if positive edge of result of (a || b);
// will therefore run only once in this module
always @(posedge (a || b)) $display("2");

initial a = 1;

initial b = 1;

endmodule
