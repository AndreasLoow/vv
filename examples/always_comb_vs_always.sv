module always_comb_vs_always;

// always_comb blocks are unconditionally run at start, always blocks are not

logic a;
logic b;
logic c = 1'b0;

always_comb a = c + 1'b1;

always @(*) b = c + 1'b1;

endmodule

