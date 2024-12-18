// require("./xyz.js");

// const {x,calculateSum}=require("./sum");
import { calculateSum } from "./sum.js";

console.log(globalThis===global);

var a=10;
var b=20;
calculateSum(a,b);

console.log(x);

// It will work fine without .js extension too.
// If we don't use any extension, it'll be considered .js extension.