// Promise
// const myPromise=new Promise(function (resolve, reject){
//     setTimeout(function(){
//         console.log("Async Task is Completed.")
//         // Resolve is called and connected to the 'then' below 
//         resolve()
//     }, 1000)
// });
// Resolve and Reject were not used
// Promise was created but never consumed
// Resolve is connected to the then function below by calling the Resolve method above. 
//  myPromise.then(function(){
//     console.log("Promise Consumed")
//  })

//  Example 2

// const myPromise3=new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Hello from Promise 3");
//          resolve({username:"Atharv", email:"atharv444joshi@gmail.com"})
//     }, 2000)
// });

// myPromise3.then(function(user){
//     console.log(user);
// })

// const promise4=new Promise(function(resolve, reject){
//     setTimeout(function(){
//     let error=true;
//     if(!error){
//         resolve({username: "Atharv Joshi", password: "123345"})
//     }
//     else{
//         reject('ERROR: Something went wrong')
//     }
//     },2000)
// });
// HOw to escape from the callback hell in promise
// promise4.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("Promose is finally resolved or rejected")
// })

// const promise5=new Promise((resolve, reject)=>{
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve({username: "Javascript", password:"123"});
//         }
//         else{
//             reject('ERROR: JS went wrong')
//         }
//     }, 2000)
// })
// promise5.then
// Async is like .then.catch, it waits for the task to be completed, otherwise an error
// Promise is an eventual complettion Object so I cannot wtite as await Promise5();
// We have used await before the Promise5 to show whether it is resolved or not we will wait
// Async Await does not handle errors properly so we need to use an try/catch block
// async function consumedPromiseFive(){
//     try {
//         const response=await promise5
//     console.log(response)
// } catch (error) {
//         console.log(error)
//     }
// }
// consumedPromiseFive();

// async function getAllUsers(){
//     try {
//     const response=await fetch("https://dogapi.dog/api/v2/breeds/1")
//     const data=await response.json();
//     console.log(data)
//     } catch (error) {
//         console.log("Error in Getting Users", error)
//     }
// }

// getAllUsers();

async function getAllUsers() {
    try {
        const response = await fetch("https://dogapi.dog/api/v2/breeds/1");

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log("Error in Getting Users:", error);
    }
}

// getAllUsers();

fetch("https://api.github.com/users/joshiatharv1")
.then((response)=>{
    if(!response.ok){
        throw new Error("Request Failed")
    }
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})