const fs = require("node:fs");

var a = 100;

setImmediate(() => console.log("setImmediate"));

fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("file reading done");
});

setTimeout(() => {
  console.log("Timer");
}, 0);

function printA(a){
    console.log("a=",a);
}
printA(a);
console.log("End of the file");

// Output :

// a=100
// End of the file
// Timer
// setImmediate
// file reading done (Althought poll phase comes before check phase, this fs happened in next cycle, so, it will print later)