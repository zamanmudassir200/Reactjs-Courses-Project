import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import {
  addProject,
  getAllProjects,
  deleteProject,
  editProject,
} from "../controllers/projectsController.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.post("/", protect, upload.single("projectImage"), addProject);
router.get("/", protect, getAllProjects);
router.delete("/:id", protect, deleteProject);
router.patch("/:id", protect, upload.single("projectImage"), editProject);

export default router;
