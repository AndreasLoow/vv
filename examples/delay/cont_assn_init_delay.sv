// Simulators seem to say the following for this one:
// 
// x                   0
// 1                   5

module cont_assn_init_delay;
  
wire w;
  
assign #5 w = 1;
  
initial $monitor("time = %d, w = %b", $time, w);

endmodule
