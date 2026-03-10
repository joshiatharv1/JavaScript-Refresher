const jsUser={
    name:"Atharv Joshi",
    isLoggedIn: false,
    age: 23,
    lastLoginDays:["Mon", "Tue", "Wed"],
    location: "Boston",
}

console.log(jsUser.location);
console.log(jsUser["name"]);

jsUser.value= function daysPresent(){
    console.log(`Employee named ${this.name} has worked for days --> ${this.lastLoginDays}`)
}

console.log(jsUser.value());

// Non - Singleton Object
//const tinderUser={}

// Single Object. 
const tinderUser=new Object();
tinderUser.id="47hferht84"
tinderUser.name="Atharv Joshi"
tinderUser.isLoggedIn=false

 const regularName={
    userId: "4894ht43h9",
    name:{
        userfullname:{
            firstName:"Atharv",
            lastName: "Joshi"
        }
    }
 }

 const obj1={
    1: 'a',
    2: 'b'
 }
  const obj2={
    3: 'c',
    4: 'd'
 }

 //const obj3=Object.assign(obj1, obj2);
const obj3={...obj1, ...obj2}
// console.log(obj3)

 // Important methods around Objects: 
//  1. Object.keys()
//  2. Object.values()
//  3. Object.entries()
//  4. Object.hasOwnProperty("Name of Key")


function isLoggedIn(username="Atharv Default User"){
    console.log("I have started Login Process");
    return `${username} has Logged in `
}

console.log(isLoggedIn())

{
    let a=40;
    const b=50; 
    var c=60;
}