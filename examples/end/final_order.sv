module final_order;

logic a;

// The standard says that simulators should define a deterministic
// order final blocks are executed in; for VV this is simply source
// order. Therefore, in VV, "a" will always be 1 at the end of simulation.

// Note that the standard also says that all final blocks should be
// executed by the same process. In VV, however, we assign 
// one process per block since this allows us to re-use
// the simulation interface for stepping processes.

// (To reuse the interface, we also empty the queue before
// running the final blocks, which maybe should not be done either.)

final a = 0;

final a = 1;

endmodule
