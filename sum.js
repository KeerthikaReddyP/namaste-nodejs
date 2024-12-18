console.log("Sum module executed");

var x="Hello world";

module.exports.x=x;

module.exports.calculateSum=function calculateSum(a,b){
    const sum=a+b;

    console.log(sum);
}

// module.exports={x,calculateSum};