import React, { useState, useContext, useEffect } from "react";
import { RiDeleteBin5Fill, RiH1 } from "react-icons/ri";

import { AppContext } from "../../context/context";
import LogoutModal from "../Logout/LogoutModal";
import Modal from "./Modal";
import axios, { AxiosError } from "axios";
import url from "../../url/url.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteModal from "./DeleteModal.jsx";
const AdminDashboard = () => {
  const {
    checkLoginStatus,
    showLogoutModal,
    getAllCertificates,
    getAllSkills,
    getAllProjects,
    skills,
    projects,
    certificates,
  } = useContext(AppContext);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("projects");
  const [loading, setLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [certificateData, setCertificateData] = useState({
    certificateName: "",
    certificateImage: null,
    certificateLink: "",
    certificateFrom: "",
    certificateBy: "",
  });

  const [skillData, setSkillData] = useState({
    skillName: "",
    skillImage: null,
  });
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedType, setSelectedType] = useState("");
  const [projectData, setProjectData] = useState({
    projectName: "",
    projectImage: null,
    liveDemoLink: "",
    projectType: "",
    githubLink: "",
    description: "",
  });

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setProjectData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };
  const handleCertInputChange = (e) => {
    const { name, value, files } = e.target;
    setCertificateData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };
  const handleSkillsInputChange = (e) => {
    const { name, value, files } = e.target;
    setSkillData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  useEffect(() => {
    getAllProjects();
    getAllCertificates();
    getAllSkills();
  }, []);

  const handleDeleteConfirmed = async () => {
    if (!selectedItem || !selectedType) return;

    try {
      await axios.delete(`${url}/${selectedType}/${selectedItem._id}`, {
        withCredentials: true,
      });

      toast.success(`${selectedType} deleted successfully!`);

      // Update UI
      if (selectedType === "skills") {
        setSkills((prev) =>
          prev.filter((item) => item._id !== selectedItem._id)
        );
      } else if (selectedType === "projects") {
        setProjects((prev) =>
          prev.filter((item) => item._id !== selectedItem._id)
        );
      } else if (selectedType === "certificates") {
        setCertificates((prev) =>
          prev.filter((item) => item._id !== selectedItem._id)
        );
      }
    } catch (error) {
      toast.error("Error deleting item");
    } finally {
      setDeleteModalOpen(false);
      setSelectedItem(null);
      setSelectedType("");
    }
  };

  const handleSubmitProject = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("projectName", projectData.projectName);
      formData.append("projectImage", projectData.projectImage);
      formData.append("liveDemoLink", projectData.liveDemoLink);
      formData.append("projectType", projectData.projectType);
      formData.append("githubLink", projectData.githubLink);
      formData.append("description", projectData.description);

      await axios.post(`${url}/projects/`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Project added successfully!");
      setProjectData({
        projectName: "",
        projectImage: null,
        liveDemoLink: "",
        projectType: "",
        githubLink: "",
        description: "",
      });

      setTimeout(() => {
        setShowModal(false);
      }, 1500);
    } catch (error) {
      const err =
        error instanceof AxiosError
          ? error.response?.data?.message || "Something went wrong"
          : "Something went wrong";
      toast.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitCertificate = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("certificateName", certificateData.certificateName);
      formData.append("certificateImage", certificateData.certificateImage);
      formData.append("certificateLink", certificateData.certificateLink);
      formData.append("certificateFrom", certificateData.certificateFrom);
      formData.append("certificateBy", certificateData.certificateBy);

      await axios.post(`${url}/certificates/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      toast.success("Certificate added!");
      setCertificateData({
        certificateName: "",
        certificateImage: null,
        certificateLink: "",
        certificateFrom: "",
        certificateBy: "",
      });

      setTimeout(() => {
        setShowModal(false);
      }, 1500);
    } catch (error) {
      const err =
        error instanceof AxiosError
          ? error.response?.data?.message || "Something went wrong"
          : "Something went wrong";
      toast.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitSkill = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("skillName", skillData.skillName);
      formData.append("skillImage", skillData.skillImage);

      await axios.post(`${url}/skills/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      toast.success("Skill added!");
      setSkillData({
        skillName: "",
        skillImage: null,
      });

      setTimeout(() => {
        setShowModal(false);
      }, 1500);
    } catch (error) {
      const err =
        error instanceof AxiosError
          ? error.response?.data?.message || "Something went wrong"
          : "Something went wrong";
      toast.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    if (activeTab === "projects") return handleSubmitProject();
    if (activeTab === "certificates") return handleSubmitCertificate();
    if (activeTab === "skills") return handleSubmitSkill();
  };

  const renderModalFields = () => (
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
      <input
        type="text"
        name="projectType"
        placeholder="Project Type"
        value={projectData.projectType}
        onChange={handleInputChange}
        className="w-full text-2xl border p-2 rounded"
      />
      <input
        type="text"
        name="githubLink"
        placeholder="Github Link"
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
  const renderCertificatesFields = () => (
    <form className="space-y-4">
      <input
        type="text"
        name="certificateName"
        placeholder="Certificate Name"
        value={certificateData.certificateName}
        onChange={handleCertInputChange}
        className="w-full text-2xl border p-2 rounded"
      />
      <input
        type="file"
        name="certificateImage"
        onChange={handleCertInputChange}
        className="w-full text-2xl border p-2 rounded"
      />
      <input
        type="text"
        name="certificateLink"
        placeholder="Certificate Link"
        value={certificateData.certificateLink}
        onChange={handleCertInputChange}
        className="w-full text-2xl border p-2 rounded"
      />
      <input
        type="text"
        name="certificateFrom"
        placeholder="Issued From"
        value={certificateData.certificateFrom}
        onChange={handleCertInputChange}
        className="w-full text-2xl border p-2 rounded"
      />
      <input
        type="text"
        name="certificateBy"
        placeholder="Issued By"
        value={certificateData.certificateBy}
        onChange={handleCertInputChange}
        className="w-full text-2xl border p-2 rounded"
      />
    </form>
  );

  const renderSkillsFields = () => (
    <form className="space-y-4">
      <input
        type="text"
        name="skillName"
        placeholder="Skill Name"
        value={skillData.skillName}
        onChange={handleSkillsInputChange}
        className="w-full text-2xl border p-2 rounded"
      />
      <input
        type="file"
        name="skillImage"
        onChange={handleSkillsInputChange}
        className="w-full text-2xl border p-2 rounded"
      />
    </form>
  );

  const [expanded, setExpanded] = useState({}); // to track which project is expanded

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const tabs = ["projects", "certificates", "skills"];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Panel */}
      <div className="w-full lg:w-1/6 bg-gray-100 p-4 space-y-4">
        <h2 className="text-4xl mb-5 font-bold">Admin Panel</h2>
        <div className="flex lg:flex-col gap-4  flex-row">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`w-full text-left  text-3xl p-2 rounded hover:bg-gray-300 ${
                activeTab === tab ? "bg-gray-300" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-4xl font-bold capitalize">{activeTab}</h2>
          <button
            className="bg-blue-500 text-2xl text-white px-4 py-2 rounded"
            onClick={() => setShowModal(true)}
          >
            Add {activeTab.slice(0, -1)}
          </button>
        </div>
        {/* <div>List of {activeTab} will be displayed here...</div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {projects.length === 0 && (
            <h1 className="text-2xl text-red-500">No projects found!</h1>
          )}
          {projects &&
            projects.length > 0 &&
            activeTab === "projects" &&
            projects.map((project) => {
              const isExpanded = expanded[project._id];
              const isLong = project.description.length > 200;

              return (
                <div
                  key={project._id}
                  className="relative bg-white rounded-2xl shadow-md border-2 border-gray-400 transition-transform transform hover:scale-105 flex flex-col h-[500px]"
                >
                  <div className="h-[50%] w-full border-b-2 overflow-hidden">
                    <img
                      src={project.projectImage}
                      alt={project.projectName}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800">
                        {project.projectName}
                      </h2>

                      <p className="text-[15px] font-light text-gray-600 text-justify tracking-wide leading-relaxed mt-2 mb-2">
                        {isExpanded || !isLong
                          ? project.description
                          : project.description.slice(0, 200) + "..."}{" "}
                        {isLong && (
                          <button
                            onClick={() => toggleExpand(project._id)}
                            className="text-[14px] text-blue-600 hover:underline mb-2"
                          >
                            {isExpanded ? "See less" : "See more"}
                          </button>
                        )}
                      </p>
                    </div>

                    <div className="mt-auto">
                      <div className="flex items-center justify-between text-sm text-blue-600 font-medium">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          className="text-3xl hover:underline"
                        >
                          Github
                        </a>
                        <a
                          href={project.liveDemoLink}
                          target="_blank"
                          className="text-3xl hover:underline"
                        >
                          Live Demo
                        </a>
                      </div>
                      <p className="mt-3 text-3xl text-gray-500 italic capitalize">
                        <strong>Project Type:</strong> {project.projectType}
                      </p>
                    </div>
                    <div
                      onClick={() => {
                        setSelectedItem(project);
                        setSelectedType("projects");
                        setDeleteModalOpen(true);
                      }}
                      className="absolute z-30 -top-5 -right-5 cursor-pointer"
                    >
                      <RiDeleteBin5Fill className="text-red-500" size={29} />
                    </div>
                  </div>
                </div>
              );
            })}
          {certificates.length === 0 && (
            <h1 className="text-2xl text-red-500">No certificates found!</h1>
          )}
          {certificates &&
            certificates.length > 0 &&
            activeTab === "certificates" &&
            certificates.map((certificate) => (
              <div
                key={certificate._id}
                className="relative bg-white border-2 border-gray-300  shadow-md rounded-lg p-4 mb-4"
              >
                <div className="w-full h-100 overflow-hidden ">
                  <img
                    src={certificate.certificateImage}
                    alt={certificate.certificateName}
                    className="w-full h-full object-contain rounded "
                  />
                </div>
                <h3 className="my-7 text-4xl font-bold capitalize">
                  {certificate.certificateName}
                </h3>
                <p className="text-3xl text-gray-600">
                  <strong>From:</strong> {certificate.certificateFrom} <br />
                  <strong>By:</strong> {certificate.certificateBy}
                </p>
                <a
                  href={certificate.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-2xl underline mt-2 inline-block"
                >
                  View Certificate
                </a>
                <div
                  onClick={() => {
                    setSelectedItem(certificate); // or project/certificate
                    setSelectedType("certificates");
                    setDeleteModalOpen(true);
                  }}
                  className="absolute -top-5 -right-5 cursor-pointer"
                >
                  <RiDeleteBin5Fill className="text-red-500" size={29} />
                </div>
              </div>
            ))}
          {skills.length === 0 && (
            <h1 className=" text-2xl text-red-500">No skills found!</h1>
          )}
          {skills &&
            skills.length > 0 &&
            activeTab === "skills" &&
            skills.map((skill) => (
              <div
                key={skill._id}
                className="relative border-2 border-gray-300 bg-white shadow-lg rounded p-4 mb-4 flex flex-col gap-2 items-center justify-between space-x-4"
              >
                <div className="w-full h-full overflow-hidden ">
                  <img
                    src={skill.skillImage}
                    alt={skill.skillName}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-3xl font-semibold">{skill.skillName}</h3>
                <div
                  onClick={() => {
                    setSelectedItem(skill);
                    setSelectedType("skills");
                    setDeleteModalOpen(true);
                  }}
                  className="absolute -top-5 -right-5 cursor-pointer"
                >
                  <RiDeleteBin5Fill className="text-red-500" size={29} />
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* Modal for adding project */}
      <Modal
        isOpen={showModal}
        title={`Add ${activeTab.slice(0, -1)}`}
        onClose={() => setShowModal(false)}
        onSubmit={handleSubmit}
        activeTab={activeTab}
        loading={loading}
      >
        {activeTab === "projects" && renderModalFields()}
        {activeTab === "certificates" && renderCertificatesFields()}
        {activeTab === "skills" && renderSkillsFields()}
      </Modal>

      {showLogoutModal && <LogoutModal />}
      {deleteModalOpen && (
        <DeleteModal
          isOpen={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onConfirm={() => handleDeleteConfirmed()}
          itemName={
            selectedItem?.skillName ||
            selectedItem?.projectName ||
            selectedItem?.certificateName
          }
        />
      )}
    </div>
  );
};

export default AdminDashboard;
