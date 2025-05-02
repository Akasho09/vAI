import { Request, Response } from "express";
import prisma from "../../db";

export const getLikedPosts = async (req: Request & { userId?: string }, res: Response) => {
  const userId = req.userId!;
  const likedPosts = await prisma.likedPost.findMany({
    where: { userId },
    include: { post: true },
  });
  res.json({ likedPosts });
};

export const getSavedPosts = async (req: Request & { userId?: string }, res: Response) => {
  const userId = req.userId!;
  const savedPosts = await prisma.savedPost.findMany({
    where: { userId },
    include: { post: true },
  });
  res.json({ savedPosts });
};

export const getReportedPosts = async (req: Request & { userId?: string }, res: Response) => {
  const userId = req.userId!;
  const reportedPosts = await prisma.reportedPost.findMany({
    where: { userId },
    include: { post: true },
  });
  res.json({ reportedPosts });
};

// export const toggleLikePost = async (req: Request & { userId?: string }, res: Response) => {
//   const userId = req.userId!;
//   const postId = req.params.postId;

//   const existing = await prisma.likedPost.findFirst({ where: { userId, postId } });
//   if (existing) {
//     await prisma.likedPost.delete({ where: { id: existing.id } });
//     return res.json({ message: "Post unliked" });
//   }

//   await prisma.likedPost.create({ data: { userId, postId } });
//   res.json({ message: "Post liked" });
// };

// export const toggleSavePost = async (req: Request & { userId?: string }, res: Response) => {
//   const userId = req.userId!;
//   const postId = req.params.postId;

//   const existing = await prisma.savedPost.findFirst({ where: { userId, postId } });
//   if (existing) {
//     await prisma.savedPost.delete({ where: { id: existing.id } });
//     return res.json({ message: "Post unsaved" });
//   }

//   await prisma.savedPost.create({ data: { userId, postId } });
//   res.json({ message: "Post saved" });
// };

// export const reportPost = async (req: Request & { userId?: string }, res: Response) => {
//   const userId = req.userId!;
//   const postId = req.params.postId;

//   const alreadyReported = await prisma.reportedPost.findFirst({ where: { userId, postId } });
//   if (alreadyReported) {
//     return res.status(400).json({ message: "Post already reported" });
//   }

//   await prisma.reportedPost.create({ data: { userId, postId } });
//   res.json({ message: "Post reported" });
// };
