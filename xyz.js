// function calculateMultiply(a,b){
//     console.log(a*b);
// }

// module.exports={calculateMultiply};

// xyz is also a module.
//It is also wrapped inside a function before executing.

(function (module,require,...) {
    require("./path");
    // require another module inside xyz module
  function calculateMultiply(a, b) {
    console.log(a * b);
  }

  module.exports = { calculateMultiply };
})();
