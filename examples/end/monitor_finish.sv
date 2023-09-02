module monitor_finish;

// Simulation exists immediately on $finish call,
// monitor not invoked

logic a;

initial $monitor("%b", a);

final $finish;

endmodule
