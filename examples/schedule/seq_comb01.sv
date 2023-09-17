module seq_comb01;

logic a;

logic[9:0] b;

wire[3:0] c;

initial begin
 $display("before: a = %b, b = %b, c = %b", a, b, c);
 a = 1;
 $display("after:  a = %b, b = %b, c = %b", a, b, c);
end

// Assignments to variable

assign b[0] = a;
assign b[1] = a + 1;

always @(*) b[2] = a;
always @(*) b[3] = a + 1;

always_comb b[4] = a;
always_comb b[5] = a + 1;

always_comb b[6] = a;
always_comb b[7] = a + 1;

buf (b[8], a);
and (b[9], a, a);

// Assignments to net

assign c[0] = a;
assign c[1] = a + 1;

buf (c[2], a);
and (c[3], a, a);

endmodule
