import express from "express";
import { signin } from "./signin";
import { signup } from "./signup";

const router = express.Router();

// Public routes
router.post("/signup", signup);
router.post("/signin", signin);

// Protected routes

export default router;
