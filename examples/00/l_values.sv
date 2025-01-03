module l_values;

// Currently, only bit values are supported in VV,
// i.e., no arrays/vectors yet.

// This is because, when building this simulator,
// we were foremost interested in how events are
// created/propagated/maintained/etc. in Verilog.
// Adding support for arrays does not really inform this.

// But it would be nice to support arrays since
// they are common in real-world code. So we might
// consider adding support for them in the future...

// For convenience, for now, "0" and "1" are
// parsed as bit values rather than "at least"
// 32-bit integers as the standard says they
// should.

endmodule
