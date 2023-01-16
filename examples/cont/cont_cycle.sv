module cont_cycle;

wire a;

// Suspicious cycle, results in "a" being x, which is
// a little funny since wires otherwise has z as
// initial value (when not driven). Requires a special
// case in the semantics to check if there are any
// drivers or not.

assign a = a;
  
initial $monitor("a = %b for time %d", a, $time);

endmodule
