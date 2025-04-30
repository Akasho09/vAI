import express from "express";
import bodyParser from "body-parser";
import authroutes from "./routes/user";
import infoRouter from "./routes/info"
import postRoutes from'./routes/posts' 
import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors' 

const app = express();
app.use(cors())
app.use(express.json());
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  res.json({ message: "Server is up and running!" });
});

app.use("/api/info" , infoRouter)
app.use("/api/user", authroutes);
app.use("/api/posts" , postRoutes)
app.listen(3000, () => {
  console.log("Express server listening on port 3000");
});
