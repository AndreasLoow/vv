module fig5_netassign2;

// In this module we continue the discussion started
// in fig5_netassign1.sv.

// Consider the following modifications to the
// fig5_netassign1 module:

// Modified: net must now be variable,
// otherwise the below code is not valid.

//wire w;
logic w;

reg r;

// Modified: the continuous assignment is
// replaced by a combinational always block

//assign w = r;
always_comb w = r;

initial begin
 r = 0;
 r = 1;
end

// In Meredith et al.'s reading of the standard,
// the fig5_netassign1 module (called just netassign in
// their paper), should have the same semantics as the
// above modified code; i.e., the semantics of continuous
// assignments is given by replacing all such assignments
// with analogue combinational always blocks.

// Meredith et al. concludes that this reading cannot be
// correct since in their semantics the above code
// can end up in final states with w = 0.

// Their reading of the standard is incorrect, but not
// for the reason they state. Indeed, the semantics of
// variables and nets differ substantially (as discussed in
// other modules included in VV). The reason Meredith et al.
// run into a problem is that their semantics follows the
// standard and interleaves processes arbitrarily.

// When restricting interleavings, as suggested in our
// OOPSLA paper, the above code executes without problems.
// VV implements this restricted interleaving
// semantics and the module hence functions
// sensibly in VV (i.e., w = 1 in all reachable
// end states).

// In summary, the suggestion that continuous
// assignments can be given semantics by replacing
// them with combinational always blocks is
// incorrect. However, in the special case
// of fig5_netassign1/netassign, the behaviour of
// the module implemented using continuous
// assignments vs. always blocks is the same.

endmodule
