import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import upload from "../middlewares/multer.js";
import {
  addCertificate,
  getAllCertificates,
  editCertificate,
  deleteCertificate,
} from "../controllers/certificatesController.js";

const router = express.Router();

router.post("/", protect, upload.single("certificateImage"), addCertificate);
router.get("/", getAllCertificates);
router.put("/:id", protect, upload.single("certificateImage"), editCertificate);
router.delete("/:id", protect, deleteCertificate);

export default router;
