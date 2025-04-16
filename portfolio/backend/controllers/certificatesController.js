import cloudinary from "../config/cloudinary.js";
import certificatesModel from "../models/certificatesModel.js";

export const createCertificate = async (req, res) => {
  try {
    const { certificateName, certificateLink, certificateFrom, certificateBy } =
      req.body;

    if (
      !certificateName ||
      !certificateLink ||
      !req.file ||
      !certificateFrom ||
      !certificateBy
    ) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }
    const uploadedCertificate = await cloudinary.uploader.upload(
      req.file.path,
      {
        folder: "portfolioProjects",
      }
    );

    const newCertificate = {
      certificateName,
      certificateLink,
      certificateImage: uploadedCertificate.secure_url,
      certificateFrom,
      certificateBy,
    };

    const savedCertificate = await certificatesModel.create(newCertificate);
    return res.status(201).json({
      message: "Certificate added successfully",
      success: true,
      data: savedCertificate,
    });
  } catch (error) {
    return res.status(500).json({ message: `Server error ${error}` });
  }
};
