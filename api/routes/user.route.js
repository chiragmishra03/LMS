import express from "express"
import {deleteUser} from "../controllers/user.controller.js"
import jwt from "jsonwebtoken";
import {verifyToken} from "../MiddleWare/jwt.js"

const router = express.Router();





export default router;