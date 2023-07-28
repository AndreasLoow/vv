module b_twoprocesses;

// Verilog is nondeterministic and events in the
// active region can be executed in any order.

// For example, consider the two initial processes below:

logic a;

initial a = 0;

initial a = 1;

// After starting the simulation, notice that there are
// two different blue events in the active region.

// By executing the events in different order,
// the final value of the variable "a" can be
// either 0 or 1. (To test different orders,
// restart the simulation by re-parsing the module.)

endmodule
