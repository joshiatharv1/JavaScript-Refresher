// CONTROL FLOW. 
// Trythy Values: "0", 'false', [], {}, function(){}
// Falsy Values: 0, false, -0, BigInt On, "", null, undefined, NaN

// const userEmailList=[];
// if(userEmailList.length===0){
//     console.log("Array is Empty");
// }
// else{
//     console.log("Not Empty")
// }

// const userOj={}
// if(Object.keys(userOj)){
//     console.log("Enmpty Object")
// }
// else{
//     console.log("Not Empyty Ojbect")
// }

// ----- Nullish Coalescing Operator (??) : null undefined. 
// let val;
// val1=5??10
// val1=null ?? 10
// val1= undefined ?? 15
// ?? Operator is ued to return the first truthy value from an suspected null or   undefined value. Exmpale when connecting to DB we can sometimes return undefined from a remote connection. 
// val1= null ?? 10 ?? 5

// Switch/ Terenary Operator. 

// ------------------- LOOPS -------------------------

const myHero=["SuperMan", "IronMan" , "Hulk", "CaptainAmerica"];

// for(let Atharv=0; Atharv<=myHero.length; Atharv++){
//     console.log(`At the Atharv ${Atharv} the name is ${myHero[Atharv]} `)
// }

// For loop has initalisation, Condition and Increment/Decrement 

// Do-While and While Loop
// All the loops requrire above 3 states. 
// Do While does the statemtn once first then runs the rest based on conditino and incremant. 
// For Each Loop

// -------------------- MAPS ----------------------------
// Maps are collections of Key value pair with only unique values. 
// If entered unique value then it would NOT RETURN ERROR just not enter it. 

const myMap=new Map();
myMap.set(1, "India");
myMap.set(2, "America");
myMap.set(3, "China");
myMap.set(4, "United Kingdom");
myMap.set(5, "Indonesia")

// console.log(myMap)

// for(const[key,value] of myMap){
//     console.log(`The country at Positon ${key} is ${value}`)
// }

// For in Loop 

const studentScore={
    "Atharv": 2500,
    "Ram": 1000,
    "Laksham": 500,
    "Sudipto": 800
}
// for(const key in studentScore){
//     console.log(`Student Named ${key} has scored ${studentScore[key]}`)
// }

// For In loop would work with Arrays also. But the Keys would return the Index

const colors=["Orange", "Green", "Blue", "Yellow", "Black"]
colors.forEach((color, index)=>{
    console.log(color.toUpperCase(), index);
})

