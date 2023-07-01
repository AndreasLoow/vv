module exps4;

// See exps2

logic a = 0, b = 0;

always @(posedge (a == b)) $display("RUN");

initial a <= 1;

initial b <= 1;

endmodule
