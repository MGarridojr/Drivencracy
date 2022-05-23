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
    const { pollId } = req.body
    const { id } = req.params
    
    try{
        if(pollId){
            const poll = await db.collection("polls").find({
                _id: new ObjectId(pollId)
            }).toArray()
            const expireMs = Date.parse(poll[0].expireAt)
            const todayMs = Date.now()
            if(todayMs > expireMs){
               return res.send(403)
            }
            

        }
        if(id){
            const choice = await db.collection("choices").find({
                _id: new ObjectId(id)
            }).toArray()
            const poll = await db.collection("polls").find({
                _id: new ObjectId(choice[0].pollId)
            }).toArray()
            const expireMs = Date.parse(poll[0].expireAt)
            const todayMs = Date.now()
            if(todayMs > expireMs){
               return res.send(403)
            }
        }

    } catch{
    }

    next()
}