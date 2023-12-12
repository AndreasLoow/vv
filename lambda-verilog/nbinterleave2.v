module nbinterleave2;

reg a, b;

initial begin
 a <= 1;
 b <= 1;
end

always @(*)
 $display("a = %b, b = %b", a, b);

endmodule
