import cloudinary from "../config/cloudinary.js";
import skillsModel from "../models/skillsModel.js";

// Add Skill (Already exists)
export const addSkill = async (req, res) => {
  try {
    const { skillName } = req.body;

    if (!skillName || !req.file) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    const uploadedSkillImage = await cloudinary.uploader.upload(req.file.path, {
      folder: "portfolioProjects",
    });

    const newSkill = {
      skillName,
      skillImage: uploadedSkillImage.secure_url,
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
      .json({ message: `Server error ${error}`, success: false });
  }
};

// Get All Skills
export const getAllSkills = async (req, res) => {
  try {
    const skills = await skillsModel.find({});
    return res.status(200).json({
      message: "All skills fetched successfully",
      success: true,
      data: skills,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Server error ${error}`, success: false });
  }
};

// Edit Skill
export const editSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const { skillName } = req.body;

    const updateData = { skillName };

    if (req.file) {
      const uploadedSkillImage = await cloudinary.uploader.upload(
        req.file.path,
        {
          folder: "portfolioProjects",
        }
      );
      updateData.skillImage = uploadedSkillImage.secure_url;
    }

    const updatedSkill = await skillsModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedSkill) {
      return res
        .status(404)
        .json({ message: "Skill not found", success: false });
    }

    return res.status(200).json({
      message: "Skill updated successfully",
      success: true,
      data: updatedSkill,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Server error ${error}`, success: false });
  }
};

// Delete Skill
export const deleteSkill = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await skillsModel.findByIdAndDelete(id);

    if (!deleted) {
      return res
        .status(404)
        .json({ message: "Skill not found", success: false });
    }

    return res.status(200).json({
      message: "Skill deleted successfully",
      success: true,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Server error ${error}`, success: false });
  }
};
