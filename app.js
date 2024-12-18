require("./xyz.js");
console.log(globalThis===global);

// How do we executre xyz.js also?
// node app.js command --> entry point is app.js file

// We should include xyz.js file in app.js file
// using require function
// It takes a path

// require function includes one module inside another module
// app.js is one module and xyz.js is another module