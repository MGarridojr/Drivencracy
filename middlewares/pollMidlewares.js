import dayjs from "dayjs";
import { ObjectId } from "mongodb";
import db from "../db.js";
import { pollSchema } from "../schemas/pollSchemas.js";

export function validatePoll(req, res, next){
    const { error } = pollSchema.validate(req.body)
    if(!req.body.expireAt){
       req.body.expireAt = dayjs().add(30, 'day').format('YYYY-MM-DD HH:mm').toString()
    }
    if(error){
        return res.sendStatus(422)
    }
    next()
}

export async function validateExpiration(req, res, next){
    const pollId = req.body.pollId
    if(pollId){
        try{
            const poll = await db.collection("polls").findOne({
                _id: new ObjectId(pollId)
            }).toArray()
            console.log("poll")
        } catch{

        }
    }
    next()
}