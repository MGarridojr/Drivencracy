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

export async function showPolls(req, res){
    try{
        const polls = await db.collection("polls").find().toArray()
        await res.send(polls)
        
        
    }
    catch{
        console.log("Erro ao encontrar enquetes")
        res.sendStatus(500)
    }
}