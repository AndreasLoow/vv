module inactive;

reg a;  
 
initial #0 a = 0;  

initial #0 a = 1;

always @(*)
 $display("a = %b", a);
  
endmodule
