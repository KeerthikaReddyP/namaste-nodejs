require("./xyz.js");




const util=require('node:util');
console.log(util);


// const {calculateSum}=require("./calculate/sum.js");
// const {calculateMultiply}=require("./calculate/multiply.js");

const {calculateSum,calculateMultiply}=require("./calculate");

const data=require("./data.json");
console.log(data);

console.log(globalThis===global);

var a=10;
var b=20;
calculateSum(a,b);
calculateMultiply(a,b);