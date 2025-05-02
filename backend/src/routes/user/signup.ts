import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { PrismaClient } from "../../../generated/prisma"; // Adjust this import if necessary
import bcrypt from "bcrypt";
import { resolve } from "path";

const prisma = new PrismaClient();
const JWT_SECRET = "akashJWT";
const SALT_ROUNDS = 10;

export const signup = async (req: Request, res: Response): Promise<void> => {
  const { username, firstname, lastname, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: "Username and password are required." });
    return;
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUser) {
      res.status(400).json({ message: `${username} is already taken` });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const newUser = await prisma.admin.create({
      data: {
        username,
        firstname,
        lastname,
        password: hashedPassword
      },
    });



    await prisma.creditHistory.create({
      data: {
        userId: newUser.id,
        reason : "SignUp Bonus Credits" ,
        amount : 20,
      },
    });

    const token = jwt.sign(
      {  
        userId: newUser.id , 
        role: 'user' 
       },
      JWT_SECRET,
      { expiresIn: '1d' }
    );
    


    res.status(201).json({
      message: "User created successfully",
      token,
    });
    
  } catch (error: any) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
