import joi from "joi";
import Joi from 'joi-oid'

export const choiceShema = joi.object({
    title: joi.string().required(),
    pollId: Joi.objectId().required() 
})  