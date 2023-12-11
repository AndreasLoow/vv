module nbinterleave2;

reg a, b;

initial begin
 a <= 0;
 b <= 0;
end

always @(*)
 $display("a = %b, b = %b", a, b);

endmodule
