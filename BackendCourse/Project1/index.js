const express = require("express");
require('dotenv').config()
// Require Module Syntax
// import express from "express"
const app=express();
// DotENV Package

const port=process.env.PORT || 7000

app.get('/', (request,response)=>{
    response.send('Hello World');
})
// Hot Reloading 
// Initially the Page would not relaod with the new Page, you have to restart the server manually 
app.get('/login', (req,res)=>{
    res.send('<h1>Hi Welcome to the Login Page</h1>')
})

app.get('/user', (req, res)=>{
    res.json({name: "Atharv Joshi", 
        age :23, 
        email:"atharv444joshi@gmail.com"
    })
})

app.listen(port, ()=>{
    console.log(`Example App listening on Port ${port}`);
})