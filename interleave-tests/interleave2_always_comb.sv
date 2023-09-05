module interleave2_always_comb;

/*

Aldec Riviera:

before: a = x, b = xxxxxxxx, b(arr) = xxxxxxxx, c = xxxx, c(arr) = xxxx
after:  a = 1, b = x1xxxxxx, b(arr) = x1xxxxxx, c = xxxx, c(arr) = xxxx
before: a = 1, b = 01010101, b(arr) = 01010101, c = 0101, c(arr) = 0101
after:  a = 1, b = 01010101, b(arr) = 01010101, c = 0101, c(arr) = 0101

Cadence Xcelium:

before: a = x, b = xxxxxxxx, b(arr) = xxxxxxxx, c = xxxx, c(arr) = xxxx
after:  a = 1, b = xxxxxxxx, b(arr) = xxxxxxxx, c = xxxx, c(arr) = xxxx
before: a = 1, b = xx010101, b(arr) = xx010101, c = xxxx, c(arr) = xxxx
after:  a = 1, b = xx010101, b(arr) = xx010101, c = xxxx, c(arr) = xxxx
before: a = 1, b = xx010101, b(arr) = xx010101, c = 0101, c(arr) = 0101
after:  a = 1, b = xx010101, b(arr) = xx010101, c = 0101, c(arr) = 0101
before: a = 1, b = 01010101, b(arr) = 01010101, c = 0101, c(arr) = 0101
after:  a = 1, b = 01010101, b(arr) = 01010101, c = 0101, c(arr) = 0101

Mentor Questa:

before: a = x, b = xxxxxxxx, b(arr) = xxxxxxxx, c = xxxx, c(arr) = xxxx
after:  a = 1, b = xxxxxxxx, b(arr) = xxxxxxxx, c = xxxx, c(arr) = xxxx
before: a = 1, b = 01xxxx01, b(arr) = 01xxxx01, c = 0101, c(arr) = 0101
after:  a = 1, b = 01xxxx01, b(arr) = 01xxxx01, c = 0101, c(arr) = 0101
before: a = 1, b = 01010101, b(arr) = 01010101, c = 0101, c(arr) = 0101
after:  a = 1, b = 01010101, b(arr) = 01010101, c = 0101, c(arr) = 0101

Synopsys VCS:

before: a = x, b = xxxxxxxx, b(arr) = xxxxxxxx, c = xxxx, c(arr) = xxxx
after:  a = 1, b = xxxxx1xx, b(arr) = xxxxxxxx, c = xxxx, c(arr) = xxxx
before: a = 1, b = 0101x101, b(arr) = 0101xx01, c = 0101, c(arr) = xxxx
after:  a = 1, b = 0101x101, b(arr) = 0101xx01, c = 0101, c(arr) = xxxx
before: a = 1, b = 01010101, b(arr) = 01010101, c = 0101, c(arr) = 0101
after:  a = 1, b = 01010101, b(arr) = 01010101, c = 0101, c(arr) = 0101

Icarus:

before: a = x, b = xxxxxxxx, b(arr) = xxxxzzxx, c = xxxx, c(arr) = xxxx
after:  a = 1, b = xxxxxxx1, b(arr) = xxxxzzx1, c = xxx1, c(arr) = xxx1
before: a = 1, b = 01010101, b(arr) = 01010101, c = 0101, c(arr) = 0101
after:  a = 1, b = 01010101, b(arr) = 01010101, c = 0101, c(arr) = 0101

*/

/*

Observations:

Riviera, Xcelium, Questa and Icarus interleave the same things as in
interleave1_initial (see first two rows from each simulator).

VCS, in contrast, interleaves less than in interleave1_initial!
Only the the simple always@(*) assignment for the scalar case remains...

*/

logic a;

logic b7, b6, b5, b4, b3, b2, b1, b0;
logic[7:0] b;

wire c3, c2, c1, c0;
wire[3:0] c;

always_comb begin
 $display("before: a = %b, b = %b, b(arr) = %b, c = %b, c(arr) = %b",
	  a, {b7,b6,b5,b4,b3,b2,b1,b0}, b, {c3,c2,c1,c0}, c);
 a = 1;
 $display("after:  a = %b, b = %b, b(arr) = %b, c = %b, c(arr) = %b",
	  a, {b7,b6,b5,b4,b3,b2,b1,b0}, b, {c3,c2,c1,c0}, c);
end

// Assignments to variable

assign b0 = a;
assign b1 = a + 1;

always @(*) b2 = a;
always @(*) b3 = a + 1;

always_comb b4 = a;
always_comb b5 = a + 1;

buf (b6, a);
not (b7, a);

// Assignments to variable (array)

assign b[0] = a;
assign b[1] = a + 1;

always @(*) b[2] = a;
always @(*) b[3] = a + 1;

always_comb b[4] = a;
always_comb b[5] = a + 1;

buf (b[6], a);
not (b[7], a);

// Assignments to net

assign c0 = a;
assign c1 = a + 1;

buf (c2, a);
not (c3, a);

// Assignments to net (array)

assign c[0] = a;
assign c[1] = a + 1;

buf (c[2], a);
not (c[3], a);

endmodule
