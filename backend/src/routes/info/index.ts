import express from "express";
import { getMe } from "./me";
import { updateProfile } from "./update";
import { authenticateUser } from "../../middlewares/auth";
import { getCreditHistory } from "./getCreditHistory";
const router = express.Router();

router.get("/getme",  (req,res)=>{
    getMe(req, res)
})
router.put("/update", authenticateUser, updateProfile);
router.get("/getcredithistory" , authenticateUser  ,  getCreditHistory )

export default router;
