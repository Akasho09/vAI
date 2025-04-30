import { Request, Response } from "express";
import db from "../../db/index";
import { AuthRequest } from "../../middlewares/auth";

export const updateProfile = async (req: AuthRequest, res: Response) => {
  const userId = req.userId;

  const {
    firstname,
    lastname,
    bio,
    avatarUrl,
    location,
    website,
    email,
    mobile,
  }: {
    firstname?: string;
    lastname?: string;
    bio?: string;
    avatarUrl?: string;
    location?: string;
    website?: string;
    email?: string;
    mobile?: string;
  } = req.body;

  try {
    // Step 1: Fetch current user profile
    const user = await db.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // Step 2: Determine how many new fields are filled
    let earnedCredits = 0;
    let creditReasons: string[] = []; // Store reasons for the credit history

    if (!user.firstname && firstname) {
      earnedCredits += 10;
      creditReasons.push("Updated first name");
    }
    if (!user.lastname && lastname) {
      earnedCredits += 10;
      creditReasons.push("Updated last name");
    }
    if (!user.bio && bio) {
      earnedCredits += 10;
      creditReasons.push("Updated bio");
    }
    if (!user.avatarUrl && avatarUrl) {
      earnedCredits += 10;
      creditReasons.push("Added avatar");
    }
    if (!user.location && location) {
      earnedCredits += 10;
      creditReasons.push("Updated location");
    }
    if (!user.website && website) {
      earnedCredits += 10;
      creditReasons.push("Updated website");
    }
    if (!user.email && email) {
      earnedCredits += 10;
      creditReasons.push("Updated email");
    }
    if (!user.mobile && mobile) {
      earnedCredits += 10;
      creditReasons.push("Updated mobile number");
    }

    // Step 3: Update user profile and credits conditionally
    const updatedUser = await db.user.update({
      where: { id: userId },
      data: {
        firstname,
        lastname,
        bio,
        avatarUrl,
        location,
        website,
        email,
        mobile,
        ...(earnedCredits > 0 && {
          Credits: { increment: earnedCredits },
        }),
      },
    });

    // Step 4: Add credit history entry for each reason
    if (earnedCredits > 0) {
      for (const reason of creditReasons) {
        await db.creditHistory.create({
          data: {
            userId: String(userId),
            reason,
            amount: earnedCredits / creditReasons.length, // Split earned credits across reasons
          },
        });
      }
    }

    res.json({
      message: "Profile updated successfully",
      earnedCredits,
      user: updatedUser,
    }); 
  } catch (err: any) {
    res.status(500).json({
      message: "Failed to update profile",
      error: err.message,
    });
  }
};

