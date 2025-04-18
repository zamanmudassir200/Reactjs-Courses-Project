import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs"; // <--- Add this

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Add this check before multer config
const uploadsFolder = path.join(__dirname, "../uploads");

// if (!fs.existsSync(uploadsFolder)) {
//   fs.mkdirSync(uploadsFolder, { recursive: true });
// }

// 🔧 Setup multer storage
const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, uploadsFolder);
  },
  filename: function (_req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

export default upload;

// import multer from "multer";
// import fs from "fs";
// import path from "path";

// // Create uploads folder if it doesn't exist
// const uploadDir = path.join("portfolio", "backend", "uploads");

// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// // Multer storage config
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, uploadDir);
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage });

// export default upload;
