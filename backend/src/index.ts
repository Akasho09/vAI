import express, { Request, Response } from "express";
import authRoutes from "./routes/user";
import infoRouter from "./routes/info";
import postRoutes from "./routes/posts";
import dotenv from "dotenv";
import cors from "cors";

// Load environment variables first
dotenv.config();

const app = express();

// Security and performance middleware
app.use(cors({
  origin: "https://v-ai-neon.vercel.app",
  credentials: true
}));

// Body parsing (express.json() is sufficient in modern Express)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Remove redundant bodyParser (express.json() replaces it)
// app.use(bodyParser.json());

// Static files with cache control
// const staticOptions = {
//   maxAge: process.env.NODE_ENV === 'production' ? '1y' : '0'
// };
// app.use(express.static(path.join(__dirname, "public"), staticOptions));

// API routes
app.use("/api/info", infoRouter);
app.use("/api/user", authRoutes);  // Fixed typo: authroutes → authRoutes
app.use("/api/posts", postRoutes);

// // Health check endpoint (better for monitoring)
// app.get("/health", (req: Request, res: Response) => {
//   res.status(200).json({ 
//     status: "healthy",
//     timestamp: new Date().toISOString() 
//   });
// });

// // Root endpoint
app.get("/", (req: Request, res: Response) => {
  res.json({ 
    message: "Server is running"
    });
});

// // SPA fallback (should be after all other routes)
// app.get("*", (req: Request, res: Response) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// // Error handling middleware (add this after all routes)
// app.use((err: Error, req: Request, res: Response) => {
//   console.error(err.stack);
//   res.status(500).json({ error: "Internal Server Error" });
// });

const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, '0.0.0.0' , () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode`);
  console.log(`Listening on port ${PORT}`);
});