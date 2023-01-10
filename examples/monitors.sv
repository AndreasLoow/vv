module monitors;

// Monitors print when something they depend on has changed during the current time slot

// At most one monitor at a time can be active,
// so the following will never print "1".
//
// It will, however, print "2" since the monitor printing "2" is not overwritten until time slot 10.

// Note: The standard is not clear on what should happen if nothing changes during the time slot
//       the monitor is installed; it seems that current simulators print unconditionally,
//       so we are doing the same.

// TODO: ADD NOTE ABOUT POSTPONED REGION...

initial begin
 $monitor("1");
 $monitor("2");
 #10 $monitor("3");
end

endmodule
