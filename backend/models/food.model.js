import mongoose from "mongoose";
const foodSchema = new mongoose.Schema({
  "name":{
    type:String,
    required:true
  },
  "description":{
   type:String,
   required:true
  },
  "image":{
    type:String,
    required:true
   },
  "price":{
    type:Number,
    required:true
   },
   "category":{
    type:String,
    required:true
   }
})
// mongoose.model.foodModel 
const FoodModel =  mongoose.model("FoodModel",foodSchema)
export { FoodModel};