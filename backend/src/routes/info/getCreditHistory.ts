import { Response } from "express";
import db from "../../db/index";
import { AuthRequest } from "../../middlewares/auth";

export const getCreditHistory = async (req: AuthRequest , res: Response) => {
  const userId = req.userId;

  try {
    const creditHistory = await db.creditHistory.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" }, // Order by most recent
    });

    if (creditHistory.length === 0) {
      res.status(404).json({ message: "No credit history found" });
    }

    res.json({ creditHistory });
  } catch (error:any) {
    res.status(500).json({
      message: "Error retrieving credit history",
      error: error.message,
    });
  }
};
