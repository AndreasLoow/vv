module g_nonblocking1;

// Nonblocking assignments (<=) are used for race-free
// communication between processes (as illustrated in
// subsequent modules).

// Nonblocking assignments are given semantics
// in terms of the NBA region of the Verilog event queue.
// In short: when the active region is empty and there
// are events in the NBA region, the NBA region becomes
// blue and clicking the NBA region moves the NBA-region
// events to the active region.

// When moved to the active region, the NBA-region events are
// grouped because they must be executed in the same order
// they were added to the NBA region (see the OOPSLA paper for
// a more detailed discussion).

logic a;

initial begin
 a <= 0;
 a <= 1;
end

// Will always print a = x
initial $display("a = %b", a);

endmodule
