import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import upload from "../middlewares/multer.js";
import {
  editProfile,
  uploadProfile,
  getProfiles,
  deleteProfile,
} from "../controllers/profileController.js";

const router = express.Router();

router.post("/", protect, upload.single("profileImage"), uploadProfile);
router.get("/", getProfiles);
router.put("/:id", protect, upload.single("profileImage"), editProfile);
router.delete("/:id", protect, deleteProfile);

export default router;
