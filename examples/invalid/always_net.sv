module always_net;

wire a;

// Not allowed to write to wire in block
always @(*) a = 0;

endmodule
