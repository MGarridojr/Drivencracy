import { ObjectId } from "mongodb";
import db from "../db.js";

export async function choiceRegister(req, res){
    try{
        const poll = await db.collection("choices").insertOne(req.body)
    } catch{
        console.log("Erro ao cadastrar opção de enquente")
        res.sendStatus(500)
    }
    res.sendStatus(201)
}