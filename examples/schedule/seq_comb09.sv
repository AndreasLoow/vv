module seq_comb09;

// Further investigations into interleavings between
// procedural processes and continuous assignments:

logic a, b;

wire c = b;

always_comb begin
 $display("always_comb start");
 a = c;
 b = 1;
end

initial $monitor("%b%b%b", a, b, c);

// All the commercial simulators at EDA playground
// prints "111" and run the always_comb block twice
// whereas Icarus prints "x11" and runs the always_comb
// block only once.

// Somewhat of a borderline case if the above should
// be synthesisable. Yosys considers it synthesisable
// and gives the following:
//
// module seq_comb10;
//  wire a = 1'h1;
//  wire b = 1'h1;
//  wire c = 1'h1;
// endmodule

endmodule
