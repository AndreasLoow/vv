module seq_comb01;

// In these seq_comb* modules we discuss some examples of
// interleavings of procedural processes, continuous
// assignments, and gates.

// As discussed in the VV paper, arbitrary interleavings
// cannot be allowed. Nevertheless, some existing simulators,
// in some edge cases, do interleavings.

// See the VV paper for a more in-depth discussion and
// the directory interleave-tests in the VV source
// repository for data on how a selection of existing
// Verilog simulators handle interleavings.

// Here follows a simple example:

logic a;

wire b;

assign b = a;

// Should it be possible to print b = x for before but
// b = 1 for after?
initial begin
 $display("before: a = %b, b = %b", a, b);
 a = 1;
 $display("after:  a = %b, b = %b", a, b);
end

endmodule
