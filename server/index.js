import express from "express";
import {PORT} from './config.js'
import indexRouter from './routes/index.routes.js'
import tasksRouter from './routes/tasks.routes.js'

const app = express();


app.use(express.json())

app.use(tasksRouter)
app.use(indexRouter)
app.listen(PORT)
console.log(`Server is running on port ${PORT}`);