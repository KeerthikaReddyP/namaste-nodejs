const crypto=require("node:crypto");

var a=1003;
var b=32;

// Synchronous (It don't take any callback)
crypto.pbkdf2Sync("password","salt",5000000,50,"sha512");
console.log("Key is generated synchronously by blocking the main thread");

// Password Based Key Derivation Function
// pbdkf2(password, salt, no. of iterations to encrypt, length of the key, sha512, callback function)
// Async
crypto.pbkdf2("password","salt",500000,50,"sha512",(err,key)=>{
    console.log("Key is generated asynchronously");
});

function multiplyFn(x,y){
    const result=x*y;
    return result;
}

var c=multiplyFn(a,b);
console.log(c);