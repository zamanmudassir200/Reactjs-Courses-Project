import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  const JWT_SECRET = process.env.JWT_SECRET;
  try {
    const token = req?.cookies?.accessToken;
    if (!token)
      return res.status(401).json({ message: "Not authorized, token missing" });

    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

// To check if the user is logged in or not, you can create a separate route (optional)
export const isLoggedIn = (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) {
    return res.status(401).json({ message: "User is not logged in" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ message: "User is logged in", userId: decoded.id });
  } catch (err) {
    return res.status(401).json({ message: "Token is not valid" });
  }
};
