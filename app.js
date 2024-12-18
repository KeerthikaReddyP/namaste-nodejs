require("./xyz.js");

const {calculateSum}=require("./calculate/sum.js");

console.log(globalThis===global);

var a=10;
var b=20;
calculateSum(a,b);
