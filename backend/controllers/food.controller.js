import { FoodModel } from "../models/food.model.js";
import fs from "fs"

const addFood = async  (req,res)=>{
 // console.log(req);
let image_file = `${req.file.filename}`;

// adding a food
const food = await FoodModel.create({
  "name":req.body.name,
  "description":req.body.description,
  "category":req.body.category,
  "price":req.body.price,
  "image":image_file
})
const addedFood = await FoodModel.findById(food._id)
if(addedFood){
 res.json({
  success:true,
  message:"Food added successfully!!"
 })
}else{
 console.log("Something went wrong",error);
 res.json({success:false,
  message:"Error"})
}


// 

}
const foodList = async (req,res) =>{
  try {
    const food_List = await FoodModel.find({});
    res.json({
      success:true,
      data:food_List
    })

  } catch (error) {
    res.json({
      success:false,
      message:error
    })
  }
}
// remove food
const removeFood = async (req,res)=>{
   try {
    const food = await FoodModel.findById(req.body.id)
    //  fs.unlink(`/uploads/${food.image}`)
    await FoodModel.findByIdAndDelete(req.body.id)
    res.json({
      success:true,
      message:"food remove successfully"
    })
   } catch (error) {
     res.json({
      success:false,
      message:"Error"
     })
   }
}

export {addFood,foodList,removeFood}