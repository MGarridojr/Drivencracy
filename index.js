import express, {json} from "express"
import dotenv from 'dotenv'
import cors from 'cors'
import chalk from 'chalk'
import pollRouter from "./routes/poll.js"
import choiceRouter from "./routes/choice.js"

const app = express()
app.use(cors())
app.use(json())

dotenv.config()

//routes
app.use(pollRouter)
app.use(choiceRouter)

const port = process.env.PORT
app.listen(port, () => {
    console.log(chalk.bold.green(`Server is running on port ${port}.`))
})