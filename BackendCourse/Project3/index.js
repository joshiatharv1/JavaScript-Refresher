import express from 'express'
const app=express();
const PORT=5000;
app.get("/home", (req, res)=>{
    res.send('<h1>Hello World</h1>')
})

app.listen(PORT, ()=>{
    console.log("Application is Litening on the PORT: ", PORT)
})