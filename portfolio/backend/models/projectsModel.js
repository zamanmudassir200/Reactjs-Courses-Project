import mongoose from "mongoose";

const projectsSchema = mongoose.Schema({
  projectName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  projectImage: {
    type: String,
    required: true,
  },
  liveDemoLink: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  projectType: {
    type: String,
    trim: true,
    required: true,
  },
  githubLink: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
});

const projectsModel = mongoose.model("project", projectsSchema);

export default projectsModel;
