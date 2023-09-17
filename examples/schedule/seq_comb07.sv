module seq_comb07;

// Test of more complex and deeper propagation
// for continuous assignments

// Riviera, Xcelium, and Questa give:
//
// 1 =(xx) !(xx) ~(xx) +(xx)
//
// VCS gives:
//
// 1 =(11) !(01) ~(01) +(01)
//
// Icarus gives:
//
// 1 =(11) !(01) ~(xx) +(xx)

logic a;

wire b1, b2, b3, b4, b5, b6, b7, b8;

initial begin
 a = 1;
 $display("%b =(%b%b) !(%b%b) ~(%b%b) +(%b%b)", a, b1, b2, b3, b4, b5, b6, b7, b8);
end

assign b1 = a;

assign b2 = b1;

assign b3 = !a;

assign b4 = !b3;

assign b5 = ~a;

assign b6 = ~b5;

assign b7 = a + 1;

assign b8 = b7 + 1;

endmodule
