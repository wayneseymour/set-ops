let a = new Set([1,2,3]);
let b = new Set([4,3,2]);
let difference = new Set(
    Array.from(a).filter(x => !b.has(x)));

let intersection = new Set(
    Array.from(a).filter(x => b.has(x)));

console.log(difference);
console.log(intersection);

var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var difference = new Set(Array.from(a).filter(function (x) { return !b.has(x); }));
var intersection = new Set(Array.from(a).filter(function (x) { return b.has(x); }));
console.log(difference);
console.log(intersection);
