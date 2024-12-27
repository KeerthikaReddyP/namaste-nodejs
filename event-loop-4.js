const fs=require("node:fs");

setImmediate(()=>console.log("setImmediate"));

setTimeout(()=>console.log("Timer"),0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt","utf8",()=>{
    console.log("file read cb");
});

process.nextTick(()=>{
    process.nextTick(()=>console.log("Inner nextTick"));
    console.log("nextTick");
});

console.log("Last line of the file");


// OUTPUT :

// Last line of the file
// nextTick
// Inner nextTick
// Promise
// Timer
// setImmediate
// file reading cb