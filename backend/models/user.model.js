import mongoose from "mongoose"
import jwt from "jsonwebtoken"
const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:[true,"Email is required"],
    unique:[true,"This email already registered"]
  },
  password:{
    type:String,
    required:true
  },
  cartData :{
    type:Object,
    default:{}
  },
  refreshToken:{
    type: String
  }
},{minimize:false})

userSchema.methods.generateRefreshToken = async (User)=>{
    return jwt.sign(
      {
        _id : User._id,
       name : User.name,
       email: User.email
      },
      process.env.JWT_secret,
      {
        expiresIn :"6h"
      }
    )
}
export  const userModel =  mongoose.model("User",userSchema)