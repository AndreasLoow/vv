module seq_comb2;

// Synopsys VCS seems to optimise away/interleaved some always blocks
// that are sufficiently similar to just one assignment, e.g.,
// running the following in VCS prints "1x11x":

logic a, b1, b2, b3, b4;

initial begin
 a = 1;
 $display("%b%b%b%b%b", a, b1, b2, b3, b4);
end

// Not interleaved
always_comb b1 = a;

// Interleaved
always @(*) b2 = a;

// Interleaved
always @(*) begin
 b3 = a;
 b3 = b3;
end

// Not interleaved
always @(*) begin
 b4 = a;
 b4 = a;
end

endmodule
