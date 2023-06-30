module always_comb_delay3;

logic a;

always_comb @(posedge a) a = 1;

endmodule
