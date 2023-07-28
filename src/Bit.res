type bit = BitTrue | BitFalse | BitX | BitZ

// JS API
let mk_BitTrue = BitTrue
let mk_BitFalse = BitFalse
let mk_BitX = BitX
let mk_BitZ = BitZ

let pp_bit = (b) =>
 switch b {
 | BitTrue => "1"
 | BitFalse => "0"
 | BitX => "x"
 | BitZ => "z"
 }

let bit_is_true = (b) =>
 switch b {
 | BitTrue => true
 | _ => false
}

let bit_is_false = (b) =>
 switch b {
 | BitFalse => true
 | _ => false
}

// REF: Table 6-2—Truth table for wire and tri nets
let res_wire = (v1, v2) =>
 if (v1 == v2) {
  v1
 } else if (v1 == BitZ) {
  v2
 } else if (v2 == BitZ) {
  v1
 } else {
  BitX
 }

/*
Table implementation of res_wire:

switch (v1, v2) {
 | (BitZ, v) => v
 | (v, BitZ) => v

 | (BitX, _) => BitX
 | (_, BitX) => BitX

 | (BitFalse, BitFalse) => BitFalse
 | (BitFalse, BitTrue) => BitX
 | (BitTrue, BitFalse) => BitX
 | (BitTrue, BitTrue) => BitTrue
 }
*/

// REF: Table 6-3—Truth table for wand and triand nets
let res_and = (v1, v2) =>
 switch (v1, v2) {
 | (BitFalse, _) => BitFalse

 | (BitTrue, BitZ) => BitTrue
 | (BitTrue, v) => v

 | (BitX, BitFalse) => BitFalse
 | (BitX, _) => BitX

 | (BitZ, v) => v
 }

// REF: Table 6-4—Truth table for wor and trior nets
let res_or = (v1, v2) =>
 switch (v1, v2) {
 | (BitFalse, BitZ) => BitFalse
 | (BitFalse, v) => v

 | (BitTrue, _) => BitTrue

 | (BitX, BitTrue) => BitTrue
 | (BitX, _) => BitX

 | (BitZ, v) => v
 }

// NOTE: Assume same as bitwise analogue and similar for below
// REF: Table 11-15—Bitwise unary negation operator
let bit_not = (v) =>
 switch v {
 | BitFalse => BitTrue
 | BitTrue => BitFalse
 | BitX => BitX
 | BitZ => BitX
}

// REF: Table 11-11—Bitwise binary AND operator
let bit_and = (v1, v2) =>
 switch (v1, v2) {
 | (BitFalse, _) => BitFalse
 | (_, BitFalse) => BitFalse

 | (BitTrue, BitTrue) => BitTrue
 | (BitTrue, _) => BitX

 | (BitX, _) => BitX

 | (BitZ, _) => BitX
 }

// REF: Table 11-12—Bitwise binary OR operator
let bit_or = (v1, v2) =>
 switch (v1, v2) {
 | (BitTrue, _) => BitTrue
 | (_, BitTrue) => BitTrue

 | (BitFalse, BitFalse) => BitFalse

 | _ => BitX
 }

// REF: Table 11-13—Bitwise binary exclusive OR operator
let bit_xor = (v1, v2) =>
 switch (v1, v2) {
 | (BitFalse, BitFalse) => BitFalse
 | (BitFalse, BitTrue) => BitTrue
 | (BitTrue, BitFalse) => BitTrue
 | (BitTrue, BitTrue) => BitFalse

 | _ => BitX
 }

// REF: 11.4.3 Arithmetic operators
let bit_add = (v1, v2) =>
 switch (v1, v2) {
 | (BitFalse, BitFalse) => BitFalse
 | (BitFalse, BitTrue) => BitTrue
 | (BitTrue, BitFalse) => BitTrue
 | (BitTrue, BitTrue) => BitFalse

 | _ => BitX
 }

// REF: Table 11-20—Ambiguous condition results for conditional operator
let bit_cond = (v1, v2) =>
 switch (v1, v2) {
 | (BitTrue, BitTrue) => BitTrue
 | (BitFalse, BitFalse) => BitFalse
 | _ => BitX
 }

// REF: 11.4.5 Equality operators
let bit_eq = (v1, v2) =>
 switch (v1, v2) {
 | (BitFalse, BitFalse) => BitTrue
 | (BitFalse, BitTrue) => BitFalse
 | (BitTrue, BitFalse) => BitFalse
 | (BitTrue, BitTrue) => BitTrue

 | _ => BitX
 }

// REF: 11.4.5 Equality operators
let bit_neq = (v1, v2) =>
 switch (v1, v2) {
 | (BitFalse, BitFalse) => BitFalse
 | (BitFalse, BitTrue) => BitTrue
 | (BitTrue, BitFalse) => BitTrue
 | (BitTrue, BitTrue) => BitFalse

 | _ => BitX
 }

// REF: 11.4.5 Equality operators
let bit_case_eq = (v1, v2) => 
 v1 == v2 ? BitTrue : BitFalse

// REF: 11.4.5 Equality operators
let bit_case_neq = (v1, v2) =>
 v1 !== v2 ? BitTrue : BitFalse
