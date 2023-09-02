module seq_comb6;

/*

Summary of previous modules:

Aldec Riviera Pro 2022.44:
1xxxx1x

Cadence Xcelium 20.09, Mentor Questa 2021.3:
1xxxxxx

Synopsys VCS 2012.09:
11x1111

Icarus 13.0:
1xx11xx

*/

logic a,
 b_var_always, b_var_always_comb,
 b_var_assign, b_var_gate;

wire b_net_assign, b_net_gate;

initial begin
 a = 1;
 $display("%b%b%b%b%b%b%b", a, b_var_always,
          b_var_always_comb, b_var_assign,
          b_net_assign, b_var_gate, b_net_gate);
end

always @(*) b_var_always = a;

always_comb b_var_always_comb = a;

assign b_var_assign = a;

assign b_net_assign = a;

buf (b_var_gate, a);

buf (b_net_gate, a);
  
endmodule
