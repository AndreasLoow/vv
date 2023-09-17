module seq_comb08;

/*

More propagation test

Some simulators give:

1 -> x -> x -> x -> x
1 -> 0 -> x -> x -> x
1 -> 0 -> 1 -> x -> x
1 -> 0 -> 1 -> 0 -> x
1 -> 0 -> 1 -> 0 -> 1

whereas others simply give:

1 -> x -> x -> x -> x
1 -> 0 -> 1 -> 0 -> 1

(Can be a result of running all blocks
and continuous assignments in declaration
order vs. running blocks and continuous
assignments in separate phases.)

*/

logic a;

wire b1, b2, b3, b4;

always_comb begin
 a = 1;
 $display("%b -> %b -> %b -> %b -> %b",
          a, b1, b2, b3, b4);
end

assign b1 = a + 1;

assign b2 = b1 + 1;

assign b3 = b2 + 1;

assign b4 = b3 + 1;

endmodule
