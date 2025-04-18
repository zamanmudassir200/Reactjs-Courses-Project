import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs"; // <--- Add this

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Add this check before multer config
const uploadsFolder = path.join(__dirname, "../uploads");

if (!fs.existsSync(uploadsFolder)) {
  fs.mkdirSync(uploadsFolder);
}

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
