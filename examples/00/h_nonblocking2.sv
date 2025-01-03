module h_nonblocking2;

// We now consider blocking (=) vs. nonblocking (<=)
// assignments in real-world code.

logic clk = 0;
logic foo = 1;
logic bar;

// Model of a clock, toggles 0-1-0-1-0-...
// using a delayed assignment
always #1 clk = ~clk;

// A process that executes every time the clock toggles to high
always @(posedge clk)
 foo = foo + 1;

// Another process that executes every time the clock toggles to high
always @(posedge clk)
 bar = foo;

// Notice that the third process depends on the second process
// since the third process reads foo which is written to by
// the second process.

// Problematically, in which order the second and third process
// executes affect the values of the variables at each clock cycle.
//
// The module i_nonblocking3 illustrates how using
// nonblocking assignments (<=) instead of blocking
// assignments (=), as above, solves this problem.

endmodule
