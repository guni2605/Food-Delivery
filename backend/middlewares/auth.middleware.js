import jwt from "jsonwebtoken";

const authmiddleware =async (req,res,next)=>{
   const {token} = req.headers;
   if(!token){
    return res.json({
      success:false,
      message:"invalid credentials!"
    })
   }
   try {
     const decoded_token =  jwt.verify(token,process.env.JWT_secret)
     req.body.userId = decoded_token._id;
     next();

   } catch (error) {
    return res.json({
      success: false,
      message:error
    })
   }
}
export {authmiddleware}