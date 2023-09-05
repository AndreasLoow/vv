This directory constrains a small-scale systematic experiment on how much current Verilog simulators interleave procedural blocks and continuous assignments.

The simulator versions used are (from EDA playground and local installation):

- Aldec Riviera Pro 2022.04
- Cadence Xcelium 20.09
- Mentor Questa 2021.3
- Synopsys VCS 2021.09
- Icarus Verilog 13.0

The key takeaways are:

- Synopsys interleaves continuous assignments in the execution of procedural blocks, which other simulators only do in special edge cases.

- No simulator interleaves procedural blocks in the execution of other procedural blocks, except in special edge cases.

For more details, see the comments in the included Verilog files.

(It is important to remember that the above takeaways are based on the modules tested here, the observations might not hold for other modules. In other words, the observations are the result of reverse-engineering, the only way to know how the simulators work in the general case is to inspect their source code.)
