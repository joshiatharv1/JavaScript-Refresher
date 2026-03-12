// Use case 1 - To check for a property value. 
const userDetails: any={
    name:"Atharv Joshi",
    age: 25,
    isLogged:true,
    address: "Pleasant St. Boston MA",
    country: "India"
}
console.log("name" in userDetails);
console.log("State" in userDetails);
// Use case 2 - In Object to print properties
for(let key in userDetails){
    console.log(key+userDetails[key]);
}
// Use case 3 - In Arrays
let colors=["green", "red", "Blue"]
for(let mycolor in colors){
    console.log(colors[mycolor]);
}

