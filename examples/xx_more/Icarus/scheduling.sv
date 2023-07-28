module scheduling;

// Issue "SCHEDULING VALUES IN LOGIC"
//
// ieee1364-notes.rst states that "interaction between blocking
// assignments in procedural code and logic gates in gate-level
// code and expressions is poorly defined" and illustrates this
// using the following code:

 reg a;
 reg b;
 wire q = a & b;

 initial begin
  a = 1;
  b = 0;
  #1 b = 1;
  if (q !== 0) begin
   $display("FAILED -- q changed too soon? %b", q);
   $finish;
  end
 end

// The question is: does the semantics of Verilog allow the
// FAILED message to ever be displayed?

// The above boils down to if procedural and continuous 
// processes can be interleaved. Some simulators allow this,
// others do not, see schedule/seq_cont1.sv.

endmodule
