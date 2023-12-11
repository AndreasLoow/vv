module binterleave;

reg a;

initial begin
 a = 0;
 a = 1;
end

always @(*)
 $display("a = %b", a);

endmodule
