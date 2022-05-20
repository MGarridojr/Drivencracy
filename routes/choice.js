import { Router } from "express";
import { choiceRegister } from "../controllers/choiceControllers.js";
import { validateChoice } from "../middlewares/choiceMiddlewares.js";



const choiceRouter = Router();
choiceRouter.post("/choice", validateChoice, choiceRegister)



export default choiceRouter