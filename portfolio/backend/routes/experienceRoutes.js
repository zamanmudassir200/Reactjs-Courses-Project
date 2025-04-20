import express from "express";
import upload from "../middlewares/multer.js";
import {
  addExperience,
  getAllExperience,
  editExperience,
  deleteExperience,
} from "../controllers/experienceController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, upload.single("experienceImage"), addExperience);
router.get("/", getAllExperience);
router.put("/:id", protect, upload.single("experienceImage"), editExperience);
router.delete("/:id", protect, deleteExperience);

export default router;
