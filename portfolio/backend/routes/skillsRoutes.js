import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import upload from "../middlewares/multer.js";
import {
  addSkill,
  getAllSkills,
  editSkill,
  deleteSkill,
} from "../controllers/skillsController.js";

const router = express.Router();

router.post("/", protect, upload.single("skillImage"), addSkill);
router.get("/", getAllSkills);
router.put("/:id", protect, upload.single("skillImage"), editSkill);
router.delete("/:id", protect, deleteSkill);

export default router;
