let templates = Belt.Map.String.fromArray(
[("empty.sv","module empty;\n\n// Put Verilog code here!\n\n// See the modules in 00 (in the top-left menu) for some introductory notes!\n\nendmodule\n"),("nonblocking2.sv","module nonblocking2;\n\nlogic a;\n\n// a must be 0 at end of time slot\n\ninitial begin\n a <= 1'b0;\n a = 1'b1;\nend\n\nendmodule\n"),("misc/xif.sv","module xif;\n\n// This will always print \"Second branch\", see p. 299\n\ninitial\n if (1'bx)\n  $display(\"First branch\");\n else\n  $display(\"Second branch\");\n\nendmodule\n"),("misc/monitor.sv","module monitor;\n\n// Basic $monitor example\n\n// Note that the order of execution does not matter,\n// the output is the same.\n\nlogic a;\n   \ninitial $monitor(\"a = %b at time %d\", a, $time);\n\ninitial begin\n a = 1'b0;\n #10 a = 1'bz;\nend\n\nendmodule\n"),("misc/always_initial.sv","module always_initial;\n\n// No order between always and initial blocks:\n\nlogic a, b, c;\n\ninitial a = 0;\ninitial a = 1;\n\ninitial b = 0;\nalways begin b = 1; @(*); end\n\nalways begin c = 0; @(*); end\nalways begin c = 1; @(*); end\n\ninitial $monitor(\"a = %b, b = %b, c = %b\", a, b, c);\n\nendmodule\n"),("misc/always_ff_test.sv","module always_ff_test;\n\nlogic clk, a, b;\n\n// An always_ff block must have one and only \n// one event control\nalways_ff @(posedge clk)\n a <= a;\n\n// However, the standard (strangely) does not\n// say it must be at the beginning of the always\nalways_ff begin\n b <= b;\n @(posedge clk);\nend\n\nendmodule\n"),("init2.sv","module init2;\n\n// Variables can also be initialised with nonconstants,\n// such as:\n\nlogic a = 1;\nlogic b = a;\n   \n// Variables must be declared before use:\n//\n// See \"6.21 Scope and lifetime\" (p. 126):\n//\n// \"A variable declaration shall precede any simple\n// reference (non-hierarchical) to that variable.\"\n\n// Thus, e.g., the following is not possible:\n//\n// logic a = b;\n// logic b = 1;\n\n// I have not found a clear reference in the standard,\n// but I assume variables are to be initialised in\n// declaration order. (This is guaranteed by e.g. C++.)\n\nendmodule\n"),("xx_more/Sagdeo/ex4_1.sv","//\n// The examples in this directory are from the book\n// \"The Complete Verilog Book\" by Vivek Sagdeo\n//\n\n// Example 4-1, A sample design with structure and behavior.\n\nmodule ex4_1;\n\nreg i1, i2, i3, i4;\n// MOD: Wires implicit in original module\nwire\to1, o2, o3;\n   \nand #2 a1(o1, i1, i2), a2(o2, i3, i4);\nor r1(o3, o1, o2);\n\ninitial begin\n $monitor(\"Sim Time=%d i1=%b i2=%b i3=%b i4=%b o1=%b o2=%b o3=%b\",\n\t  $time, i1, i2, i3, i4, o1, o2, o3);\n #25 i1 = 1;\n #25 i2 = 0;\n #25 i3 = 1;\n #25 i4 = 1;\n #100 $finish;\nend\n\nendmodule\n"),("xx_more/Sagdeo/ex4_5.sv","// Example 4-5. Multiple events on a reg resulting cancellation (algorithm 4-7 applied)\n\nmodule ex4_5;\n\nwire out;\nreg in1, in2;\n\nassign #5 out = in1 && in2;\n\ninitial begin\n $monitor(\"Time = %d out = %b in1=%b in2=%b\",\n\t  $time, out, in1, in2);\n // MOD: dumpfile not needed\n // $dumpfile(\"ex4_2.dmp\");\n // $dumpvars;\n // $gr_waves(out, in1, in2);\n #1 in1 = 1;\n #2 in2 = 1;\n #2 in1 = 0;\n #10 $finish;\nend\n\nendmodule\n"),("xx_more/Sagdeo/ex4_4.sv","// Example 4-4. Multiple events on a reg -- but no cancellation (algorithm 4-7 applied)\n\nmodule ex4_4;\n\nwire out;\nreg in1, in2;\n\nassign #5 out = in1 || in2;\n\ninitial begin\n $monitor(\"Time = %d out = %b in1=%b in2=%b\",\n          $time, out, in1, in2);\n // MOD: dumpfile not needed\n // $dumpfile(\"ex4_2.dmp\");\n // $dumpvars;\n // $gr_waves(out, in1. in2);\n #1 in1 = 1;\n #2 in2 = 1;\n #10 $finish;\nend\n\nendmodule\n"),("xx_more/Sagdeo/ex4_nondet.sv","// Unnamed example, p. 91--92\n\nmodule ex4_nondet;\n\n// MOD: rega not declared in original example since \n//      just code snippet\nlogic rega;\n\ninitial #5 rega = 1'b1;\n\ninitial #5 rega = 1'b0;\n\ninitial #6 $display(\"rega at time = %d is %b\", $time, rega);\n\n/* The above may result in 1 or 0 depending on the simulation run and the simulator tool */\n   \nendmodule\n"),("init3.sv","module init3;\n\n// The following example is from \"Verilog Coding\n// Standard\" by Charles Eric LaForest, available at\n// http://fpgacpu.ca/fpga/verilog.html\n//\n// (Also, thanks to Charles for the pointer\n// to the example!)\n\n// The example is written for Verilog-2001, and\n// hence uses the pre-SystemVerilog semantics for\n// initialisation (see the module init1).\n\n// Here we emulate the semantics of pre-SystemVerilog\n// to illustrate the Verilog-2001 problem highlighted\n// by the example:\n\n// The example includes the following declarations:\n//\n// // Counts as a negedge at time zero! (X -> 0)\n// logic clock = 1'b0;\n// // Also does X -> 0 at time zero.\n// logic foo = 1'b0;\n// logic bar;\n//\n// Which we must declare as follows to get the\n// pre-SystemVerilog semantics:\n\nlogic clock, foo, bar;\ninitial clock = 1'b0;\ninitial foo = 1'b0;\n\n// The rest of the example remains unchanged:\n\n// Simulate the clock\nalways #1 clock = ~clock;\n\n// It is unclear if the clock edge or the \"foo\"\n// initialization will happen first, so \"bar\" can\n// get X for one simulation cycle...\nalways @(negedge clock)\n bar <= foo;\n\nendmodule\n"),("nonblocking3.sv","module nonblocking3;\n\nlogic a;\n\n// a must be 0 at end of time slot\n\ninitial begin\n a = 1'b0;\n a <= a;\nend\n\nendmodule\n"),("comb/selftrigger_loop2.sv","module selftrigger_loop2;\n\n// Compare with selftrigger_loop1\n\nlogic a = 1'b0;\nlogic b = 1'b0;\n\n// No infinite loop since a process cannot self-trigger\n\nalways_comb begin\n b = !a;\n a = b;\nend\n\nendmodule\n"),("comb/always_star2.sv","module always_star2;\n\nlogic a, b;  \n\ninitial b <= 1;\n\nalways begin\n @(b) a = 0;\n @(*) a = 1;\nend\n\ninitial $monitor(\"%b\", a);\n\nendmodule\n"),("comb/always_comb_vs_always.sv","module always_comb_vs_always;\n\n// always_comb blocks are unconditionally run at start up,\n// always blocks are not\n\nlogic a;\nlogic b;\nlogic c = 1'b0;\n\n// a will be 1 at the end of simulation\nalways_comb a = c + 1'b1;\n\n// b will, in contrast, be x at the end of simulation;\n// this is because the process will never get past @(*)\nalways @(*) b = c + 1'b1;\n\nendmodule\n\n"),("comb/always_star1.sv","module always_star1;\n\n// Examples from the standard, p. 219;\n// illustrates that @* is preprocessed away correctly \n\nlogic a, b, c, d, i, x, y, tmp1, tmp2, kid;\n\n// Example 1: Uses functions, not supported by VV\n\n// Example 2:\n// equivalent to @(a or b or c or d or tmp1 or tmp2)\nalways @* begin\n tmp1 = a & b;\n tmp2 = c & d;\n y = tmp1 | tmp2;\nend\n\n// Example 3:\n// equivalent to @(b)\nalways @* begin \n @(i) kid = b; // i is not added to @*\nend\n   \n// Example 4:\n// equivalent to @(a or b or c or d)\nalways @* begin \n x = a ^ b;\n // equivalent to @(c or d)\n @* x = c ^ d;\nend\n\n// Example 5 and 6: Uses arrays, not supported by VV\n\nendmodule\n"),("comb/always_comb_writes_removed.sv","module always_comb_writes_removed;\n\n// variables written to be always_comb are removed\n// from sensitivity list \n\nlogic a, b, c, d;\n\n// does not include a\nalways_comb begin\n a = 0;\n b = a;\nend\n\n// does not include c\nalways_comb begin\n d = c;\n c = 0;\nend\n\nendmodule\n"),("comb/comb_nonblocking.sv","module comb_nonblocking;\n\n// One should never use nonblocking assignments in\n// combinational blocks. Here we illustrate one\n// reason for this coding rule.\n\n// The below combinational process will loop forever\n// in the sense that simulation will never progress\n// beyond the first time slot.\n\nlogic a = 0, b = 0;\n\ninitial b <= 1;\n\nalways @(*) a <= a + b;\n\nendmodule\n"),("comb/always_comb_without_reads.sv","module always_comb_without_reads;\n\n// Test for what happens with combinational always\n// blocks without dependencies\n\nlogic a, b, c;\n\ninitial $monitor(\"a = %b, b = %b at time %d\", a, b, $time);\n\n// simulators output 0 at time 0 and terminate normally\nalways_comb a = 1'b0;\n\n// simulators output x at time 0 and terminate normally\nalways @(*) b = 1'b0;\n\n// simulators loop infinitely on this:\n//always c = 1'b0;\n\nendmodule\n"),("comb/always_latch_same_as_always_comb.sv","module always_latch_same_as_always_comb;\n\n// always_latch blocks are defined to have the same\n// semantics as always_comb blocks, except that\n// \"software tools should perform additional checks\n// and warn if the behavior in an always_latch\n// construct does not represent latched logic\".\n// VV performs no such check, since it is not\n// a synthesis tool; nor does it check always_comb\n// blocks in this way.\n\n// Example from p. 208\n\nlogic ck = 1, q, d = 0;\n   \nalways_latch\n if (ck)\n  q <= d;\n\nendmodule\n"),("comb/selftrigger_loop1.sv","module selftrigger_loop1;\n\n// Compare with selftrigger_loop2\n\nlogic a = 1'b0;\nlogic b = 1'b0;\n\n// Infinite loop in first time slot since the processes trigger each other\n\nalways_comb b = !a;\nalways_comb a = b;\n\nendmodule\n"),("00/c_continuous.sv","module c_continuous;\n\n// VV also supports so-called continuous assignments\n   \n// Continuous assignments have a completely \n// different evaluation model than \"normal\" processes\n\n// E.g., the net \"a\" below has two drivers,\n// and the so-called resolution function for\n// wire nets resolves the two values to 1:\n\nwire a;\n  \nassign a = 1'b1;\nassign a = 1'bz;\n\n// For wire nets, the following drivers results in a\n// value x for the net \"b\":\n\nwire b;\n\nassign b = 1'b1;\nassign b = 1'b0;\n\n// Whereas for wand nets, the same drivers result\n// in 0:\n\nwand c;\n\nassign c = 1'b1;\nassign c = 1'b0;\n\n// (Make sure to run all events to see the correct results!)\n\nendmodule\n"),("00/h_shortcuts.sv","module h_shortcuts;\n\n// Some minor shortcuts has been taken, for now:\n//\n// - No check for using undeclared variables/nets\n//\n// - No check that there are not multiple processes writing\n//   to something a new-type process is writing to\n//\n// - No check that one variable has at most one\n//   continuous assignment / not mixed continuous + process\n//\n// - Other similar rules (possibly)\n//\n// Breaking any of the above rules result in undefined\n// behaviour without warnings.\n   \nendmodule\n"),("00/d_concurrency.sv","module d_concurrency;\n\n// Processes execute from blocking statements to \n// blocking statements.\n\n// E.g., when the following process is run:\n\nlogic a, b;\n\ninitial begin\n a = 0;\n a = 1;\n // The process will not stop until here\n @(b) a = 0;\nend\n\n// This differ from what the Verilog standard suggests,\n// see \"A small, but important, concurrency problem in\n// Verilog's semantics?\" from MEMOCODE'22 for a longer\n// discussion.\n\nendmodule\n"),("00/f_display.sv","module f_display;\n\n// The display tasks ($display, $monitor, etc.)\n// can be invoked in a great variety of ways;\n// e.g., see this call from p. 239:\n//\n// $monitor($time, , \"a = %b b = %b\", a, b);\n//\n// In VV, to simplify the implementation,\n// the first argument must be a format string\n// and only %b (for value) and %d (for time)\n// are supported, e.g.:\n\nlogic b = 1'b0;\n\ninitial $display(\"a = %b at time %d\", b, $time);\n\nendmodule\n"),("00/e_values.sv","module e_values;\n\n// Currently, only bit values are supported,\n// i.e., no arrays/vectors yet.\n\n// This is because, when building this simulator,\n// I was mostly interested in how events are\n// created/propagated/maintained/etc. in Verilog.\n// Adding support for arrays does not really inform this.\n\n// But it would be nice to support arrays since\n// they are common in real-world code. So I might\n// consider adding support for them in the future...\n\n// For convenience, for now, \"0\" and \"1\" are\n// parsed as bit values rather than \"at least\"\n// 32-bit integers as the standard says they \n// should (p. 73).\n\nendmodule\n"),("00/g_monitor.sv","module g_monitor;\n\n// Monitors print when something they depend on has\n// changed during the current time slot\n\n// E.g., the following monitor would print the value\n// of \"a\" at the end of each time slot every time\n// \"a\" has changed during the time slot:\n//\n// initial $monitor(\"a = %b\", a);\n\n// The standard is not clear on what should happen\n// if nothing change during the time slot the\n// monitor is installed; it seems that current\n// simulators print unconditionally, so we are\n// doing the same.\n\n// At most one monitor at a time can be active,\n// so the following code will never print \"1\".\n//\n// It will, however, print \"2\" since the monitor\n// printing \"2\" is not overwritten until time slot 10.\n\ninitial begin\n $monitor(\"1\");\n $monitor(\"2\");\n #10 $monitor(\"3\");\nend\n\n// The Verilog standard says that monitor events\n// must be scheduled in a region called \"postponed\"\n// (p. 62):\n//   \n// \"$monitor, $strobe, and other similar events are \n// scheduled in the Postponed region.\"\n//\n// However, once installed, a monitor is executed\n// every time slot, which would require duplicating\n// the event into the postponed region of every\n// time slot. We find this awkward and instead\n// keep track of the monitor outside the event\n// queue, since at most one monitor can be active\n// at a time anyway.\n\nendmodule\n"),("00/a_start.sv","module a_start;\n\n// Welcome to VV, an interactive Verilog simulator!\n\n// As an introduction, let's consider the following\n// variable \"a\" and a process assigning 0 to \"a\":\n\nlogic a;\n   \ninitial a = 0;\n\n// To load a Verilog module into the simulator,\n// click \"Parse\" in the bottom-left corner.\n\n// After the module has been parsed a normalised\n// module will be shown to the right of the input \n// source code.\n\n// To the right of the normalised module,\n// VV visualises the current state of Verilog's\n// event queue and other simulation state.\n\n// The event queue consist of three regions:\n// \n// - active,\n// - inactive,\n// - and nba (nonblocking assignments).\n//\n// (Full Verilog contains more, we do not\n// consider them here.)\n\n// After loading this module, you will see a\n// blue-marked event in the active region for\n// time 0.\n\n// First, see that the variable \"a\" has value x in\n// the environment. Now, clicking the blue event \n// will progress the simulation. After clicking the\n// event, the variable \"a\" now has value 0 in the\n// environment.\n\n// There are now no more events to execute in the\n// current time, therefore \"Simulation time\" is now\n// blue.\n\n// Clicking \"Simulation time\" progresses to simulation\n// to the next time slot.\n\n// Here, however, the simulation ends after this first\n// time slot -- and hence the simulation finishes when\n// clicking \"Simulation time\".\n\n// For more, see the module 00/b_more.sv.\n\nendmodule   \n"),("00/b_more.sv","module b_crash_course;\n\n// Here are some more example of what we can do in VV\n\n// Here we initially have three different blue event\n// in the active region.\n\n// Verilog is nondeterministic and events in the\n// active region can be executed in any order.\n\n// Furthermore, the execution of processes can\n// depend on events generated by other processes.\n\n// E.g., the second process wait for the clock to\n// move to high before executing.\n\n// After executing a few events, there will be a\n// blue event in the NBA region.\n\n// When clicking the NBA region, the region will move\n// to the active region and the NBA events can be executed.\n\n// (The NBA region cannot be moved until both the active and\n// inactive regions are empty.)\n\n// See 00/c_continuous.sv for more.\n\nlogic clk = 0;\nlogic foo = 1;\nlogic bar;\n\nalways #1 clk = ~clk;\n\nalways @(posedge clk)\n foo <= foo + 1;\n\nalways @(foo)\n bar <= foo;\n\nendmodule\n"),("nonblocking4.sv","module nonblocking4;\n\nlogic a;\n\n// a must be x at end of time slot\n\ninitial begin\n a <= a;\n a = 1'b0;\nend\n\nendmodule\n"),("delay/blocking_delay.sv","module blocking_delay;\n\n// Simple example of delayed blocking assignment\n\nlogic a;\n\ninitial begin\n a = #3 1;\n a = #4 a;\nend\n\nendmodule\n"),("delay/assn_delay.sv","module assn_delay;\n\nlogic a;\nlogic b = 1'b0;\n\ninitial $monitor(\"time = %d, a = %b, b = %b\", $time, a, b);\n\n// Verilog also has support for \"intra-assignment timing control\", see 10.4.1 Blocking procedural assignments\n\n// To illustrate the difference between a delayed assignment and an assignment with intra-assignment delay,\n// consider the following:\n\n// The rhs will not be evaluated until time slot 15\ninitial #15 a = b;\n\n// In contrast, with intra-assignment timing control, the rhs will be evaluated\n// before the process is blocked\ninitial a = #10 b;\n\n// Just a process to change the value of b before the two above processes wake up\ninitial #5 b = 1;\n\n// Hence, at time slot 10 a will be 1 and at time slot 15 a will be 0 (since b is 0 initially)\n\nendmodule\n"),("delay/nonblocking_delay.sv","module nonblocking_delay;\n\n// Simple example of delayed nonblocking assignment\n\nlogic a, b;\n\ninitial #3 a <= 0;\n\ninitial begin\n b <= #3 1;\n b <= #4 b;\n b <= #3 1'bz;\nend\n\nendmodule\n"),("nonblocking1.sv","module nonblocking1;\n\nlogic a;\n\n// a must be 1 at end of time slot\n\ninitial begin\n a <= 1'b0;\n a <= 1'b1;\nend\n\nendmodule\n"),("clk/selftrigger_clk1.sv","module selftrigger_clk1;\n\n// Inspired by https://verificationacademy.com/forums/systemverilog/verilog-blocking/nonblocking-assignment-clk-generator-self-triggered\n\n// Compare with selftrigger_clk2\n\nlogic clk;\ninitial #10 clk = 0;\nalways @(clk) #10 clk = ~clk;\n\ninitial $monitor(\"time = %d, clk = %b\", $time, clk);\n\nendmodule\n"),("clk/clk_blocking.sv","module clk_blocking;\n\n// Compare with clk_nonblocking\n\nlogic clk = 0;\nalways #1 clk = ~clk;\n\nalways @(posedge clk) $display(\"RUN\");\n\nendmodule\n"),("clk/read_clk_after_posedge.sv","module read_clk_after_posedge;\n\n// Example suggested by Niklas S\246rensson during FMCAD'22\n\nlogic clk = 0;\nalways #1 clk <= ~clk;\n\n// This will always print 1\nalways @(posedge clk) $display(\"%b\", clk);\n\n//\n// Alternative:\n//\n// wire clk2;\n// assign clk2 = clk;\n//\n// always @(posedge clk) $display(\"%b\", clk2);\n//\n\nendmodule\n"),("clk/clk_nonblocking.sv","module clk_nonblocking;\n\n// Compare with clk_blocking\n\nlogic clk = 0;\nalways #1 clk <= ~clk;\n\nalways @(posedge clk) $display(\"RUN\");\n\nendmodule\n"),("clk/selftrigger_clk2.sv","module selftrigger_clk2;\n\n// Compare with selftrigger_clk1\n\nlogic clk;\ninitial #10 clk = 0;\nalways @(clk) #10 clk <= ~clk;\n\ninitial $monitor(\"time = %d, clk = %b\", $time, clk);\n\nendmodule\n"),("cont/cont_delay1.sv","module cont_delay1;\n\n// Variables and nets have very little in common.\n// E.g., the evaluation models of delays are \n// completely different.\n\n// One simple difference is that nets can have\n// delays declared both at declaration (net delay)\n// and at assignments (continuous assignment delays).\n\n// E.g., below b will not update until time 2 since\n// both the net and the assignments are delayed.\n\n// In our reading of the standard, the net delay is\n// simply added to add continuous assignment delays.\n\n// (I am very interested in problems with this reading\n// of the standard. It is not clear that this is the\n// intended meaning.)\n\n// When stepping through VV, note that the update to\n// net a \"cancels\" the update to the b net.\n// See cont_delay2.sv for more.\n\nwire a;\nwire #1 b;\n\nassign a = 1;\n\nassign #1 b = a;\n\nendmodule\n"),("cont/cont_tri_nested2.sv","module cont_tri_nested2;\n   \n// Just another test for the parser\n\nwire a, b, c, d, e, f;\n\n// Another example,\n// from https://stackoverflow.com/questions/23091314,\n// it parses to what the indentation suggests:\nassign a = (b)    ? 1\n         : (c&d)  ? 0\n         : (e&f)  ? 1\n                  : 0;\n\n// This is the same:\nassign a = b      ? 1\n         : c&d    ? 0\n         : e&f    ? 1\n                  : 0;\n\nendmodule\n"),("cont/cont_tri.sv","module cont_tri;\n\n// Simple example of tristate logic   \n\nwire a;\nlogic cond;\n\nassign a = ~cond ? 1'bz : 1;\nassign a = cond ? 1'bz : 0;\n\ninitial begin\n #2 cond = 0;\n #2 cond = 1;\nend\n\nendmodule\n"),("cont/nonblocking_cont.sv","module nonblocking_cont;\n\n// Simple example of interaction between nonblocking\n// assignments and continuous assignments\n\nlogic a;\n\nwire b;\n\nassign b = a;\n\ninitial begin\n a <= 1'b0;\n a <= 1'b1;\nend\n\nendmodule\n"),("cont/cont_tri_nested1.sv","module cont_tri_nested1;\n   \n// Just a test for the parser\n\nwire c1, c2, t1, t2, e1, e2, test1, test2;\n\n// Should parse to \"c1 ? t1 : (c2 ? t2 : e2)\"\nassign test1 = c1 ? t1 : c2 ? t2 : e2;\n\n// Should parse to \"c1 ? (c2 ? t1 : e1) : e2\"\nassign test2 = c1 ? c2 ? t1 : e1 : e2;\n\nendmodule\n   \n"),("cont/cont_cycle.sv","module cont_cycle;\n\nwire a;\n\n// Suspicious cycle, results in \"a\" being x, which is\n// a little funny since wires otherwise has z as\n// initial value (when not driven). Requires a special\n// case in the semantics to check if there are any\n// drivers or not.\n\nassign a = a;\n  \ninitial $monitor(\"a = %b for time %d\", a, $time);\n\nendmodule\n"),("cont/cont_assn_init_delay.sv","module cont_assn_init_delay;\n\n// Test for what to do before first update\n// to delayed net\n\n// Simulators seem to say the following for this one:\n// \n// time = 0, w = x\n// time = 5, w = 1\n  \nwire w;\n  \nassign #5 w = 1;\n  \ninitial $monitor(\"time = %d, w = %b\", $time, w);\n\nendmodule\n"),("cont/cont_delay2.sv","module cont_delay2;\n\n// Another interesting difference between variables\n// and nets are that updates to nets can \"cancel\"\n// previously scheduled net update events.\n\n// In VHDL terminology, this difference is explained\n// using the terms \"inertial delay\" and \"transport\n// delay\".\n\n// In the below, notice how b never becomes 0 since\n// the update is cancelled before it takes place.\n\nlogic a;\nwire b;\n\nassign #5 b = a;\n\ninitial begin\n #1 a = 0;\n #3 a = 1;\nend\n\nendmodule\n"),("init1.sv","module init1;\n\n// Initialisation of variables is a little trick in\n// Verilog because of its history. That is, different\n// versions of Verilog handle initialisation of\n// variables differently.\n\n// In SystemVerilog, initialisation happens before\n// any events and does itself not cause any events\n// to happen.\n\n// So, e.g. the following will always print 0:\n\nlogic a = 0;\n\ninitial $display(\"a = %b\", a);\n   \n// In Verilog before SystemVerilog, the above \n// had the following semantics\n// (with \"a\" renamed to \"b\"):\n\nlogic b;\n   \ninitial b = 0;\n\ninitial $display(\"b = %b\", b);\n\n// Which can print either x or 0, because the order\n// of the initial processes is nondeterministic.\n\nendmodule\n")]
)
