import cloudinary from "../config/cloudinary.js";
import skillsModel from "../models/skillsModel.js";

// Add Skill
export const addSkill = async (req, res) => {
  try {
    const { skillName } = req.body;

    if (!skillName || !req.file) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const fileDataUri = `data:${
      req.file.mimetype
    };base64,${req.file.buffer.toString("base64")}`;

    const uploadedSkillImage = await cloudinary.uploader.upload(fileDataUri, {
      folder: "portfolioProjects",
    });

    const newSkill = {
      skillName,
      skillImage: uploadedSkillImage.secure_url,
      cloudinaryId: uploadedSkillImage.public_id,
    };

    const savedSkill = await skillsModel.create(newSkill);

    return res.status(201).json({
      message: "Skill added successfully",
      success: true,
      data: savedSkill,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Server error: ${error.message}`, success: false });
  }
};

// Get All Skills
export const getAllSkills = async (req, res) => {
  try {
    const skills = await skillsModel.find({});
    return res.status(200).json({
      message: "All skills fetched successfully",
      success: true,
      skills,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Server error: ${error.message}`, success: false });
  }
};

// Edit Skill
export const editSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const { skillName } = req.body;

    const skill = await skillsModel.findById(id);
    if (!skill) {
      return res
        .status(404)
        .json({ message: "Skill not found", success: false });
    }

    const updateData = { skillName };

    if (req.file) {
      // Delete old image from Cloudinary
      if (skill.cloudinaryId) {
        await cloudinary.uploader.destroy(skill.cloudinaryId);
      }

      const fileDataUri = `data:${
        req.file.mimetype
      };base64,${req.file.buffer.toString("base64")}`;

      const uploadedSkillImage = await cloudinary.uploader.upload(fileDataUri, {
        folder: "portfolioProjects",
      });

      updateData.skillImage = uploadedSkillImage.secure_url;
      updateData.cloudinaryId = uploadedSkillImage.public_id;
    }

    const updatedSkill = await skillsModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    return res.status(200).json({
      message: "Skill updated successfully",
      success: true,
      data: updatedSkill,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Server error: ${error.message}`, success: false });
  }
};

// Delete Skill
export const deleteSkill = async (req, res) => {
  try {
    const { id } = req.params;

    const skill = await skillsModel.findById(id);
    if (!skill) {
      return res
        .status(404)
        .json({ message: "Skill not found", success: false });
    }

    // Delete image from Cloudinary
    if (skill.cloudinaryId) {
      await cloudinary.uploader.destroy(skill.cloudinaryId);
    }

    await skillsModel.findByIdAndDelete(id);

    return res.status(200).json({
      message: "Skill deleted successfully",
      success: true,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Server error: ${error.message}`, success: false });
  }
};
