import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"],
    },
    profile:{
        type:String,
        default:"",
    }
},{timestamps:true});

const User=mongoose.model("User",userSchema);
export default User;