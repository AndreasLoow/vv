module h_monitor;

// The display task $monitor controls a monitor that
// prints when something the monitor depends on has
// changed during the current time slot

// Like the display task $display, $monitor is useful
// for print-style debugging

// E.g., the following monitor prints the value
// of "a" at the end of each time slot every time
// "a" has changed during the time slot:

logic a;

initial $monitor("a = %b", a);

initial begin
 a = 0;
 #5 a = 1;
end

endmodule
