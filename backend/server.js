import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { connectdb } from "./config/db.js"
import { foodRouter } from "./routes/food.route.js"
import userRouter from "./routes/user.route.js"
import { cartRoute } from "./routes/cart.route.js"
import { orderRoute } from "./routes/order.route.js"
dotenv.config({
  path: "./.env" 
})
// app config
const app = express()

//middlewares
app.use(cors({
  origin: process.env.ORIGIN
}))
app.use(express.json())
// connect db
connectdb()
// defining routes
app.use("/api/v1/food",foodRouter)
app.use("/images",express.static("uploads"))
app.use("/api/v1/user",userRouter)
app.use("/api/v1/cart",cartRoute)
app.use("/api/v1/place",orderRoute)
app.get('/',(req,res)=>{
  res.send("API Working");
})
app.listen(process.env.PORT,()=>{
  console.log(`server at http://localhost:${process.env.PORT}`)
})