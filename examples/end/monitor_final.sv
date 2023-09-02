module monitor_final;

// Most simulators seems to run monitors before
// executing final blocks, which makes sense since
// final blocks are supposed to run at the end of
// simulation. (I.e., x is printed below.)

logic a;

initial $monitor("%b", a);

final a = 0;

endmodule
