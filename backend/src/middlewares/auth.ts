import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = "akashJWT";

export interface AuthRequest extends Request {
  userId?: string;
}

export const authenticateUser = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization;
      
  if (!token) return;

  try {
     const decoded: any = jwt.verify(token, JWT_SECRET);
     const id : string = decoded.userId;
    req.userId = id;
    next(); 
  } catch (err) {
    return ;
  }
};