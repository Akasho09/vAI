

// Remove redundant bodyParser (express.json() replaces it)
// app.use(bodyParser.json());

// Static files with cache control
// const staticOptions = {
//   maxAge: process.env.NODE_ENV === 'production' ? '1y' : '0'
// };
// app.use(express.static(path.join(__dirname, "public"), staticOptions));

// // Health check endpoint (better for monitoring)
// app.get("/health", (req: Request, res: Response) => {
//   res.status(200).json({ 
//     status: "healthy",
//     timestamp: new Date().toISOString() 
//   });
// });



// // SPA fallback (should be after all other routes)
// app.get("*", (req: Request, res: Response) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// // Error handling middleware (add this after all routes)
// app.use((err: Error, req: Request, res: Response) => {
//   console.error(err.stack);
//   res.status(500).json({ error: "Internal Server Error" });
// });

