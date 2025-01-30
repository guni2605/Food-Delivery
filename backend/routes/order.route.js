import { placeOrder } from "../controllers/placeOrder.controller.js";
import express from "express";
import { authmiddleware } from "../middlewares/auth.middleware.js";
 const orderRoute = express.Router();

 orderRoute.post("/order",authmiddleware,placeOrder)
 export {orderRoute}