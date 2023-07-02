module mintypmax;

logic a, b;

// For minimum, typical, and maximum delay expressions,
// VV simply uses the typical delay

initial #(2:3:5) a = 1;

initial b = #(0:1:2) 1;

endmodule
