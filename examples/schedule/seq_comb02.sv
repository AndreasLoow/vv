module seq_comb02;

// Synopsys VCS seems to optimise away/interleaved
// some always blocks that are sufficiently similar
// to just an assignment where the rhs of the assignment
// is just a variable, e.g., running the following
// in VCS prints "1x11xx":

logic a, b1, b2, b3, b4, b5;

initial begin
 a = 1;
 $display("%b%b%b%b%b%b", a, b1, b2, b3, b4, b5);
end

// Interestingly, always_comb blocks seem to not
// be interleaved
always_comb b1 = a;

// Straightforward assignment with variable as rhs,
// interleaved
always @(*) b2 = a;

// Also interleaved
always @(*) begin
 b3 = a;
 b3 = b3;
end

// Not interleaved
always @(*) begin
 b4 = a;
 b4 = a;
end

// Not interleaved either, complex rhs
always @(*) b5 = a + 1;

endmodule
