import { Router } from "express";
import { pollRegister } from "../controllers/pollController.js";
import { validatePoll } from "../middlewares/pollMidlewares.js";



const poll = Router()
poll.post("/poll", validatePoll, pollRegister);

export default poll;