import { pollSchema } from "../schemas/pollSchemas.js";

export function validatePoll(req, res, next){
    const { error } = pollSchema.validate(req.body)
    if(error){
        return res.sendStatus(422)
    }
    next()
}