// "test": "echo \"Error: no test specified\" && exit 1",
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"


import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.route.js"

import connectToMongoDb from "./db/connectToMongoDb.js"
import { app, server } from "./socket/socket.js"
// const app = express()
dotenv.config()
const PORT = process.env.PORT || 5000

app.use(express.json()) // To parse the incoming requests with json playloads (from req.body)
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

// app.get("/",(req,res)=>{
//     //  root Route http://localhost:5000
//     res.send("Hello world")
// })


server.listen(PORT,()=>{
    connectToMongoDb()
    console.log(`server is running on port ${PORT}`);
})