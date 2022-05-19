import dayjs from "dayjs";
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