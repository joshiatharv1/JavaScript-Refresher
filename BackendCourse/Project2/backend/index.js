import { configDotenv } from 'dotenv';
import express from 'express'
configDotenv();


const App=express();
const PORT =process.env.PORT || 7000;
App.get('/home', (request, response)=>{
    response.send("<h1>Welcome to Home Page</h1>");
})
App.get('/api/jokes', (req, res)=>{
    const jokes=[
        {
            id:1, 
            name: "Atharv1",
            Address: "Boston"
        },
        {
            id:2, 
            name: "Atharv2",
            Address: "Boston"
        },
        {
            id:3, 
            name: "Atharv3",
            Address: "Boston"
        },
        {
            id:4, 
            name: "Atharv4",
            Address: "Boston"
        },
        {
            id:5, 
            name: "Atharv5",
            Address: "Boston"
        },
    ]
    res.json(jokes)
})
App.listen(PORT,()=>{
    console.log("Backend Services are running at", PORT)
})