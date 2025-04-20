import cloudinary from "../config/cloudinary.js";
import experienceModel from "../models/experienceModel.js";

// ✅ POST: Add Experience
export const addExperience = async (req, res) => {
  try {
    const {
      experienceTitle,
      experienceCompany,
      experienceRole,
      experienceStart,
      experienceEnd,
      isCurrentlyWorking,
    } = req.body;

    let experienceImage = "";

    if (req.file) {
      const fileDataUri = `data:${
        req.file.mimetype
      };base64,${req.file.buffer.toString("base64")}`;

      const uploadedImage = await cloudinary.uploader.upload(fileDataUri, {
        folder: "portfolioExperience",
      });

      experienceImage = uploadedImage.secure_url;
    }

    const newExperience = {
      experienceTitle,
      experienceCompany,
      experienceRole,
      experienceStart: new Date(experienceStart),
      experienceImage,
      isCurrentlyWorking:
        isCurrentlyWorking === "true" || isCurrentlyWorking === true,
    };

    // Only set experienceEnd if user is not currently working
    if (!newExperience.isCurrentlyWorking && experienceEnd) {
      newExperience.experienceEnd = new Date(experienceEnd);
    }

    const savedExperience = await experienceModel.create(newExperience);

    return res.status(201).json({
      message: "Experience added successfully",
      success: true,
      savedExperience,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Server error: ${error.message}`,
      success: false,
    });
  }
};

// ✅ GET: Fetch All Experiences
export const getAllExperience = async (req, res) => {
  try {
    const experiences = await experienceModel.find().sort({ createdAt: -1 });
    return res.status(200).json({
      message: "All experiences fetched successfully",
      success: true,
      experiences,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Server error: ${error.message}`,
      success: false,
    });
  }
};

// ✅ PUT: Update Experience by ID
export const editExperience = async (req, res) => {
  try {
    const experienceId = req.params.id;

    const {
      experienceTitle,
      experienceCompany,
      experienceRole,
      experienceStart,
      experienceEnd,
      isCurrentlyWorking,
    } = req.body;

    const updatedData = {
      experienceTitle,
      experienceCompany,
      experienceRole,
      experienceStart: new Date(experienceStart),
      isCurrentlyWorking:
        isCurrentlyWorking === "true" || isCurrentlyWorking === true,
    };

    // If not currently working, update experienceEnd
    if (!updatedData.isCurrentlyWorking && experienceEnd) {
      updatedData.experienceEnd = new Date(experienceEnd);
    } else {
      updatedData.experienceEnd = null;
    }

    // Optional image update
    if (req.file) {
      const fileDataUri = `data:${
        req.file.mimetype
      };base64,${req.file.buffer.toString("base64")}`;

      const uploadedImage = await cloudinary.uploader.upload(fileDataUri, {
        folder: "portfolioExperience",
      });

      updatedData.experienceImage = uploadedImage.secure_url;
    }

    const updatedExperience = await experienceModel.findByIdAndUpdate(
      experienceId,
      updatedData,
      { new: true }
    );

    if (!updatedExperience) {
      return res.status(404).json({
        message: "Experience not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Experience updated successfully",
      success: true,
      updatedExperience,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Server error: ${error.message}`,
      success: false,
    });
  }
};

// ✅ DELETE: Delete Experience by ID
export const deleteExperience = async (req, res) => {
  try {
    const experienceId = req.params.id;

    const deleted = await experienceModel.findByIdAndDelete(experienceId);

    if (!deleted) {
      return res.status(404).json({
        message: "Experience not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Experience deleted successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Server error: ${error.message}`,
      success: false,
    });
  }
};
