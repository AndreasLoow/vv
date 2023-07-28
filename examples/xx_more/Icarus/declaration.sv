module declaration;

// Issue "OBJECTS CAN BE DECLARED ANYWHERE IN THE MODULE"
//
// ieee1364-notes.rst states that the standard is unclear
// on whether code like the following is valid:

 initial foo = 1;

 reg foo;

// That is, must objects (such as variables) be declared
// before usage or can they be declared anywhere?

// For variables, the latest version of the Verilog
// standard now clearly states that variables must be
// declared before use, see init/var_init2.sv. (The
// discussion in ieee1364-notes.rst is based on older
// versions of the standard.)

// Hence, VV does not accept the above code.

// For nets, because of implicit declarations, the answer
// is necessarily more complex, see the discussion in
// ieee1364-notes.rst. Because VV does not support
// implicit declarations (since we are foremost
// interested in the concurrency semantics of Verilog),
// we do not elaborate further here.

endmodule
