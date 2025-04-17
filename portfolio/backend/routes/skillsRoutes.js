import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import upload from "../middlewares/multer.js";
import { addSkill } from "../controllers/skillsController.js";

const router = express.Router();

router.post("/", protect, upload.single("skillImage"), addSkill);

export default router;
