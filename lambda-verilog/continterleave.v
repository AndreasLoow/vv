module continterleave;

reg a;

wire b;

assign b = a;

initial begin
 $display("b = %b", b);
 a = 1;
 $display("b = %b", b);
end

endmodule
