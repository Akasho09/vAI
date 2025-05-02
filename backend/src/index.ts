import express, { Request, Response } from "express";
import authRoutes from "./routes/user";
import infoRouter from "./routes/info";
import postRoutes from "./routes/posts";
import adminroutes from './routes/admin'

import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

const allowedOrigins = [
  'http://localhost:5173',              // Local dev
  'https://v-ai-neon.vercel.app'        // Vercel frontend
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g., Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true, // If using cookies or Authorization headers
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// API routes
app.use("/api/info", infoRouter);
app.use("/api/user", authRoutes);  // Fixed typo: authroutes → authRoutes
app.use("/api/posts", postRoutes);
app.use("/api/admin", adminroutes);


app.get("/", (req: Request, res: Response) => {
  res.json({ 
    message: "Server is running"
    });
});

const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, '0.0.0.0' , () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode`);
  console.log(`Listening on port ${PORT}`);
});