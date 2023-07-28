module i_concurrency1;

// As discussed in the VV paper, the standard
// says that processes can be preempted at any point.
// This, as explained in the paper, can lead to
// processes "missing" events they should have been
// listening for. Therefore, VV does not allow
// process preemption.

// In other words, in VV, processes execute from
// blocking statements to blocking statements.

// Consequently, e.g., the following will only ever
// print x or 1, never 0.

logic a;

initial begin
 a = 0;
 a = 1;
end

initial $display("a = %b", a);

endmodule
