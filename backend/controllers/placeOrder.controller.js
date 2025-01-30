import { orderModel } from "../models/order.model.js";
import { userModel } from "../models/user.model.js";

const placeOrder = async(req,res) =>{
      try{
          const newOrder = new orderModel({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address
          })
          await newOrder.save();
          // clerar cart data 
          await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}})
      }catch(error){
           res.json({
            success:false,
            message:error
           })
      }
}
export {placeOrder}