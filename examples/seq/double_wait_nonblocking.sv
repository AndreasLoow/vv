module double_wait_nonblocking;

// See also double_wait_blocking,
// because NBA events do not mix with
// other events in the active region
// nonblocking assignments are not more
// nondeterministic/allow for more
// interleavings than blocking assignments.

logic a;

initial begin
 a <= 0;
 a <= 1;

 a <= 0;
 a <= 1;
end

always @(a) @(a) $display("RUN");

endmodule
