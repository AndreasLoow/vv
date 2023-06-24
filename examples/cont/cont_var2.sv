module cont_var2;

logic a;

assign #1 a = 1;

initial $monitor("%b", a);

endmodule
