module h_shortcuts;

// Some minor shortcuts has been taken, for now:
//
// - No check for using undeclared variables/nets
//
// - No check that there are not multiple processes writing
//   to something a new-type process is writing to
//
// - No check that one variable has at most one
//   continuous assignment / not mixed continuous + process
//
// - Other similar rules (possibly)
//
// Breaking any of the above rules result in undefined
// behaviour without warnings.
   
endmodule
