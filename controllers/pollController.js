import db from "../db.js";

export async function pollRegister(req, res){
    try{
        await db.collection("polls").insertOne(req.body)
        res.sendStatus(201)
    }
    catch{
        console.log("Erro ao cadastrar enquete")
        res.sendStatus(500)
    }
    
}