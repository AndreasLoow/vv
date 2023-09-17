module h_nonblocking2;

// Even after being moved to the active region,
// execution of NBA events should be interleaved
// with other types of events.
//
// If such interleavings would be allowed,
// nonblocking assignments would be more
// nondeterministic than blocking assignments
// in the sense illustrated by the following
// code:

logic a, b;

initial begin
 a = 0;
 a = 1;
end

// Always processes loop infinitely,
// and the syntax "@(a)" means to block
// until the variable a changes its value
always @(a) $display("RUN a");

initial begin
 b <= 0;
 b <= 1;
end

always @(b) $display("RUN b");

// If non-NBA events would be allowed to
// interleave NBA events, RUN b could be
// printed more times than RUN a.
//
// (Compare this to the preemption-problem
// discussed in the d_interleaving module.)

endmodule
