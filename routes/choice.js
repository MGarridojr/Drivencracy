import { Router } from "express";
import { choiceRegister, showChoices } from "../controllers/choiceControllers.js";
import { validateChoice } from "../middlewares/choiceMiddlewares.js";
import { validateExpiration } from "../middlewares/pollMidlewares.js";



const choiceRouter = Router();
choiceRouter.post("/choice", validateChoice, validateExpiration, choiceRegister)
choiceRouter.get("/poll/:id/choice", showChoices)



export default choiceRouter