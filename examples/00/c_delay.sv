module c_delay;

logic a;
 
// This will delay the assignment to "a", the process
// will block for ten clock cycles and then continue
initial #10 a = 0;

// Delays can only be used in test-bench code because
// they are not synthesisable

endmodule
