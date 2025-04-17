import cloudinary from "../config/cloudinary.js";
import skillsModel from "../models/skillsModel.js";

export const addSkill = async (req, res) => {
  try {
    const { skillName, skillImage } = req.body;

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
