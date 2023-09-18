module cont_delay3;

wire a;

// Continuous assignments also support for following
// syntax for delays:
//
// (transition to 1, transition to 0, transition to high-impedance)

assign #(1,1,0) a = 1;

endmodule
