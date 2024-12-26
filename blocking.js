const crypto=require("node:crypto");

var a=1003;
var b=32;

// Password Based Key Derivation Function
// pbdkf2(password, salt, no. of iterations to encrypt, length of the key, sha512, callback function)
// Async
crypto.pbkdf2("password","salt",500000,50,"sha512",(err,key)=>{
    console.log("Key is generated");
});

function multiplyFn(x,y){
    const result=x*y;
    return result;
}

var c=multiplyFn(a,b);
console.log(c);