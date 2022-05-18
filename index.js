import express, {json} from "express"
import dotenv from 'dotenv'
import cors from 'cors'
import chalk from 'chalk'
import poll from "./routes/poll.js"

const app = express()
app.use(cors())
app.use(json())

dotenv.config()

//routes
app.use(poll)

const port = process.env.PORT
app.listen(port, () => {
    console.log(chalk.bold.green(`Server is running on port ${port}.`))
})