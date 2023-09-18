module swap;

logic a = 0;

logic b;

// Swaps the contents of a and b
initial begin
 a <= b;
 b <= a;
end

endmodule
