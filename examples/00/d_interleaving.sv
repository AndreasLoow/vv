module d_interleaving;

// As discussed in the VV paper, the standard
// says that processes can be preempted at any point;
// in other words, arbitrary interleavings are allowed.
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

// Here we also for the first time can see the
// difference between clicking a blue event and
// the blue event's fast-forward button. If we
// click the blue event process 1, the simulation
// status will change to "running (proc 1 focused)"
// and with this status we cannot run process 2
// (since preemption of processes are not allowed).
// If we click the blue event again process 1
// finishes and process 2 can be run.
// If we instead would have clicked the fast-forward
// button when we initially clicked the blue event,
// VV would have run process 1 to completion (or,
// for more complex processes, until the process blocks).

endmodule
