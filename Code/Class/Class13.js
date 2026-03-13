function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power=5;
// console.log(multiplyBy5(10));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);
// multiplyBy5.prototype returns some properties and some functions as well. 
// multiplyBy5.prototype returns an empty object but has the CONTEXT as well. IMPORTANT 
// Function is an normal function and also an OBJECT 

// This sets the current context
function createUser(username, score){
    this.username=username;
    this.score=score;
}

// createUser.prototype.increment =function() {
//     score++;
// }
// createUser.prototype.printMe=function(){
//     console.log(`Score is ${this.score}`)
// }
// Increment has been injected. Increment is an function that is ijected as an function
// Array is an  object that has methods slike slice injected simialirly
// const chai=createUser("chai", 20);
const chai=new createUser("chai", 20);
const latter=new createUser("latte", 500);

// Create an Functinality as an Object called trueLength that removes the white blanks from an aarray and returns that String/Arrray Back 
let myHeros=["thor", "Spiderman"]
let heroPower={
    thor:"Hammer",
    spider: "sling",
    getSpiderPower:function(){
        console.log(`Spidy Power is ${this.spiderman}`)
    }
}

// Object.prototype.hitesh=function(){
//     console.log("Hitesh is presesnt everywhere now");
// }
// heroPower.hitesh();
// myHeros.hitesh();

// I have accesse the eop level property and added this power to Arrays and Strings as well. 
Array.prototype.heyHitesh=function(){
    console.log("Hey from the HeyHitesh Function.")
}

// heroPower.heyHitesh()
// myHeros.heyHitesh()

// --------- INHERITANCE ------------
const User={
    name: "Atharv",
    email: "chai@google.com"
}
const Teacher ={
    makeVideo: true 
}
const teachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: teachingSupport
}
// Object Linking in certain situation.
// Prototypical Inheritance. 

// Teaching support will have access to Teacher now
Object.setPrototypeOf(teachingSupport,Teacher)


let anotherUserName="Shreya             "
String.prototype.trueLength=function(){
    console.log(`${this}`)
    console.log(`Name is ${this.name}`)
    console.log(`True Length is: ${this.trim().length}`)
}

anotherUserName.trueLength()