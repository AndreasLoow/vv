module seq_cont1;

// I'm not aware of any simulator that interleaves 
// procedural processes, but some simulators, such as
// Icarus, interleaves procedural processes and
// continuous assignments.

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
// allows for any process interleaving, including
// between procedural processes, which leads to the
// problems described in the VV paper. However,
// I am not aware of any problems interleaving
// procedural and continuous assignments.

endmodule
