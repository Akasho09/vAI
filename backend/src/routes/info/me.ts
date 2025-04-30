// GET /api/user/me
import { Request, Response } from "express";
import db from "../../db/index";
import jwt from "jsonwebtoken";

const JWT_SECRET = "akashJWT";

export const getMe = async (req: Request, res: Response) => {
 
    const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  try {
    const decoded: any = jwt.verify(token, JWT_SECRET);
    const user = await db.user.findUnique({
      where: { id: decoded.userId },
      select: {
        firstname: true,
        lastname: true,
        avatarUrl: true,
        Credits: true,
        website : true ,
        mobile : true ,
        location : true ,
        bio : true 
      },
    });
    console.log(user)

    if (!user) return res.status(404).json({ message: "User not found" });

    return res.status(200).json({user});
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};
