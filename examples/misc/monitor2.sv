module monitor2;

// The standard is not clear on what should happen
// if nothing change during the time slot the
// monitor is installed; it seems that current
// simulators print unconditionally, so VV is
// doing the same.

logic a;

initial $monitor("a = %b", a);

endmodule
