require("./xyz.js");

// const {calculateSum}=require("./calculate/sum.js");
// const {calculateMultiply}=require("./calculate/multiply.js");

const {calculateSum,calculateMultiply}=require("./calculate");

console.log(globalThis===global);

var a=10;
var b=20;
calculateSum(a,b);
calculateMultiply(a,b);