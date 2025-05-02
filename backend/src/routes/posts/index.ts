import express from "express";
const router = express.Router();
import { authenticateUser } from "../../middlewares/auth";
import { posts } from "./fetchPosts"; 
import { action } from "./action";
import  { getLikedPosts, getReportedPosts, getSavedPosts } from './utils'

router.get("/getposts" , authenticateUser  ,  posts )
router.post("/action" , authenticateUser  ,  action )
router.get("/saved" , authenticateUser , getSavedPosts );
router.get("/liked" , authenticateUser , getLikedPosts );
router.get("/reported" , authenticateUser , getReportedPosts  );

export default router;