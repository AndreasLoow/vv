# Verilog Visualiser (VV)

VV is an interactive simulator for Verilog that visualises Verilog's simulation semantics, in particular, Verilog's stratified event queue. The simulator is based on the [SystemVerilog-2023 standard](https://doi.org/10.1109/IEEESTD.2024.10458102). See the paper "The Simulation Semantics of Synthesisable Verilog" (OOPSLA'25) for further context.

VV is web-browser-based and a live demo is available at [andreasloow.github.io/vv](https://andreasloow.github.io/vv). See the dropdown menu (top left) in the demo containing a collection of (commented) example Verilog modules illustrating various aspects of Verilog's semantics.

The example Verilog modules available in the demo are available as files in the directory `examples`, such that they can, e.g., be loaded into a traditional Verilog simulator to compare the execution in the simulator with the execution in VV.

## Implementation details

VV is implemented in [ReScript](https://rescript-lang.org), an OCaml dialect of JavaScript. The front-end uses [React](https://reactjs.org). For parsing Verilog files, [Ohm](https://ohmjs.org) is used (whose error reporting leaves much to be desired). After parsing, some simple checks and elaboration are done by [src/Elaborator.res](src/Elaborator.res) and then the resulting parse tree is compiled to an internal representation by [src/Compiler.res](src/Compiler.res); the internal representation is unstructured (gotos) instead of structured (as Verilog: if, etc.), making implementing pausing execution easier. See [src/Verilog.res](src/Verilog.res) for the core of the simulator. The front-end of the tool is in [src/Simulator.res](src/Simulator.res).

## Development notes

To build and run VV locally, use the following commands:

```sh
npm i
npm run res:build
npm run dev
```

When adding new example modules, run `examples/compile.hs` to make them available to VV (i.e., generate an updated `src/Templates.res` file).