import { Router } from "express";
import { choiceRegister, showChoices } from "../controllers/choiceControllers.js";
import { validateChoice } from "../middlewares/choiceMiddlewares.js";



const choiceRouter = Router();
choiceRouter.post("/choice", validateChoice, choiceRegister)
choiceRouter.get("/poll/:id/choice", showChoices)



export default choiceRouter