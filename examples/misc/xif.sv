module xif;

// This will always print "Second branch", see p. 315

initial
 if (1'bx)
  $display("First branch");
 else
  $display("Second branch");

endmodule
