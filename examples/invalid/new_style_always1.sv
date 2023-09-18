module new_style_always1;

logic a;

always @(*) a = 0;

// Not allowed to write to same var from multiple blocks
// when using new-style block
always_comb a = 1;

endmodule
