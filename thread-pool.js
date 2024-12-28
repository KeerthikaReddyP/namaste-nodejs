const crypto=require("node:crypto");

crypto.pbkdf2("password","salt", 500000,50,"sha512",(err,key)=>{
    console.log("1-crypto pbkdf2 DONE");
});

crypto.pbkdf2("password","salt", 500000,50,"sha512",(err,key)=>{
    console.log("2-crypto pbkdf2 DONE");
});

crypto.pbkdf2("password","salt", 500000,50,"sha512",(err,key)=>{
    console.log("3-crypto pbkdf2 DONE");
});

crypto.pbkdf2("password","salt", 500000,50,"sha512",(err,key)=>{
    console.log("4-crypto pbkdf2 DONE");
});

crypto.pbkdf2("password","salt", 500000,50,"sha512",(err,key)=>{
    console.log("5-crypto pbkdf2 DONE");
});

// They take same time to complete and printed at the same time.
// Now, these 4 calls also same time and printed at the same time.
// Because thread pool has 4 thread by default, and each call is attached to each thread.

// Adding one more crypto call, 5th one takes even more time while the other 4 takes same time and printed at the same time.
// Bcz, all 4 threads were occupied.
// And 5th one has to wait for one of the threads to be empty, so it getsthe chance to execute.