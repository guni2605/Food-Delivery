import { userModel } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
// Login user
const createToken = async (id)=>{
  const User = await userModel.findById(id)
  const token = await User.generateRefreshToken(User)
  User.refreshToken = token
  
  await User.save({validateBeforeSave : false})
  return token 
}
const loginUser = async (req,res)=>{
   const {password,email} = req.body
   try {
    const user = await  userModel.findOne({email})
    if(!user){
     return  res.json({
        success:false,
        message:"user does n't exist !"
      })
    }
    
        const comp = await  bcrypt.compare(password,user.password);
        if(!comp){
        return   res.json({
            success: false,
            message : "invalid credentials"

          })
        }
      const token = await createToken(user._id);
      const logedInUser = await userModel.findById(user._id)
      
     return res.json({
        success:true,
        message:"User loggedIn successfully",
        "token" : token
      })
   } catch (error) {
   return  res.json({
      success:false,
      message:"Error"
    })
   }
}

// Register User 
const registerUser = async (req,res)=>{
  const {name,email,password} = req.body
  try {
   
    const exists = await userModel.findOne({
     $or :[{email},{name}]
    })
    console.log("check if exist ")
    if(exists){
    return  res.json({
       success:false,
       message:"User already exists"
     })
    }
    console.log("check if validate ")
    if(!validator.isEmail(email)){
    return  res.json({
       success:false,
       message:"Email is not valid"
     })
    }
    if(password.length < 8){
    return  res.json({
       success:false,
       message:"Password should have minimum length of 8"
     })
    }
    console.log("hashing the password")
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password,salt);
    const newUser = await userModel.create({
     name,
     email,
     password:hashedpassword
    })
    const user = await userModel.findById(newUser._id)
    if(!user)
    {
    return   res.json({
        success:false,message:  "Something went wrong"
      })
    }
   const token = await createToken(user._id)
   console.log(token)
   return  res.json({success:true,data :
      {"token" : token
      }
      }) 
  } catch (error) {
    console.log(error)
   return  res.json({success:false,message:  error})
  }
}
export {loginUser,registerUser};