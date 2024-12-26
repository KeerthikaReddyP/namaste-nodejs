var a=3879;
var b=8765586;

console.log("Hellooo");

// It wot be called immediately.
// It will be called as soon as the call stack is empty.(Definitely after more than 0 sec)
setTimeout(()=>{
    console.log("Call me RIGHT NOW!!!");
},0);


setTimeout(()=>{
    console.log("Call me after 3 secs");
},3000);

function multiplyFn(x,y){
    const result=x*y;
    return result;
}

var c=multiplyFn(a,b);
console.log(c);