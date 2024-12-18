require("./xyz.js");
require("./sum.js");
console.log(globalThis===global);

var a=10;
var b=20;
calculateSum(a,b);

// Error : calculateSum is not defined