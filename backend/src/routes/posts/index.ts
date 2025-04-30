import express from "express";
const router = express.Router();
import { authenticateUser } from "../../middlewares/auth";
import { posts } from "./fetchPosts"; 
import { action } from "./action";

router.get("/getposts" , authenticateUser  ,  posts )
router.post("/action" , authenticateUser  ,  action )

export default router;