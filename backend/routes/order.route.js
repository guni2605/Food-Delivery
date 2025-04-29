import { placeOrder, userOrders, verifyOrder } from "../controllers/placeOrder.controller.js";
import express from "express";
import { authmiddleware } from "../middlewares/auth.middleware.js";
 const orderRoute = express.Router();

 orderRoute.post("/place",authmiddleware,placeOrder)
 orderRoute.post("/verify",verifyOrder)
 orderRoute.post("/userorders",authmiddleware,userOrders)
 export {orderRoute}