module net_init1;

// Page 91 of the standard says:
// "If no driver is connected to a net, its value
// shall be high-impedance (z) [...]."

wire a;

initial $display("%b", a);

endmodule
