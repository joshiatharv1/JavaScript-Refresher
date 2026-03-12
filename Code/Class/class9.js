// Async Programming
// setInterval(), setTimeout();
//API Requests. 
// Ajax Programming and use of how it evolved. readyState in Ajax. 
// XMLHttpRequest. 
const requestUrl="https://api.github.com/users/joshiatharv1"
const xhr=new XMLHttpRequest();
xhr.open('GET', requestUrl) // Value: 1	State: OPENED	Description: open() has been called.
// onreadystatechange Continuously keeps a track of chaging state. 
xhr.onreadystatechange=function(){
    // Track the States change from 0-1-2-3-4
    console.log(xhr.readyState);
    if(xhr.readyState===4){
        // By default the data that comes as respnse is in String
        const data=JSON.parse(this.responseText);
        console.log(typeof data);
        console.log(data.followers)
    }
}
xhr.send()