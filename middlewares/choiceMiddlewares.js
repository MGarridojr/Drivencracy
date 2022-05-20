import { ObjectId } from "mongodb";
import db from "../db.js";
import { choiceShema } from "../schemas/choiceSchemas.js";

export async function validateChoice(req, res, next){
    const { error } = choiceShema.validate(req.body)
    const { pollId } = req.body
    try{
        const poll = await db.collection("polls").findOne({
            _id: new ObjectId(pollId) // perguntar pro gabriel
        })
        if(!poll){
            
            res.sendStatus(422)
        }
        
    } catch{

    }
    if(error){
        return res.sendStatus(422)
    }
    next()
}