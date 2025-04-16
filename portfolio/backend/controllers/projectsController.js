import cloudinary from "../config/cloudinary.js";
import projectsModel from "../models/projectsModel.js";

export const createProject = async (req, res) => {
  try {
    const { projectName, liveDemoLink, projectType, githubLink, description } =
      req.body;

    if (
      !projectName ||
      !req.file ||
      !liveDemoLink ||
      !projectType ||
      !githubLink ||
      !description
    ) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    // Upload file to Cloudinary using file.path
    const uploadedImage = await cloudinary.uploader.upload(req.file.path, {
      folder: "portfolioProjects",
    });

    const newProject = {
      projectName,
      projectImage: uploadedImage.secure_url,
      liveDemoLink,
      projectType,
      githubLink,
      description,
    };

    const savedProject = await projectsModel.create(newProject);

    return res.status(201).json({
      message: "Project added successfully",
      success: true,
      data: savedProject,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Server error ${error}`, success: false });
  }
};
