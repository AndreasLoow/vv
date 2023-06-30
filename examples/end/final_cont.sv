module final_cont;

logic a;

// Continuous processes not run/updated during final stage
wire b = ~a;

final a = 0;

final $display("%b", b);

endmodule
