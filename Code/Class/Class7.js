const myList=[1,2,3,4,5,6,7,8,9,10]
const newNums=myList.filter((i)=>{
    return i>5
})
// console.log(newNums)

const MyList2=[100, 101 ,102, 103, 104, 105, 106, 107, 108, 109, 110]
const updatedMyList2=MyList2.map((num)=>{
    return num=num+10;
})
// console.log(updatedMyList2)

// Chaining 
const myList3=[200, 201 ,202, 203, 204, 205, 206, 207, 208, 209, 210]
const updatedMyList3=myList3.map((num)=>{
    return num+10;
}).map((num)=>{
    return num*10
}).filter((num)=>{
    return num>2150
})

// console.log(updatedMyList3)
// Accuumaltor is an empty variable. 
// Initially initialised with the initialValue passed after comma ","
// Current Value is the currentItem just like the variable num in above num
const myList4=[1,2,3,4,5,6,7,8]
const updatedMyList4=myList4.reduce((accumlator, currentValue)=>{
    return accumlator+currentValue
}, 1)
console.log(updatedMyList4)