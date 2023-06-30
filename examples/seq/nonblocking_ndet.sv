module nonblocking_ndet;

// Consider the difference between using blocking
// and nonblocking assignments in the below code.

// When treating NBA events as any other active events,
// as suggested by the standard, we run into the following
// awkwardness: nonblocking assignments are more nondeterministic
// than blocking assignments (when not allowing arbitrary process 
// interleavings).
//
// The "Process NBA events first" checkbox controls
// whether NBA events must be executed before all
// other active events.
//
// Executing all NBA events before other active events
// seems to give a more reasonable semantics (the behaviour of
// blocking and nonblocking assignments are more consistent)
// but seemingly diverges from the standard.

logic a, b;

initial begin
 a = 0;
 a = 1;
end

always @(a) $display("RUN a");

initial begin
 b <= 0;
 b <= 1;
end

always @(b) $display("RUN b");

endmodule
