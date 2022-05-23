import { Router } from "express";
import { result, vote } from "../controllers/voteControllers.js";


const voteRouter = Router()

voteRouter.post("/choice/:id/vote", vote)
voteRouter.get("/poll/:id/result", result)

export default voteRouter