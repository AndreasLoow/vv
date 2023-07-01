module zero_delay;

wire a;

logic b, c, d, e;

// Example of inactive region, consider the differences between the following:

assign #0 a = 0;

initial #0 b = 0;

initial c = #0 0;

initial #0 d <= 0;

initial e <= #0 0;

endmodule
