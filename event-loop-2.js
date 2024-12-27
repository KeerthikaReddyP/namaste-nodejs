const fs=require("node:fs");

var a=100;

setImmediate(()=>console.log("setImmediate"));

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt","utf8", ()=>{
    console.log("File read cb");
})

setTimeout(()=>{
    console.log("Timer");
},0);

process.nextTick(()=>console.log("process.nextTick"));

function printA(){
    console.log("a= ",a);
}
printA();

console.log("Last line of the file");

// OUTPUT :

// a=100
// Last line of the file
// process.nextTick
// Promise
// Timer expired
// Immediate
// File reading cb