This directory contains a small collection of Verilog test modules for [Meredith et al.'s Verilog semantics](https://doi.org/10.1109/MEMCOD.2010.5558634). The modules illustrate some problems/corner-cases of the semantics related to nondeterminism and interleavings of processes (see further explanation in the paper).

To run the modules, both Meredith et al.'s Verilog semantics and the tool Maude are needed. The Verilog semantics is archived at [archive.org](https://web.archive.org/web/20120502172808/http://fsl.cs.uiuc.edu/index.php/Verilog_Semantics); the original site appears to have been removed. Maude is available at the [official Maude site](https://maude.cs.illinois.edu); we used Maude 3.3.1 for the experiments presented here, the latest version available at the time.

Because Meredith et al.'s Verilog semantics does not support X values, the modules mentioned in the paper has been modified to fit the semantics while still illustrating the same problems. Specifically, to get variables with support for (at least) three states, we use array variables rather than scalar variables as in the paper.

The following modules are available in this directory:

* [`noxvalues.maude`](noxvalues.maude) -- illustrates lack of support for X values, variables are initialised to 0 instead of X
* [`nondetblocking.maude`](nondetblocking.maude) -- illustrates that preemptive-threading-semantics for processes results in "too many" interleavnings; the module can print either "1", or "2", or "1" followed by "2"
* [`nondetnonblocking.maude`](nondetnonblocking.maude) -- illustrates that allowing nonblocking-assignments events to mix with other events results in "too many" interleavings; the module can print either "1", or "2", or "1" followed by "2"
* [`interleavings.maude`](interleavings.maude) -- variant of `../examples/schedule/seq_cont6.sv`, further illstration of interleavings, now between procedural processes and continuous assignments instead of two procedural processes as above

To run, e.g., `noxvalues.maude`, copy the file to the same directory as the Verilog semantics and simply do (on Mac):

```
maude.darwin64 noxvalues.maude
```

The resulting output from doing so for each available module is stored in an `.output` file with the same name as the module file in this directory. E.g., for `noxvalues.maude`, the output file is `noxvalues.output`.
