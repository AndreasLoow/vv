module delay_blocking2;

// Inspired by "Example 6" from p. 240
// of the Verilog standard

logic a;

initial #8 a = #8 1;

initial #12 a = #4 0;

endmodule
