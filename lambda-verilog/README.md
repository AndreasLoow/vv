A small collection of Verilog modules illustrating different aspects of the formal semantics of Verilog introduced in [The Essence of Verilog: A Tractable and Tested Operational Semantics for Verilog](https://doi.org/10.1145/3622805).

To run the examples, e.g., `binterleave.v`, start the docker container artifact included in the paper and do:

```
lv -cx binterleave.v -o tmp.lv
```

The following examples are included in this directory:

* [`binterleave.v`](binterleave.v) -- illustrates process preemption, can print both "0" and "1"
* [`nbinterleave1.v`](nbinterleave1.v) -- illustrates mixing of nonblocking events and active events, can print either "0" or "1"
* [`nbinterleave2.v`](nbinterleave2.v) -- illustrates that order between nonblocking assignemnts to different variables are preserved, i.e., the module never prints "a = x, b = 0"
* [`inactive.v`](inactive.v) -- illustrates mixing of inactive events and active events, can print either "0" or "1"
* [`continterleave.v`](continterleave.v) -- illustrates arbitrary interleavings between procedural processes and continuous assignments
