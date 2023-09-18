module net_init8;

// Alternative short-hand notation for a wire declaration
// plus a continuous assignment (see normalised Verilog module):
wire #5 a = 0;

// We can still add other continuous assignments
assign a = 1'bz;

initial $monitor("%b at time = %d", a, $time);

endmodule
