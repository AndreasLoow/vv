_The tool in this directory is no longer maintained but probably still runs. The old readme file is included below._

This directory contains a node.js-based runner for the [sv-tests test suite](https://github.com/chipsalliance/sv-tests).

To execute the runner, you need a local copy of ohm (for parsing):

```
npm install ohm-js
```

Now, copy the file `../src/parser.mjs` to this directory, modify the paths for the imports, and add the following import:

```
import * as ohm from 'ohm-js';
```

Create the following shell script with the filename `vv-parse` somewhere in your `$PATH`:

```
#!/usr/bin/env bash

node "$HOME"/path/to/the/script/sv-tests-runner.js "$@"
```

Lastly, copy `vv.py` to the `tools/runners` directory in your local copy of `sv-tests`.

You can now run the test suite (e.g., `RUNNERS_FILTER=vv make -j9`).

The result of doing all of the above using a now outdated version of VV is available at [https://andreasloow.github.io/vv/sv-tests](https://andreasloow.github.io/vv/sv-tests).
