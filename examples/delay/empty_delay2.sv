module empty_delay2;

// Another edge-case

logic a;

initial #1 @(posedge a);

initial a = 1;

endmodule
