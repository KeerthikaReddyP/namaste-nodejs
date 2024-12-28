process.env.UV_THREADPOOL_SIZE = 8;
// If this wont work, 
// Use $env:UV_THREADPOOL_SIZE=8; node thread-pool.js in the terminal while executing.

const crypto = require("node:crypto");

const start=Date.now();

function logWithTime(id){
    console.log(`${id} DONE at ${Date.now()-start}ms`);
}

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  logWithTime(1);
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
    logWithTime(2);
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
    logWithTime(3);
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
    logWithTime(4);
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
    logWithTime(5);
});

// They take same time to complete and printed at the same time.
// Now, these 4 calls also same time and printed at the same time.
// Because thread pool has 4 thread by default, and each call is attached to each thread.

// Adding one more crypto call, 5th one takes even more time while the other 4 takes same time and printed at the same time.
// Bcz, all 4 threads were occupied.
// And 5th one has to wait for one of the threads to be empty, so it getsthe chance to execute.
