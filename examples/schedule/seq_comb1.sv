module seq_comb1;

// I'm not aware of any simulator that interleaves 
// procedural processes*, but some simulators, such as
// Icarus, interleaves procedural processes and
// continuous assignments.

// * = see seq_comb2.sv for an exception

// Consider the following:

logic a, out_proc;

wire out_cont = a;

always_comb out_proc = a;

initial begin
 $display("out_proc = %b, out_cont = %b", out_proc, out_cont);
 a = 1;
 $display("out_proc = %b, out_cont = %b", out_proc, out_cont);
end

// When run in Icarus, the above will print
//
// out_proc = x, out_cont = x
// out_proc = x, out_cont = 1
//
// whereas in VV procedural processes and
// continuous assignments are never interleaved.
//
// The standard is unclear here. The standard
// allows for any process interleaving, but this
// leads to problems, as discussed in the paper.
// On the other hand, the above shows that some simulators
// still allow some interleavings, here specifically between
// procedural processes and continuous assignments.

endmodule
