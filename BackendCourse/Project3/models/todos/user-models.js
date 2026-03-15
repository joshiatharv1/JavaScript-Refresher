import mongoose from "mongoose"

// MongoDb will make a new schema based on teh Object given in the Schema Function. 
const userSchema=new mongoose.Schema({
    username:{
        type:String, 
        required: true, 
        unique: true, 
        lowerCase: true
    },
    email:{
        type: String, 
        required: true, 
        unique: true, 
        lowerCase: true, 
    }, 
    password:{
        type: String, 
        required: true
    } 
    // username: String, 
    // email: String,
    // isActive: String
},
{timestamps: true}
);

// Create a model that takes 2 parameters What model (User)to make and make it on what basis (userSchema). 
// In MOngoDB the Model name is converted from User --> users (Standard Practice of MongoDB)
export const User=mongoose.model("User", userSchema);
