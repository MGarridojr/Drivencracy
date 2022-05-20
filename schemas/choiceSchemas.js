
import Joi from 'joi-oid'

export const choiceShema = Joi.object({
    title: Joi.string().required(),
    pollId: Joi.objectId().required() 
})  