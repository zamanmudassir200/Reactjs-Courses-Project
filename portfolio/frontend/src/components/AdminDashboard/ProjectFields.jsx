import React from "react";

const ProjectFields = ({ handleInputChange, projectData }) => {
  return (
    <form className="space-y-4">
      <input
        type="text"
        name="projectName"
        placeholder="Project Name"
        value={projectData.projectName}
        onChange={handleInputChange}
        className="w-full text-2xl border p-2 rounded"
      />

      <input
        type="file"
        name="projectImage"
        onChange={handleInputChange}
        className="w-full text-2xl border p-2 rounded"
      />

      <input
        type="text"
        name="liveDemoLink"
        placeholder="Live Demo Link"
        value={projectData.liveDemoLink}
        onChange={handleInputChange}
        className="w-full text-2xl border p-2 rounded"
      />

      {/* 👇 Select Dropdown for Project Type */}
      <select
        name="projectType"
        value={projectData.projectType}
        onChange={handleInputChange}
        className="w-full text-2xl border p-2 rounded bg-white"
      >
        <option value="">Select Project Type</option>
        <option value="MERN Stack">MERN Stack</option>
        <option value="React">React</option>
        <option value="JavaScript">JavaScript</option>
      </select>

      <input
        type="text"
        name="githubLink"
        placeholder="GitHub Link"
        value={projectData.githubLink}
        onChange={handleInputChange}
        className="w-full text-2xl border p-2 rounded"
      />

      <textarea
        name="description"
        placeholder="Description"
        value={projectData.description}
        rows={"4"}
        onChange={handleInputChange}
        className="w-full text-2xl border p-2 rounded"
      />
    </form>
  );
};

export default ProjectFields;
