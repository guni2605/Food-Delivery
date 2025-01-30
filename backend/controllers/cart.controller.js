import { userModel } from "../models/user.model.js";
const addToCart = async (req,res)=>{
   
   try {
    const userData = await userModel.findOne({_id : req.body.userId})
    const cartData =await userData.cartData
    if(!cartData[req.body.itemId]){
      cartData[req.body.itemId] = 1;
    }else{
      cartData[req.body.itemId] += 1
    }
    await userModel.findByIdAndUpdate(req.body.userId,{cartData})
    console.log(cartData)
    return res.json({
      success: true,
      message:"Added to cart successfully"
    })
   
   } catch (error) {
    return res.json({
      success:false,
      message:"something went wrong"
    })
   
   }
    
}
const removeFromCart = async (req,res)=>{
 try {
  let userData = await userModel.findById(req.body.userId)
 const userCart = await userData.cartData
 if(userCart[req.body.itemId] > 0){
      userCart[req.body.itemId] == 1 ?  delete userCart[req.body.itemId] : userCart[req.body.itemId] -= 1;
     
        
 }
   await userModel.findByIdAndUpdate(req.body.userId,{cartData : userCart})
   return  res.json({
    success: true,
    message:"Remove from cart successfully"
  })
 } catch (error) {
  return res.json({
    success:false,
    message:"something went wrong"
  })
 }



}
const getCartList = async(req,res)=>{
   try{
     const userData = await userModel.findById(req.body.userId)
    const cartData = await userData.cartData
   return res.json({
      success:true,
      cartData
    })
   }catch(error){
   console.log(error)
   res.json({
    success: false,
    message:error
   })
   }
}
export {addToCart,removeFromCart,getCartList}