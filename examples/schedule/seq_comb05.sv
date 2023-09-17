module seq_comb05;

// Extension of seq_comb01, similar to seq_comb04
// but now with gate primitives instead

// Interestingly, the simulator Aldec Riviera-PRO
// gives the following for seq_comb4:
//
// out_net = x, out_var = x
// out_net = x, out_var = x
//
// But gives the following for this module:
//
// out_net = xx, out_var = xx
// out_net = xx, out_var = 1x

logic a;

wire out_net, not_out_net;
buf (out_net, a);
not (not_out_net, a);

logic out_var, not_out_var;
buf (out_var, a);
not (not_out_var, a);

initial begin
 $display("net = %b%b, var = %b%b", out_net, not_out_net, out_var, not_out_var);
 a = 1;
 $display("net = %b%b, var = %b%b", out_net, not_out_net, out_var, not_out_var);
end

endmodule
