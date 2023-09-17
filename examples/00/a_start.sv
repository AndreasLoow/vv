// Welcome to VV -- an interactive Verilog simulator!

// This directory ("00") contains a short series of modules
// that illustrate basic aspects of Verilog and VV;
// hopefully the modules should provide sufficient
// background to understand the other modules
// bundled with VV.

// As a start, let's consider the following
// simple module consisting of a variable "a" and
// a process assigning 0 to "a":

module a_start;

logic a;

// An "initial" process is a process that executes
// once and then terminates
initial a = 0;

endmodule

// To load the above Verilog module into the simulator,
// click the "Parse" button in the bottom-left corner.

// After the module has been parsed and validated, the
// module is shown in normalised form to the right.

// To the right of the normalised module,
// VV visualises the current state of Verilog's
// event queue and other simulation state.

// VV's event queue consist of three regions:
//
// - active,
// - inactive,
// - and NBA (nonblocking assignments).

// After loading the above module, you will see a
// blue-marked event in the active region for time 0.

// First, see that the variable "a" has value x in
// the environment. Now, clicking the blue event
// will progress the simulation by running the 
// initial process of the module. After clicking the
// event, the variable "a" now has value 0 in the
// environment since the assignment in the process
// has now been executed.

// (Clicking the fast-forward arrow right of the blue
// event will run the process until it blocks -- we 
// will see the difference between single-stepping
// and multi-stepping a process in other modules in
// this directory.)

// There are now no more events to execute in the
// current time, therefore "Simulation time" is now
// blue.

// Clicking "Simulation time" progresses to simulation
// to the next time slot. Because there are no future
// time slots/events, the simulation finishes.

// Time slots and simulation time will make more sense
// later when delays have been introduced.
