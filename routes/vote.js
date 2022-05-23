import { Router } from "express";
import { result, vote } from "../controllers/voteControllers.js";
import { validateExpiration } from "../middlewares/pollMidlewares.js";


const voteRouter = Router()

voteRouter.post("/choice/:id/vote", validateExpiration, vote)
voteRouter.get("/poll/:id/result", result)

export default voteRouter