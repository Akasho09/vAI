"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routes/user"));
const info_1 = __importDefault(require("./routes/info"));
const posts_1 = __importDefault(require("./routes/posts"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
// Load environment variables first
dotenv_1.default.config();
const app = (0, express_1.default)();
// Security and performance middleware
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true
}));
// Body parsing (express.json() is sufficient in modern Express)
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Remove redundant bodyParser (express.json() replaces it)
// app.use(bodyParser.json()); // ❌ Redundant
// Static files with cache control
// const staticOptions = {
//   maxAge: process.env.NODE_ENV === 'production' ? '1y' : '0'
// };
// app.use(express.static(path.join(__dirname, "public"), staticOptions));
// API routes
app.use("/api/info", info_1.default);
app.use("/api/user", user_1.default); // Fixed typo: authroutes → authRoutes
app.use("/api/posts", posts_1.default);
// // Health check endpoint (better for monitoring)
// app.get("/health", (req: Request, res: Response) => {
//   res.status(200).json({ 
//     status: "healthy",
//     timestamp: new Date().toISOString() 
//   });
// });
// // Root endpoint
app.get("/", (req, res) => {
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
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode`);
    console.log(`Listening on port ${PORT}`);
});
