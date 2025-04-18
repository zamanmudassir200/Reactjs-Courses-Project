import cloudinary from "../config/cloudinary.js";
import profileModel from "../models/profileModel.js";
import fs from "fs";

// Upload Profile Image
export const uploadProfile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "Profile image is required",
        success: false,
      });
    }

    const uploadedImage = await cloudinary.uploader.upload(req.file.path, {
      folder: "portfolioProjects",
    });

    // Remove temp file from server
    fs.unlinkSync(req.file.path);

    const newProfile = {
      profileImage: uploadedImage.secure_url,
    };

    const savedProfile = await profileModel.create(newProfile);

    return res.status(201).json({
      message: "Profile Image Uploaded Successfully",
      success: true,
      savedProfile,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Server error: ${error.message}`,
      success: false,
    });
  }
};

// Edit Profile Image
export const editProfile = async (req, res) => {
  try {
    const { id } = req.params;

    if (!req.file) {
      return res.status(400).json({
        message: "New profile image is required",
        success: false,
      });
    }

    const profile = await profileModel.findById(id);
    if (!profile) {
      return res.status(404).json({
        message: "Profile not found",
        success: false,
      });
    }

    const uploadedImage = await cloudinary.uploader.upload(req.file.path, {
      folder: "portfolioProjects",
    });

    fs.unlinkSync(req.file.path);

    profile.profileImage = uploadedImage.secure_url;
    const updatedProfile = await profile.save();

    return res.status(200).json({
      message: "Profile image updated successfully",
      success: true,
      updatedProfile,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Server error: ${error.message}`,
      success: false,
    });
  }
};

// Delete Profile
export const deleteProfile = async (req, res) => {
  try {
    const { id } = req.params;

    const profile = await profileModel.findById(id);
    if (!profile) {
      return res.status(404).json({
        message: "Profile not found",
        success: false,
      });
    }

    await profileModel.findByIdAndDelete(id);

    return res.status(200).json({
      message: "Profile deleted successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Server error: ${error.message}`,
      success: false,
    });
  }
};

// Get All Profiles
export const getProfiles = async (req, res) => {
  try {
    const profiles = await profileModel.find().sort({ createdAt: -1 }); // Latest first

    return res.status(200).json({
      message: "Profiles fetched successfully",
      success: true,
      profiles,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Server error: ${error.message}`,
      success: false,
    });
  }
};
