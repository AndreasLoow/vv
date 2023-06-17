This directory contains a node.js-based runner for the [sv-tests test suite](https://github.com/chipsalliance/sv-tests)

The runner needs a local copy of ohm (for parsing):

```
npm install ohm-js
```

Now, copy the file `../src/parser.mjs` to this directory and add the following import:

```
import * as ohm from 'ohm-js';
```

Create the following shell script somewhere in your `$PATH`:

```
#!/usr/bin/env bash

node "$HOME"/path/to/the/script/sv-tests-runner.js "$@"
```

Lastly, copy `vv.py` to the `tools/runners` directory in your local copy of `sv-tests`.

You can now run the test suite.
