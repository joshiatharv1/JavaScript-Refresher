// There are two ways to see function level Scope and Errors we Get
// Scope is seen from the Parent components architecture. 
// Website is undefineed and throws same error.
// Using a variable to store function can cause error as it causes the error below
// IMportant Concept of HOISTING
function one(){
    console.log("Inside One")
    let username="Atharv Joshi"
    function two(){
        console.log("Name is ", username);
        let website="Google";
        console.log(`Name is ${username} and wesbsite is ${website}`) 
    }
    console.log(website);
    two()
}

//one()

// four(4)
function four(Quantity){
console.log(`Buy ${Quantity} Apples from store.`)
}
// three(3) -- Cannot access 'three' before initialization 
const three=function(variable){
    console.log(`Buy ${variable} Apples from store.`)
}
// three(3)

function chai(){
    console.log(this)
}
// chai()
// ----------------------------------------------------------------------------
// IIFE
const counter = (function () {
  let value = 0;
  return {
    increment() { value++; },
    get() { return value; }
  };
})();

counter.increment();
let x = counter.get();
// console.log(x)

(function dbConnect(){
    console.log(`DB Connected`)
})();
// Semi Colon is Important as it stops the execution path for first IIFE
(()=>{
    console.log("DB Coneccted from Arrow")
})()


let va1=10
let val2=5
function addNum(num1, num2){
    let total=num1+num2;
    return total;
}

let result1=addNum(va1, val2)
let result2=addNum(5,2)