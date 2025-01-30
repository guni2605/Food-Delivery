import express from "express"
import { addToCart, getCartList, removeFromCart } from "../controllers/cart.controller.js"
import { authmiddleware } from "../middlewares/auth.middleware.js"

const cartRoute = express.Router()
cartRoute.post("/add/cart",authmiddleware,addToCart)
cartRoute.post("/remove/cart",authmiddleware,removeFromCart)
cartRoute.get("/get/list",authmiddleware,getCartList)
export {cartRoute}