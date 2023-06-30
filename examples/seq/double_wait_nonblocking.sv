module double_wait_nonblocking;

// Variant of nonblocking_ndet;
// see also double_wait_blocking

logic a;

initial begin
 a <= 0;
 a <= 1;

 a <= 0;
 a <= 1;
end

always @(a) @(a) $display("RUN");

endmodule
