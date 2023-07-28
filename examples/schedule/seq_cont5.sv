module seq_cont5;

// Variant of seq_cont1, some
// simulators will not print "cont!"

logic a_cont, a_proc, out_proc;

wire out_cont = a_cont;

always_comb out_proc = a_proc;

initial begin
 a_cont = 1;
 @(posedge out_cont);
 $display("cont!");
end

initial begin
 a_proc = 1;
 @(posedge out_proc);
 $display("proc!");
end

endmodule
