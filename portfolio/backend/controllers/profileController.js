// import cloudinary from "../config/cloudinary.js";
// import profileModel from "../models/profileModel.js";
// import fs from "fs";

// // Upload Profile Image
// export const uploadProfile = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({
//         message: "Profile image is required",
//         success: false,
//       });
//     }

//     const uploadedImage = await cloudinary.uploader.upload(req.file.path, {
//       folder: "portfolioProjects",
//     });

//     const newProfile = {
//       profileImage: uploadedImage.secure_url,
//     };

//     const savedProfile = await profileModel.create(newProfile);

//     return res.status(201).json({
//       message: "Profile Image Uploaded Successfully",
//       success: true,
//       savedProfile,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: `Server error: ${error.message}`,
//       success: false,
//     });
//   }
// };
import cloudinary from "../config/cloudinary.js";
import profileModel from "../models/profileModel.js";

// Upload Profile Image
export const uploadProfile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "Profile image is required",
        success: false,
      });
    }

    // Convert buffer to base64 data URI
    const fileDataUri = `data:${
      req.file.mimetype
    };base64,${req.file.buffer.toString("base64")}`;

    // Upload to Cloudinary from memory buffer
    const uploadedImage = await cloudinary.uploader.upload(fileDataUri, {
      folder: "portfolioProjects",
    });

    const newProfile = {
      profileImage: uploadedImage.secure_url,
      cloudinaryId: uploadedImage.public_id, // Save public_id to DB
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

    // Check if profile exists
    const profile = await profileModel.findById(id);
    if (!profile) {
      return res.status(404).json({
        message: "Profile not found",
        success: false,
      });
    }

    // Convert buffer to base64 format
    const fileDataUri = `data:${
      req.file.mimetype
    };base64,${req.file.buffer.toString("base64")}`;

    // Upload the image directly from memory buffer
    const uploadedImage = await cloudinary.uploader.upload(fileDataUri, {
      folder: "portfolioProjects",
    });

    // Update the profile image
    profile.profileImage = uploadedImage.secure_url;
    profile.cloudinaryId = uploadedImage.public_id;

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
    if (profile.cloudinaryId) {
      await cloudinary.uploader.destroy(profile.cloudinaryId);
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
