import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDb from "./db/db.js";
import path from "path";
import { fileURLToPath } from "url";
import userRoutes from "./routes/userRoutes.js";
import projectsRoutes from "./routes/projectsRoutes.js";
import certificatesRoutes from "./routes/certificatesRoutes.js";
import skillsRoutes from "./routes/skillsRoutes.js";

import cookieParser from "cookie-parser";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(
  cors({
    method: ["GET", "POST", "DELETE", "PATCH", "PUT"],
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
connectDb();

app.use("/users", userRoutes);
app.use("/projects", projectsRoutes);
app.use("/certificates", certificatesRoutes);
app.use("/skills", skillsRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Server is started on port ${process.env.PORT}`);
});

export default app;
