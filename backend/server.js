import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import connectMongoDB from "./db/connectmongoDB.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());//for parsing req.body
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())


app.use("/api/auth", authRoutes);

app.listen(PORT,  () => {
    console.log(`Server running on port: ${PORT}`)
    connectMongoDB();
})