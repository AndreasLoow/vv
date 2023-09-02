module seq_comb5;

// Extension of seq_comb1, similar to seq_comb4
// but now with gate primitives instead

// Interestingly, the simulator Aldec Riviera-PRO
// gives the following for seq_comb4:
//
// out_net = x, out_var = x
// out_net = x, out_var = x
//
// But gives the following for this module:
//
// out_net = x, out_var = x
// out_net = x, out_var = 1

logic a;

wire out_net;
buf (out_net, a);

logic out_var;
buf (out_var, a);

initial begin
 $display("out_net = %b, out_var = %b", out_net, out_var);
 a = 1;
 $display("out_net = %b, out_var = %b", out_net, out_var);
end

endmodule
