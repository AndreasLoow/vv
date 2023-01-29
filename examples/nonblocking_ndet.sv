module nonblocking_ndet;

// Consider the difference between using blocking
// and nonblocking assignments in the below code.

// It is a little awkward that nonblocking assignments
// are more nondeterministic than blocking assignments
// when not allowing arbitrary process interleavings.

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
