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

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ✅ CORS Config
app.use(
  cors({
    origin: [process.env.CLIENT_URL, "http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// ✅ DB connect
connectDb();

// ✅ Routes
app.use("/users", userRoutes);
app.use("/projects", projectsRoutes);
app.use("/certificates", certificatesRoutes);
app.use("/skills", skillsRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Portfolio Backend API");
});

// ✅ Server start
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

export default app;
