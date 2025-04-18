import cloudinary from "../config/cloudinary.js";
import certificatesModel from "../models/certificatesModel.js";

export const addCertificate = async (req, res) => {
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

    const fileBuffer = req.file.buffer.toString("base64");
    const uploadedCertificate = await cloudinary.uploader.upload(
      `data:${req.file.mimetype};base64,${fileBuffer}`,
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
    return res
      .status(500)
      .json({ message: `Server error ${error}`, success: false });
  }
};

export const getAllCertificates = async (req, res) => {
  try {
    const certificates = await certificatesModel.find({});
    return res.status(200).json({ success: true, certificates });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Server error ${error}`, success: false });
  }
};

export const editCertificate = async (req, res) => {
  try {
    const { id } = req.params;
    const { certificateName, certificateLink, certificateFrom, certificateBy } =
      req.body;

    const updateData = {
      certificateName,
      certificateLink,
      certificateFrom,
      certificateBy,
    };

    if (req.file) {
      const fileBuffer = req.file.buffer.toString("base64");
      const uploadedCertificate = await cloudinary.uploader.upload(
        `data:${req.file.mimetype};base64,${fileBuffer}`,
        {
          folder: "portfolioProjects",
        }
      );
      updateData.certificateImage = uploadedCertificate.secure_url;
    }

    const updated = await certificatesModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updated) {
      return res
        .status(404)
        .json({ message: "Certificate not found", success: false });
    }

    return res.status(200).json({
      message: "Certificate updated successfully",
      success: true,
      data: updated,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Server error ${error}`, success: false });
  }
};

export const deleteCertificate = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await certificatesModel.findByIdAndDelete(id);

    if (!deleted) {
      return res
        .status(404)
        .json({ message: "Certificate not found", success: false });
    }

    return res
      .status(200)
      .json({ message: "Certificate deleted successfully", success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Server error ${error}`, success: false });
  }
};
