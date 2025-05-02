import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import db from "../../db/index";
import bcrypt from "bcrypt";
import { differenceInDays } from 'date-fns';

const JWT_SECRET = "akashJWT";
const DAILY_BONUS = 10;

export const signin = async (req: Request, res: Response): Promise<void> => {
  const { username, password, role } = req.body;
  console.log(req.body)
  if (!username || !password || !role) {
    res.status(400).json({ message: "Username, password, and role are required" });
    return;
  }

  try {
    const dbuser = role === "user"
      ? await db.user.findUnique({ where: { username } })
      : await db.admin.findUnique({ where: { username } });

    if (!dbuser) {
      res.status(401).json({ message: "Invalid username or password" });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, dbuser.password);
    if (!passwordMatch) {
      res.status(401).json({ message: "Invalid username or password" });
      return;
    }

    const today = new Date();

    if (role === "user") {
      const lastLogin = (dbuser as any).lastLogin as Date | null;
      const daysDiff = lastLogin ? differenceInDays(today, new Date(lastLogin)) : 1;

      if (daysDiff >= 1) {
        await db.user.update({
          where: { id: dbuser.id },
          data: {
            Credits: { increment: DAILY_BONUS },
            lastLogin: today
          }
        });
      }
    }

    const token = jwt.sign({ userId: dbuser.id }, JWT_SECRET, { expiresIn: "7d" });

    res.status(200).json({
      message: "Successfully signed in",
      token
    });

  } catch (err: any) {
    res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  }
};