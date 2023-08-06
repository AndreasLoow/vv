module delay_blocking1;

// Simple example of delayed blocking assignment

logic a;

initial begin
 a = #3 1;
 a = #4 a;
end

endmodule
