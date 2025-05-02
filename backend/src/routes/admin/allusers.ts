// GET /api/admin/users
import { Request, Response } from "express";
import db from "../../db/index";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await db.user.findMany({
      select: {
        id: true,
        firstname: true,
        lastname: true,
        Credits: true,
        username: true,
      },
    });
     res.status(200).json({ users });
     return ;
  } catch (err) {
    console.error("Failed to fetch users:", err);
    res.status(500).json({ message: "Server error" });
  }
};
