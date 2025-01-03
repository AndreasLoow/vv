module var_init2;

// Variables can also be initialised with nonconstants,
// such as:

logic a = 1;
logic b = a;

// Variables must be declared before use:
//
// See "6.21 Scope and lifetime" (p. 132):
//
// "A variable declaration shall precede any simple
// reference (non-hierarchical) to that variable."

// Thus, e.g., the following is not possible:
//
// logic a = b;
// logic b = 1;

// We have not found a clear reference in the standard,
// but we assume variables are to be initialised in
// declaration order. (This is guaranteed by e.g. C++.)

endmodule
