import joi from "joi";
import DateExtension from '@joi/date';


const Joi = joi.extend(DateExtension) 



export const pollSchema = joi.object({
    title: Joi.string().required(),
    expireAt: Joi.date().format('YYYY-MM-DD HH:mm')       
});