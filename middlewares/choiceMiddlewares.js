import { ObjectId } from "mongodb";
import db from "../db.js";
import { choiceShema } from "../schemas/choiceSchemas.js";

export async function validateChoice(req, res, next){
    const { error } = choiceShema.validate(req.body)
    const { pollId, title } = req.body
    try{
        const poll = await db.collection("polls").findOne({
            _id: new ObjectId(pollId)
        })
        if(!poll){
            console.log("Enquete não encontrada")
            return res.sendStatus(404)
        }
        const serverTitle = await db.collection("choices").find({
            "$and":[
            {"title": title},
            {"pollId": pollId}
        ]}).toArray()
        if(serverTitle.length >=1){
            console.log("Essa opção de voto já existe")
            return res.sendStatus(409)
        }
        
    } catch{

    }
    if(error){
        return res.sendStatus(422)
    }
    next()
}