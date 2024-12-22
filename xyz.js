// function calculateMultiply(a,b){
//     console.log(a*b);
// }

// module.exports={calculateMultiply};

// xyz is also a module.
//It is also wrapped inside a function before executing.

(function (module,require,...) {
  function calculateMultiply(a, b) {
    console.log(a * b);
  }

  module.exports = { calculateMultiply };
})();
