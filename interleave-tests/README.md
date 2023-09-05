This directory constrains a small-scale systematic experiment on how much current Verilog simulators interleave procedural blocks with other procedural blocks and continuous assignments.

The simulator versions used are (from EDA playground and local installation):

- Aldec Riviera Pro 2022.04
- Cadence Xcelium 20.09
- Mentor Questa 2021.3
- Synopsys VCS 2021.09
- Icarus Verilog 13.0

The key takeaways are:

- In general, the execution of procedural blocks are not interleaved with other procedural blocks or continuous assignments. However, some special edge cases exist. E.g., some simple assignments (both procedural and continuous) are interleaved with procedural blocks.

- Synopsys breaks this general pattern and interleaves execution of initial blocks with continuous assignments, but not other procedural blocks (except for special edge cases). Synopsys does not interleave always/always_comb blocks (except for special edge cases).

For more details, see the comments in the included Verilog files.

(It is important to remember that the above takeaways are based on the modules tested here, the observations might not hold for other modules. In other words, the observations are the result of reverse-engineering, the only way to know how the simulators work in the general case is to inspect their source code.)
