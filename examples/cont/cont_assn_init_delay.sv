module cont_assn_init_delay;

// Test for what to do before first update
// to delayed net

// Simulators seem to say the following for this one:
// 
// time = 0, w = x
// time = 5, w = 1
  
wire w;
  
assign #5 w = 1;
  
initial $monitor("time = %d, w = %b", $time, w);

endmodule
