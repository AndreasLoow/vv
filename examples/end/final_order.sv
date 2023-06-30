module final_order;

logic a;

// Simulators should define a deterministic order final blocks
// should be executed in; for VV this is simply source order.
// Therefore a will always be 1 at the end of simulation.

final a = 0;

final a = 1;

endmodule
