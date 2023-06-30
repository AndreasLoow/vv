module final_monitor;

logic a;

initial $monitor("%b", a);

// Most simulators seems to run monitors before
// executing final blocks, which makes sense since
// monitors are supposed to run at end of time slots.
// (I.e., x is printed.)
final a = 0;

endmodule
