// function setUsername(username){
//     this.username=username;
//     console.log("Called")
// }

function createUser(username, email, password){
    setUsername.call(this, username);
    this.email=email;
    this.password=password;
}

// const chai=new createUser("Atharv", "atharv444joshi@gmail.com", "123");
// console.log(chai)
// Atharv as the username is never shown on Console. 
// Basically we gave the work to do this line this.username=usernmae to the function setUserName
// So, setUsername(username) is never called only referenced. 
// SetUsername is called and username is sent to the setUsername. Once completed the exceution is completed and removed from the stack. 
// So to hold the referene to the setUsername we use the call method. 
// Call passes the current exceution context to another function.
// We pass the this keyword with the call method so 
// Before you complete you execution and get removed from call stack use the "this" that I (createUser -- calling setUser) am giving 
// and update this for the createUser function context not the "this" for the setUsername function.                        

// ES6
// class User{
//     //Properties and Function
//     // Whenver new object is created using the New Keyword the constructor is initilased. 
//     constructor(username, email, password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }
//     encryptPassword() {
//         return `${this.password}abc`;
//     }
// }
// const obj1=new User("Atharv", "atharv444joshi@gmail.com", "Password123");
// console.log(obj1.encryptPassword())

// Behind the Scene

// function User(username, email, password){
//     this.username=username
//     this.email=email
//     this.password=password
// }

// User.prototype.encryptPassword=function(){
//     return `${this.password}efg`;
// }

// const tea=new User("Shreya", "Shreya@example.com" ,"ShreyaPass233");
// console.log(tea.encryptPassword());


class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        return `User with Username: ${this.username} is Logged `;
    }
}
class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email=email
        this.password=password
    }
    addCourse(){
        return `A new course is added by teacher named:- ${this.username}`
    }
}


let user1=new Teacher("User1", "Yeacher1@example.com", "User1Pass");
console.log(user1.logMe());
console.log(user1 instanceof User)