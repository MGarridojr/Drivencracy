import { Router } from "express";
import { pollRegister, showPolls } from "../controllers/pollController.js";
import { validatePoll } from "../middlewares/pollMidlewares.js";



const pollRouter = Router()
pollRouter.post("/poll", validatePoll, pollRegister);
pollRouter.get("/poll", showPolls)

export default pollRouter;