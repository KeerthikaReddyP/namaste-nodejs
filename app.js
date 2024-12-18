require("./xyz.js");

const {x,calculateSum}=require("./sum.js");

console.log(globalThis===global);

var a=10;
var b=20;
calculateSum(a,b);

console.log(x);
