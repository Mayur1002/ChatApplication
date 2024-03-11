import express from "express"
import { getMessages, sendMessage } from "../controllers/message.controller.js"
import protectRoute from "../../middleware/protectRoute.js"
const router = express.Router()

router.get("/:id",protectRoute,getMessages) // get messages between current user 
router.post("/send/:id",protectRoute,sendMessage)


export default router
