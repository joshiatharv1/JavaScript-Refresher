class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`Username: ${this.username}`)
    }
    static createId(){
        return `NewID123`
    }
}
class Student extends User{
    constructor(username, iDCard){
        super(username)
        this.iDCard=iDCard;
    }
    myIdNumberis(){
        return `Id card id ${this.iDCard}`
    }
}

const myStudent1=new Student("Atharv@123", "435385349557-0572")
console.log(myStudent1);
// console.log(myStudent1.createId())
console.log(User.createId())
// -----------------------------------------------------------------
// Why cant the value Of Pi change?
// Math.PI=5 is not possible. 
const descriptor=Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor)

const chai={
    name:"Ginger Chai",
    price:500,
    isAvailable:true
}
const descriptorChai=Object.getOwnPropertyDescriptor(chai, "name");
console.log(descriptorChai)
// {
//   value: 'Ginger Chai',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
 
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for(let [key, value] of Object.entries(chai)){
    if(typeof value != 'function'){
        console.log(`${key} and ${value}`)
    }
}

// Name will not apply on enumerable and not visible.