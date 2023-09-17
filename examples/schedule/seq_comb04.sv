module seq_comb04;

// Extension of seq_comb01, does it matter if the
// continuous assignment is writing to a variable
// instead of a net?

// Seems to not affect output of simulators

logic a;

wire out_net;
assign out_net = a;

logic out_var;
assign out_var = a;

initial begin
 $display("out_net = %b, out_var = %b", out_net, out_var);
 a = 1;
 $display("out_net = %b, out_var = %b", out_net, out_var);
end

endmodule
