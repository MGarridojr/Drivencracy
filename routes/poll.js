import { Router } from "express";
import { pollRegister, showPolls } from "../controllers/pollController.js";
import { validatePoll } from "../middlewares/pollMidlewares.js";



const poll = Router()
poll.post("/poll", validatePoll, pollRegister);
poll.get("/poll", showPolls)

export default poll;