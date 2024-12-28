const crypto=require("node:crypto");

crypto.pbkdf2("password","salt", 500000,50,"sha512",(err,key)=>{
    console.log("1-crypto pbkdf2 DONE");
});

crypto.pbkdf2("password","salt", 500000,50,"sha512",(err,key)=>{
    console.log("2-crypto pbkdf2 DONE");
});

// They take same time to complete and printed at the same time.