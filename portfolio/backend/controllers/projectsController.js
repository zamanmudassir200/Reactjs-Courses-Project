import cloudinary from "../config/cloudinary.js";
import projectsModel from "../models/projectsModel.js";

export const addProject = async (req, res) => {
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

    const fileBuffer = req.file.buffer.toString("base64");
    const uploadedImage = await cloudinary.uploader.upload(
      `data:${req.file.mimetype};base64,${fileBuffer}`,
      {
        folder: "portfolioProjects",
      }
    );

    const newProject = {
      projectName,
      projectImage: uploadedImage.secure_url,
      liveDemoLink,
      projectType,
      githubLink,
      description,
    };

    const savedProject = await projectsModel.create(newProject);
    return res
      .status(201)
      .json({
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

export const getAllProjects = async (req, res) => {
  try {
    const projects = await projectsModel.find().sort({ createdAt: -1 });
    return res
      .status(200)
      .json({
        message: "Projects fetched successfully",
        success: true,
        projects,
      });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Server error ${error}`, success: false });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProject = await projectsModel.findByIdAndDelete(id);
    if (!deletedProject)
      return res
        .status(404)
        .json({ message: "Project not found", success: false });

    return res
      .status(200)
      .json({ message: "Project deleted successfully", success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Server error ${error}`, success: false });
  }
};

export const editProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { projectName, liveDemoLink, projectType, githubLink, description } =
      req.body;

    const existingProject = await projectsModel.findOne({ projectName });
    if (existingProject && existingProject._id.toString() !== id) {
      return res
        .status(400)
        .json({ message: "Project name already exists", success: false });
    }

    let updatedFields = {
      projectName,
      liveDemoLink,
      projectType,
      githubLink,
      description,
    };

    if (req.file) {
      const fileBuffer = req.file.buffer.toString("base64");
      const uploadedImage = await cloudinary.uploader.upload(
        `data:${req.file.mimetype};base64,${fileBuffer}`,
        {
          folder: "portfolioProjects",
        }
      );
      updatedFields.projectImage = uploadedImage.secure_url;
    }

    const updatedProject = await projectsModel.findByIdAndUpdate(
      id,
      updatedFields,
      { new: true, runValidators: true }
    );

    if (!updatedProject) {
      return res
        .status(404)
        .json({ message: "Project not found", success: false });
    }

    return res
      .status(200)
      .json({
        message: "Project updated successfully",
        success: true,
        data: updatedProject,
      });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Server error ${error}`, success: false });
  }
};
