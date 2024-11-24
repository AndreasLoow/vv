module x_edge_0;

logic clk;

initial #1 clk = 1;

always @(posedge clk) $display("POS!");

always @(negedge clk) $display("NEG!");

endmodule
