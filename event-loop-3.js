const fs=require("node:fs");

setImmediate(()=>console.log("setImmediate"));
setTimeout(()=>console.log("Timer expired"),0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt","utf8",()=>{
    setTimeout(()=>console.log("2nd Timer"),0);
    process.nextTick(()=>console.log("2nd nextTick"));
    setImmediate(()=>console.log("2nd setImmediate"));
    console.log("File reading cb");
});

process.nextTick(()=>console.log("nextTick"));
console.log("Last line of the file");

//OUTPUT :

// Last line of the file
// nextTick
// Promise
// Timer expired
// setImmediate
// File reading cb
// 2nd nextTick
// 2nd setImmediate
// 2nd Timer