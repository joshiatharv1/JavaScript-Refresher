document.getElementById('title')
<h1 id=​"title" class=​"heading">​DOM LEARNING​</h1>​
document.getElementById('title').id
'title'
document.getElementById('title').class
undefined
document.getElementById('title').className
'heading'
document.getElementById('title').getAttribute
ƒ getAttribute() { [native code] }
document.getElementById('title').getAttribute('title')
null
document.getElementById('title').getAttribute('id')
'title'
document.getElementById('title').getAttribute('class')
'heading'
document.getElementById('title').setAttibute('class','test')
VM450:1 Uncaught TypeError: document.getElementById(...).setAttibute is not a function
    at <anonymous>:1:34
(anonymous) @ VM450:1
[NEW] Explain Console errors by using Copilot in Edge: click
         
         to explain an error. 
        Learn more
        Don't show again
document.getElementById('title').setAttribute('class','test')
undefined
document.getElementById('title').setAttribute('class',' heading test')
undefined
const title=document.getElementById('title')
undefined
title
<h1 id=​"title" class=​" heading test">​DOM LEARNING​</h1>​
title.style.backgroundColor('green')
VM909:1 Uncaught TypeError: title.style.backgroundColor is not a function
    at <anonymous>:1:13
(anonymous) @ VM909:1
title.style.backgroundColor='green'
'green'
title.style.paddinh='15px'
'15px'
// ----------------------------------- Lists in HTML----------------
// ----------- QuerySelector In DOM----------------
const myUl=document.querySelector('#ul')
undefined
my
VM1723:1 Uncaught ReferenceError: my is not defined
    at <anonymous>:1:1
(anonymous) @ VM1723:1
[NEW] Explain Console errors by using Copilot in Edge: click
         
         to explain an error. 
        Learn more
        Don't show again
const myUl=document.querySelector('ul')
undefined
myUl
<ul>​…​</ul>​
const myList=myUl.querySelectorAll('li')
undefined
myList
NodeList(3) [li, li, li]
typeof myList
'object'
myList.forEach((item)=>{return item.style.backgroundColor='green'})
undefined