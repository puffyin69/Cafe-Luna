import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    crendentials:{
        type:String,
        required:true,
        default:"crendentials"
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        required:true
    }
})
export const User = mongoose.models.User || mongoose.model("User",userSchema);