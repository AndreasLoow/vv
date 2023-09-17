module c_display;

// The display tasks ($display, $monitor, etc.)
// are useful for printf-style debugging.
//
// The display tasks can be invoked in a great
// variety of ways; e.g., see this call from
// p. 239 of the Verilog standard:
//
// $monitor($time, , "a = %b b = %b", a, b);
//
// In VV, however, to simplify the implementation,
// the first argument must be a format string
// and only %b (for value) and %d (for time)
// are supported.

// E.g., the following is similar to the
// b_twoprocesses module, but we are instead
// illustrating nondeterminism using $display:

logic a;

initial a = 0;

initial $display("a = %b at time %d", a, $time);

endmodule
