const fs=require("node:fs");
const https=require("node:https");

console.log("Hello world");

var a=1029232;
var b=2342;

https.get("https://dummyjson.com/products/1",(res)=>{
    console.log("Data fetched successfully");
});

setTimeout(()=>{
    console.log("Timeout for 5 secs");
},5000);

fs.readFile("./file.txt","utf8", (err,data)=>{
    console.log("File data ", data);
});

function multiplyFn(x,y){
    const result=x*y;
    return result;
}

var c=multiplyFn(a,b);
console.log(c);