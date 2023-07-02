module cont_delay5;

// Test for whether transitions are relative to
// driver value or net value.
// 
// The alternative that makes the most sense is
// relative to driver value, which is what 
// simulators seems to do -- VV takes this approach
// as well.

wire a;
logic b = 1'bz;

assign a = 1;

assign #(1,2) a = b;

// For second driver, we have the following:
//
// _ -> 0 delay is 2
// _ -> x delay is min(1, 2), i.e., 1
//
// Therefore, if transitions are relative to
// driver values, then the delay at b <= 0 (below)
// will be 2, otherwise it will 1.

initial begin
 #5 b <= 0;
end

initial $monitor("time = %d, a = %b, b = %b", $time, a, b);

endmodule
