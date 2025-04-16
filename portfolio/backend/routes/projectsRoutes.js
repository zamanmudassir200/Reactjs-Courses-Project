import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { createProject } from "../controllers/projectsController.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.post("/", protect, upload.single("projectImage"), createProject);

export default router;
