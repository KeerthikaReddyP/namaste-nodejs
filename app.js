require("./xyz.js");

const obj=require("./sum.js");

console.log(globalThis===global);

var a=10;
var b=20;
obj.calculateSum(a,b);

console.log(obj.x);
