import { Response } from "express";
import { AuthRequest } from "../../middlewares/auth";
import prisma from "../../db";

export async function action(req: AuthRequest, res: Response) {
  const { action, postId } = req.body;
  const userId = req.userId;

  if (!userId || !postId || !action) {
    res.status(400).json({ error: "Invalid payload" });
    return;
  }

  try {
    const rewardUser = async (reason: string, amount: number) => {
      await prisma.user.update({
        where: { id: userId },
        data: {
          Credits: { increment: amount },
          creditHistory: {
            create: {
              reason,
              amount,
            },
          },
        },
      });
    };

    if (action === "like") {
      const existing = await prisma.likedPost.findFirst({
        where: { userId, postId },
      });

      if (existing) {
        res.status(409).json({ error: "Already liked" });
        return;
      }

      await prisma.likedPost.create({
        data: { userId, postId },
      });

      await prisma.post.update({
        where: { id: postId },
        data: { likes: { increment: 1 } },
      });

      await rewardUser("Liked a post", 2);

    } else if (action === "save") {
      const existing = await prisma.savedPost.findFirst({
        where: { userId, postId },
      });

      if (existing) {
        res.status(409).json({ error: "Already saved" });
        return;
      }

      await prisma.savedPost.create({
        data: { userId, postId },
      });

      await rewardUser("Saved a post", 1);

    } else if (action === "report") {
      const existing = await prisma.reportedPost.findFirst({
        where: { userId, postId },
      });

      if (existing) {
        res.status(409).json({ error: "Already reported" });
        return;
      }

      await prisma.reportedPost.create({
        data: { userId, postId },
      });

      await prisma.post.update({
        where: { id: postId },
        data: { reports: { increment: 1 } },
      });

      await rewardUser("Reported a post", 3);

    } else {
      res.status(400).json({ error: "Unknown action type" });
      return;
    }

    res.json({ success: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: "Server error while performing action" });
  }
}
