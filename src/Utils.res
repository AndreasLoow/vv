let joinNonEmpty = (join, ss) =>
 ss |> Js.Array.filter((s) => s != "") |> Js.Array.joinWith(join)

let reduce0 = (f, xs) => {
 let xs = Js.Array.copy(xs)
 let hd = Js.Array.shift(xs)
 Js.Array.reduce(f, Js.Option.getExn(hd), xs)
}

// insert y between all elements of x, generalization of joinWith
let intersperse = (y, xs) => {
 let last = Js.Array.length(xs) - 1
 Js.Array.concatMany(Js.Array.mapi((x, i) => i == last ? [x] : [x, y], xs), [])
}

// Some JS mk_ functions/interop...

let mk_Some = (x) => Some(x)
let mk_None = None
