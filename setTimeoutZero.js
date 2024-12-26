var a=3879;
var b=8765586;

console.log("Hellooo");

setTimeout(()=>{
    console.log("Call me after 3 secs");
},3000);

function multiplyFn(x,y){
    const result=x*y;
    return result;
}

var c=multiplyFn(a,b);
console.log(c);