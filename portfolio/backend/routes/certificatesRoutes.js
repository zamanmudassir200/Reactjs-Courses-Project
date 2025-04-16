import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { createCertificate } from "../controllers/certificatesController.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.post("/", protect, upload.single("certificateImage"), createCertificate);

export default router;
