// userRoutes.js
import express from "express";
import {
  register,
  login,
  logout,
  verifyEmail,
} from "../controllers/userController.js";
import { protect, isLoggedIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", protect, logout);

// ✅ Email verification route
router.get("/verify-email", verifyEmail);

// Route to check if the user is logged in
router.get("/is-logged-in", isLoggedIn); // This will check the login status

// Example of a protected route
router.get("/profile", protect, (req, res) => {
  res.json({
    message: "This is a protected profile route",
    userId: req.user.id,
  });
});

export default router;
