module seq_cont7;

// More interleavings between procedural processes
// and continuous assignments. Seems that all tested
// simulators print "111" here.

logic a, b;

wire c = b;

always_comb begin
 $display("a = c");
 a = c;
end

always_comb begin
 $display("b = 1");
 b = 1;
end

initial $monitor("%b%b%b", a, b, c);

endmodule
