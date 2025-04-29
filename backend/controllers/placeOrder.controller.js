import { orderModel } from "../models/order.model.js";
import { userModel } from "../models/user.model.js";
import Stripe from "stripe";


const placeOrder = async(req,res) =>{
  const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`);
  // console.log(`${process.env.STRIPE_SECRET_KEY}`)
  const frontend_url = "http://localhost:5173"
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
          const line_items = req.body.items.map((item)=>({
            price_data :{
              currency:"inr",
              product_data:{
                name:item.name
              },
              unit_amount :item.price*100,

            },
            quantity:item.quantity
          }))
          line_items.push({
            price_data:{
              currency:"inr",
              product_data:{
                name:"Delivery Charges"
              },
              unit_amount:2*100*80

            },
            quantity:1
          })
          const session = await stripe.checkout.sessions.create({
            line_items,
            mode:"payment",
            success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
          })
          res.json({
            success:true,
            url:session.url
          })
      }catch(error){
        console.log(error)
           res.json({
            success:false,
            message:error
           })
      }
}
const verifyOrder = async (req,res)=>{
  try {
    //console.log("hello")
    const {orderId,success} = req.body;
   // console.log(req)
  if(success == "true"){
    await orderModel.findByIdAndUpdate(orderId,{payment:true})
    res.json({success:true,
      message:"paid"
    })
  }else{
    await orderModel.findByIdAndDelete(orderId);
    res.json({
      success:false,
      message:"not paid"
    })
  }
  } catch (error) {
    res.json({
      success:false,
      message:error
    })
  }
}
const userOrders = async(req,res)=>{
  try {
    const {userId} = req.body;
  const orders = await orderModel.find({userId})
  return res.json({
    success:true,
    data:orders
  })
  } catch (error) {
    return res.json({
      success:false,
      message:error
    })
  }
}
export {placeOrder,verifyOrder,userOrders}