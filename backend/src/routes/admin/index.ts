import express from "express";
import { updateUserCredits } from "./credits";
import { getAllUsers } from "./allusers";
import { authenticateAdmin } from "../../middlewares/admin";
const router = express.Router();

// Public routes
// /api/admin/user/:id/credits
router.put("/user/:id/credits", authenticateAdmin ,  updateUserCredits);
router.get("/users", authenticateAdmin , getAllUsers);

export default router;
