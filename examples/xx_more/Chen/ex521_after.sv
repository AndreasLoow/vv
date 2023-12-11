module ex521_after;

// See readme.sv

// Using Icarus, the following versions of
// the second always block result in "same":
//
// always @(*)
//  c1 = a & b;
//
// always @(a or b)
//  c1 = a & b;
//
// always_comb
//  c1 = a & b;
//
// Whereas the following version results
// in "different":
//
// always @(posedge a or negedge a or
//          posedge a or negedge a)
//  c1 = a & b;

logic a, b, c1;

wire c2;

assign c2 = a & b;

initial begin
 a = 1; b = 0; #0;

 if (c1 == c2)
  $display("same");
 else
  $display("different");
end

always @(*)
 c1 = a & b;

endmodule
