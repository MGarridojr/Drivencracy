import dayjs from "dayjs";
import { ObjectId } from "mongodb";
import db from "../db.js";


export async function vote(req, res){
    const { id } = req.params
    const date = dayjs().format('YYYY-MM-DD HH:mm')

    try{
        await db.collection("votes").insertOne({
            createdAt: date,
            choiceId: id,
        })
        res.sendStatus(201)
    } catch{
        console.log("Erro ao cadastrar voto")
        res.sendStatus(500)
    }
}

export async function result(req, res){
    const { id } = req.params
    let results = []
    let winner = []
    try{
        const choices = await db.collection("choices").find({
            pollId: `${id}`
        }).toArray()
        const poll = await db.collection("polls").find({
            _id: new ObjectId(id)
        }).toArray()
        const promisses = choices.map(async (choice)=>{               
           const votes = await db.collection("votes").find({
               choiceId: choice._id.toString().valueOf()
            }).toArray()
            results.push({
                votes: votes.length,
                title: choice.title
            })
            
        })
        await Promise.all(promisses)
        const max = results.reduce((prev, current)=>{
            return prev.votes > current.votes ? prev : current
        })  
        winner.push(poll, max) 
    } catch{ 
        
        res.sendStatus(500)
    }
    
    res.send(winner)

    
    // console.log(max)
    
}