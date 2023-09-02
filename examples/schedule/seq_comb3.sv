module seq_comb3;

// Extension of seq_comb1, including two gate primitives

logic a, out_proc;

wire out_cont = a;

always_comb out_proc = a;

wire out_gate_buf, out_gate_and;

buf (out_gate_buf, a);

and (out_gate_and, a, a);

initial begin
 $display("cont = %b, proc = %b, gate-buf = %b, gate-and = %b",
          out_cont, out_proc, out_gate_buf, out_gate_and);
 a = 1;
 $display("cont = %b, proc = %b, gate-buf = %b, gate-and = %b",
          out_cont, out_proc, out_gate_buf, out_gate_and);
end

endmodule
