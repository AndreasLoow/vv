module interleave3_always;

/*

Aldec Riviera:

before: i = x, v = xxxxxxxxxx, v(arr) = xxxxxxxxxx, n = xxxx, n(arr) = xxxx
after:  i = 1, v = x1xxxxxxxx, v(arr) = x1xxxxxxxx, n = xxxx, n(arr) = xxxx
before: i = 1, v = 0101010101, v(arr) = 0101010101, n = 0101, n(arr) = 0101
after:  i = 1, v = 0101010101, v(arr) = 0101010101, n = 0101, n(arr) = 0101

Cadence Xcelium:

before: i = x, v = xxxxxxxxxx, v(arr) = xxxxxxxxxx, n = xxxx, n(arr) = xxxx
after:  i = 1, v = xxxxxxxxxx, v(arr) = xxxxxxxxxx, n = xxxx, n(arr) = xxxx
before: i = 1, v = xx01010101, v(arr) = xx01010101, n = xxxx, n(arr) = xxxx
after:  i = 1, v = xx01010101, v(arr) = xx01010101, n = xxxx, n(arr) = xxxx
before: i = 1, v = xx01010101, v(arr) = xx01010101, n = 0101, n(arr) = 0101
after:  i = 1, v = xx01010101, v(arr) = xx01010101, n = 0101, n(arr) = 0101
before: i = 1, v = 0101010101, v(arr) = 0101010101, n = 0101, n(arr) = 0101
after:  i = 1, v = 0101010101, v(arr) = 0101010101, n = 0101, n(arr) = 0101

Mentor Questa:

before: i = x, v = xxxxxxxxxx, v(arr) = xxxxxxxxxx, n = xxxx, n(arr) = xxxx
after:  i = 1, v = xxxxxxxxxx, v(arr) = xxxxxxxxxx, n = xxxx, n(arr) = xxxx
before: i = 1, v = 01xxxxxx01, v(arr) = 01xxxxxx01, n = 0101, n(arr) = 0101
after:  i = 1, v = 01xxxxxx01, v(arr) = 01xxxxxx01, n = 0101, n(arr) = 0101
before: i = 1, v = 0101010101, v(arr) = 0101010101, n = 0101, n(arr) = 0101
after:  i = 1, v = 0101010101, v(arr) = 0101010101, n = 0101, n(arr) = 0101

Synopsys VCS:

before: i = x, v = xxxxxxxxxx, v(arr) = xxxxxxxxxx, n = xxxx, n(arr) = xxxx
after:  i = 1, v = xxxxx1xxxx, v(arr) = xxxxxxxxxx, n = xxxx, n(arr) = xxxx
before: i = 1, v = 0101x1xx01, v(arr) = 0101xxxx01, n = 0101, n(arr) = xxxx
after:  i = 1, v = 0101x1xx01, v(arr) = 0101xxxx01, n = 0101, n(arr) = xxxx
before: i = 1, v = 0101010101, v(arr) = 0101010101, n = 0101, n(arr) = 0101
after:  i = 1, v = 0101010101, v(arr) = 0101010101, n = 0101, n(arr) = 0101

Icarus:

before: i = x, v = xxxxxxxxxx, v(arr) = xxxxzzzzxx, n = xxxx, n(arr) = xxxx
after:  i = x, v = xxxxxxxxxx, v(arr) = xxxxzzzzxx, n = xxxx, n(arr) = xxxx
before: i = x, v = xxxxxxxxxx, v(arr) = xxxxzzzzxx, n = xxxx, n(arr) = xxxx
after:  i = 1, v = xxxxxxxxx1, v(arr) = xxxxzzzzx1, n = xxx1, n(arr) = xxx1
before: i = 1, v = 0101010101, v(arr) = 0101010101, n = 0101, n(arr) = 0101
after:  i = 1, v = 0101010101, v(arr) = 0101010101, n = 0101, n(arr) = 0101

*/

/*

Observations:

Riviera, Xcelium, Questa and VCS seems unaffected compared to
interleave2_always_comb, i.e., the same things are interleaved.

Icarus, in contrast, now runs the always block once before doing
the same interleaving as in interleave2_always_comb.

*/

logic i, dummy;

logic v9, v8, v7, v6, v5, v4, v3, v2, v1, v0;
logic[9:0] v;

wire n3, n2, n1, n0;
wire[3:0] n;

// Dummy variable to make the always block run once
initial dummy <= 1;

always @(*) begin
 $display("before: i = %b, v = %b, v(arr) = %b, n = %b, n(arr) = %b",
	  i, {v9,v8,v7,v6,v5,v4,v3,v2,v1,v0}, v, {n3,n2,n1,n0}, n);
 i = dummy;
 $display("after:  i = %b, v = %b, v(arr) = %b, n = %b, n(arr) = %b",
	  i, {v9,v8,v7,v6,v5,v4,v3,v2,v1,v0}, v, {n3,n2,n1,n0}, n);
end

// Assignments to variable

assign v0 = i;
assign v1 = i + 1;

initial @(*) v2 = i;
initial @(*) v3 = i + 1;

always @(*) v4 = i;
always @(*) v5 = i + 1;

always_comb v6 = i;
always_comb v7 = i + 1;

buf (v8, i);
not (v9, i);

// Assignments to variable (array)

assign v[0] = i;
assign v[1] = i + 1;

initial @(*) v[2] = i;
initial @(*) v[3] = i + 1;

always @(*) v[4] = i;
always @(*) v[5] = i + 1;

always_comb v[6] = i;
always_comb v[7] = i + 1;

buf (v[8], i);
not (v[9], i);

// Assignments to net

assign n0 = i;
assign n1 = i + 1;

buf (n2, i);
not (n3, i);

// Assignments to net (array)

assign n[0] = i;
assign n[1] = i + 1;

buf (n[2], i);
not (n[3], i);

endmodule
