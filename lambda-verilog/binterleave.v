module binterleave;

reg[1:0] a;

initial begin
 a = 1;
 a = 2;
end

always @(*)
 $display("a = %b", a);

endmodule
