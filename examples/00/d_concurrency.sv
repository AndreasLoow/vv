module d_concurrency;

// Processes execute from blocking statements to 
// blocking statements.

// E.g., when the following process is run:

logic a, b;

initial begin
 a = 0;
 a = 1;
 // The process will not stop until here
 @(b) a = 0;
end

// This differ from what the Verilog standard suggests,
// see "A small, but important, concurrency problem in
// Verilog's semantics?" from MEMOCODE'22 for a longer
// discussion.

// Moreover, the "Process NBA events first" checkbox
// controls the semantics of NBA events. Two semantics
// are provided because the standard is unclear.
// When the checkbox is checked, NBA events must be
// processed before all other events in the active region.
//
// See seq/nonblocking_ndet.sv for an example.

endmodule
