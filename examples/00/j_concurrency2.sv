module j_concurrency2;

// A problem related to the preemption-problem
// discussed in the i_concurrency1 module is
// how much the execution of NBA events should be
// interleaved with other types of events.

// Because the standard is unclear on this point
// (see the VV paper), two execution modes are provided.
// The "Process NBA events first" checkbox controls
// which mode is used.

// When the checkbox is checked, NBA events must be
// processed before all other events in the active region.

// To exemplify, consider the difference between using blocking
// and nonblocking assignments in the below code.

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

// When treating NBA events as any other active events,
// as suggested by the standard, we run into the following
// awkwardness: nonblocking assignments are more nondeterministic
// than blocking assignments (when not allowing arbitrary process 
// interleavings). This semantics is given by unchecking the
// checkbox.
//
// Executing all NBA events before other active events
// seems to give a more reasonable semantics (the behaviour of
// blocking and nonblocking assignments are more consistent)
// but seemingly diverges from the standard. This semantics
// is given by checking the checkbox.

endmodule
