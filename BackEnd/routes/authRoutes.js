import express from "express"
import { LogoutUser, loginUser, signup } from "../controllers/authController.js"
const router = express.Router()

router.post("/signup",signup)

router.post("/login",loginUser)

router.post("/logout",LogoutUser)

export default router