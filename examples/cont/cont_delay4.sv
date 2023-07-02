module cont_delay4;

// See cont_delay3

wire a;
logic b = 0;

assign #(1,2,0) a = b;

initial begin
 #5 b <= 1;
 #5 b <= 0;
end

initial $monitor("time = %d, a = %b, b = %b", $time, a, b);

endmodule
