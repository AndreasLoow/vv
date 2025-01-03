module c_display;

// Display tasks such as $display, $monitor, 
// etc., are useful for printf-style debugging.

// E.g., the following is similar to the previous
// b_twoprocesses module, but where we instead
// illustrate nondeterminism using $display
// (see the rightmost column after executing $display):

logic a;

initial a = 0;

initial $display("a = %b at time %d", a, $time);

endmodule
