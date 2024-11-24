# Verilog Visualiser (VV)

VV is an interactive simulator for Verilog that visualises Verilog's simulation semantics, in particular, Verilog's stratified event queue, as described by the (System)Verilog standard. The standard is [available for free online](https://doi.org/10.1109/IEEESTD.2024.10458102).

A live demo of the tool is available at [andreasloow.github.io/vv](https://andreasloow.github.io/vv) (no installation needed). See the dropdown menu (top left) in the demo containing a collection of (commented) Verilog modules illustrating various aspects of Verilog's semantics.

The example modules available in the demo are available as files in the directory `examples` (such that they can, e.g., be loaded into a traditional Verilog simulator to compare the execution in the simulator with the execution in VV). ([EDA playground](https://www.edaplayground.com) has a few simulators available online as well.)

## Implementation details

VV is implemented in [ReScript](https://rescript-lang.org), an OCaml dialect of JavaScript. The front-end uses [React](https://reactjs.org). For parsing Verilog files, [Ohm](https://ohmjs.org) is used (whose error reporting leaves much to be desired). After parsing, some simple checks are done by [src/Elaborator.res](src/Elaborator.res) and the parse tree is compiled to an internal representation by [src/Compiler.res](src/Compiler.res); the internal representation is unstructured (gotos) instead of structured (as Verilog: if, etc.), making pausing execution easier. See [src/Verilog.res](src/Verilog.res) for the core of the simulator. The front-end of the tool is in [src/Simulator.res](src/Simulator.res).

When adding new example modules, run `examples/compile.hs` to generate an updated `src/Templates.res` file.

Some of the following is sometimes useful to remember:

```sh
npm i
npm dev
```

The files for GitHub pages are in the branch "website".
