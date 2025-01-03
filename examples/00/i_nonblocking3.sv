module i_nonblocking3;

logic clk = 0;
logic foo = 1;
logic bar;

always #1 clk = ~clk;

// Now using nonblocking assignment (<=) instead of blocking (=)
always @(posedge clk)
 foo <= foo + 1;

// Similarly, nonblocking instead of blocking assignment
always @(posedge clk)
 bar <= foo;

// Now, because nonblocking assignments are used, the order
// of execution of the two processes does not matter

endmodule
