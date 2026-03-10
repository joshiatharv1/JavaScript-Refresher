document.getElementById("idImage4").addEventListener("click", (e)=>{
    console.log(e)
}, false)
// type, timestam, defaultPrevented. 
// target, toElement, srcElement. currrentTarget
// ClientX, ClientY, ScreenX, screenY
// altKey,  ctrlKey, shiftKey, keyCode


document.getElementById("images").addEventListener("click", (e)=>{
    console.log("Clicked inside the Images")
}, false)
document.getElementById("idImage4").addEventListener("click", (e)=>{
    console.log("Cliked the Images 4")
    e.stopPropagation()
}, false)
document.getElementById("idImage5").addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("Cliked the Images 5")
    e.stopPropagation()
}, false)


document.querySelector("#images").addEventListener("click", (e)=>{
    console.log(e.target.tagName);
    if(e.target.tagName==="IMG"){
        console.log(e.target.id);
        let removeIt=e.target.parentNode
        removeIt.remove();
    }
})