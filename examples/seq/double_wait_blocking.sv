module double_wait_blocking;

// See also double_wait_nonblocking

logic a;

initial begin
 a = 0;
 a = 1;

 a = 0;
 a = 1;
end

always @(a) @(a) $display("RUN");

endmodule
