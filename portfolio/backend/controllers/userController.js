import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  registerValidation,
  loginValidation,
} from "../validations/userValidation.js";
import transporter from "../config/emailService.js";

const JWT_SECRET = process.env.JWT_SECRET;

export const register = async (req, res) => {
  try {
    const { error } = registerValidation.validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      verificationToken,
    });

    // Send verification email
    const verifyUrl = `http://localhost:${process.env.PORT}/verify-email?token=${verificationToken}`;
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Email Verification",
      html: `<h3>Welcome, ${name}!</h3><p>Click <a href="${verifyUrl}">here</a> to verify your email.</p>`,
    });

    return res.status(201).json({
      message: "User registered! Please verify your email.",
    });
  } catch (err) {
    return res.status(500).json({ message: `Server Error: ${err.message} ` });
  }
};

export const login = async (req, res) => {
  try {
    const { error } = loginValidation.validate(req.body);
    if (error)
      return res.status(400).json({ message: error.details[0].message });

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    const isProduction = process.env.NODE_ENV === "production";

    const cookieOptions = {
      httpOnly: true,
      secure: isProduction, // Only HTTPS in prod
      sameSite: isProduction ? "none" : "lax", // Cross-site for Vercel
      maxAge: 24 * 60 * 60 * 1000,
      path: "/",
    };

    if (isProduction && process.env.PRODUCTION_DOMAIN) {
      cookieOptions.domain = process.env.PRODUCTION_DOMAIN; // 👈 Must match backend domain
    }

    res.cookie("accessToken", token, cookieOptions);

    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        email: user.email,
        userType: user.userType,
        wishList: user.wishList,
      },
      success: true,
    });
  } catch (err) {
    console.error("Login Error:", err);
    return res.status(500).json({ message: `Server Error: ${err.message}` });
  }
};

export const logout = async (req, res) => {
  try {
    // res.clearCookie("accessToken");
    res.cookie("accessToken", "");
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    return res.status(500).json({ message: `Server Error: ${err.message} ` });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;
    if (!token) return res.status(400).json({ message: "Missing token" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ email: decoded.email });

    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.isVerified) {
      return res.status(400).json({ message: "Email already verified" });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();

    return res.status(200).json({ message: "Email verified successfully" });
  } catch (err) {
    return res.status(400).json({ message: "Invalid or expired token" });
  }
};
