import { addFood, foodList, removeFood } from "../controllers/food.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import Router from "express";

const foodRouter = Router()
// add multer before adding user to store image in upload folder

foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.post("/remove",removeFood)
foodRouter.get("/list",foodList)
export {foodRouter}
