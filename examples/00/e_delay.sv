module e_delay;

// Delays are not synthesisable but important in
// writing test-benches. We now illustrate how delays
// are handled in the Verilog event queue.

logic a;

// The following will delay the assignment to "a", the process
// will block for ten clock cycles and then continue.

initial #10 a = 0;

// To run the simulation from start to finish:
//
// - first click the evaluation event of the process;
// - then "simulation time" to progress to time slot 10;
// - and then lastly click the evaluation event of the
//   process again.

endmodule
