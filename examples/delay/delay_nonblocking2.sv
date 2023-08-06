module delay_nonblocking2;

// "Example 6" from p. 240
// of the Verilog standard

logic a;

initial #8 a <= #8 1;

initial #12 a <= #4 0;

endmodule
