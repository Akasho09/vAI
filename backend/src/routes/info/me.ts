import { Request, Response } from "express";
import db from "../../db/index";
import jwt from "jsonwebtoken";

const JWT_SECRET = "akashJWT";

export const getMe = async (req: Request, res: Response) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded: any = jwt.verify(token, JWT_SECRET);
    console.log(decoded)
    const id  = decoded.userId;
    const role =decoded.role ;
    let user;

    if (role === 'admin') {
      user = await db.admin.findUnique({
        where: { id },
        select: {
          firstname: true,
          lastname: true,
          avatarUrl: true,
        },
      });
    } else {
      user = await db.user.findUnique({
        where: { id },
        select: {
          firstname: true,
          lastname: true,
          avatarUrl: true,
          Credits: true,
          website: true,
          mobile: true,
          location: true,
          bio: true,
        },
      });
    }

    if (!user) return res.status(404).json({ message: "User not found" });

    return res.status(200).json({ 
      user,
      role : role
     });
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: "Invalid token" });
  }
};

