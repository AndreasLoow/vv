module k_continuous;

// VV also supports so-called continuous assignments

// Continuous assignments follow a completely
// different evaluation model than the types of
// processes introduced this far in the tutorial do

// E.g., the net "a" below has two drivers,
// and the so-called resolution function for
// wire nets resolves the two values to 1
// (whereas for variables, the last write 
// decides its values):

wire a;

assign a = 1'b1;
assign a = 1'bz;

// For wire nets, the following drivers results in a
// value x for the net "b":

wire b;

assign b = 1'b1;
assign b = 1'b0;

// Whereas for wand nets, the same drivers result in 0:

wand c;

assign c = 1'b1;
assign c = 1'b0;

// (Make sure to run all events to see the correct results!)

// Continuous assignments is a big topic,
// see the cont directory for more

endmodule
