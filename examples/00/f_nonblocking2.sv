module f_nonblocking2;

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

// Notice how the NBA region is used to give semantics to
// nonblocking assignments. Notice that when the active region
// is empty and there are events in the NBA region, the NBA
// region becomes blue and clicking the NBA region moves
// the NBA-region events to the active region.

// When moved to the active region, the NBA-region events are
// grouped because they must be executed in the same order
// they were added to the NBA region.

endmodule
