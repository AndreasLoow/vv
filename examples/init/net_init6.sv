module net_init6;

// Here simulators seem to opt for letting
// the net be x before the first assignment
// from the driver.

wire a;

assign #5 a = 0;

initial $monitor("%b at time = %d", a, $time);

endmodule
