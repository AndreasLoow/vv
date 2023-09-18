module f_zero_delay;

logic a;

// Zero-delayed events are scheduled in the inactive region.
// Such delays can be used for process coordination, e.g.,
// the below ensures that "a" will be 0 at the end of simulation

initial #0 a = 0;

initial a = 1;

// However, modern Verilog uses nonblocking assignments for
// communication between processes, as illustrated in
// the subsequent modules.

endmodule
