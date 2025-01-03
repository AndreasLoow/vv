module interleave2;

logic a, b;

always @(a)
 b = a;

initial begin
 a = 0;
 // ...
 a = 1;
end

endmodule
