// PUT /api/admin/user/:id/credits
import { Request, Response } from "express";
import db from "../../db/index";

export const updateUserCredits = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const { credits } = req.body;

  if (typeof credits !== "number" || credits < 0) {
    res.status(400).json({ message: "Invalid credit value" });
    return ;
  }

  try {
    const user = await db.user.update({
      where: { id: userId },
      data: { Credits: credits },
    });

     res.status(200).json({ message: "Credits updated", user });
     return
  } catch (err) {
    console.error("Failed to update credits:", err);
    res.status(500).json({ message: "Server error" });
  }
};
