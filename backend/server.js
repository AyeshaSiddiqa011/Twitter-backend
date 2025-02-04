import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import connectMongoDB from "./db/connectmongoDB.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
import postRoutes from "./routes/post.routes.js"
import {v2 as cloudinary} from "cloudinary";


import notificationRoutes from "./routes/notification.route.js";
dotenv.config();
cloudinary.config(
    {cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
    api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET}
);
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());//for parsing req.body
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/notifications", notificationRoutes);


app.listen(PORT,  () => {
    console.log(`Server running on port: ${PORT}`)
    connectMongoDB();
})