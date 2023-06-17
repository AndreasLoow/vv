import fs from "fs";
import { parse } from "./parser.mjs";

// Cannot import the Compiler module because it depends on ReScript
function is_ParseOK(p) {
 return p.TAG == 0;
}

if (process.argv.length != 3)
 throw new Error("Expected one and only one Verilog module filepath as argument");

const path = process.argv[2];
const data = fs.readFileSync(path, "utf8");
const p = parse(data);

if (is_ParseOK(p)) {
 // ... for now, do nothing
} else {
 throw new Error("Parse error: " + JSON.stringify(p));
}
