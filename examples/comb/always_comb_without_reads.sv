module always_comb_without_reads;

// Test for what happens with combinational always blocks without dependencies

logic a;

always_comb a = 1'b0;
// Aldec Riviera Pro 2020.04
// Cadence Xcelium 20.09
// Mentor Questa 2021.3
// Synopsys VCS 2020.03
// Icarus Verilog 11.0 -- warning
//
// all of the above simulators output 0 at time 0 and terminate normally

//always @(*) a = 1'b0;
// Aldec Riviera Pro 2020.04
// Cadence Xcelium 20.09
// Mentor Questa 2021.3
// Synopsys VCS 2020.03
// Icarus Verilog 11.0 -- warning about never trigger
//
// all of the above simulators output x at time 0 and terminate normally

//always a = 1'b0;
// Aldec Riviera Pro 2020.04 -- infinite loop
// Cadence Xcelium 20.09 -- infinite loop
// Mentor Questa 2021.3 -- infinite loop
// Synopsys VCS 2020.03 -- infinite loop + warning about no event control/delay
// Icarus Verilog 11.0 -- abort + warning about no delay

initial $monitor("a = %b at time %d", a, $time);

endmodule
