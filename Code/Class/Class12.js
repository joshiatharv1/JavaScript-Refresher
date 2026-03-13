// const User={
//     useraname: "Atharv",
//     DOB: "15 August 2001",
//     password:"100293",
//     getUserDetails: function(){
//         console.log(`User with name is ${this.useraname} Having birthday on the ${this.DOB}`);
//         console.log(this)
//     }
// }
// User["Car"]="WagonR"
// User.getUserDetails()
// Global Context -- {} 
// console.log(this)

// New Key Word
// New Keyword is contructor functions
// It createes an entirely new context, different from the Global context. 
// Whenever new keyword is ued then an empty object is created.
// --------------------Importtant --------------------------
// How does the New Objet het Created  
// 1. New object created
// 2. Cinstructor function is called 
// 3. This keyword will inject allteh variables and mehthods
// ----------------------------------------------------------
// Constructor 
const myDate=new Date();
// const myPromise=new Promise();

function User(username, loginCount, isLoggedIn){
    this.username=username;
    this.loginCount= loginCount;
    this.isLoggedIn=isLoggedIn;
    // The return happens implicitly but the Computer. 
    return this;
}

// const userOne=User("Atharv", 10, false);
// const userTwo=User("Arpit", 12, true)
// Here the values in userOne are overridden by UserTwo 
// console.log(userOne)

const userOne=new User("Atharv", 10, false);
const userTwo=new User("Arpit", 12, true)
// .constructor is Function User
// instance of 
console.log(userOne.constructor)
console.log(userTwo instanceof User)