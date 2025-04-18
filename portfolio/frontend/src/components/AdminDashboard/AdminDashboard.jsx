import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/context.jsx";
import LogoutModal from "../Logout/LogoutModal.jsx";
import Modal from "./Modal";
import axios, { AxiosError } from "axios";
import url from "../../url/url.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteModal from "./DeleteModal.jsx";
import ProjectFields from "./ProjectFields.jsx";
import CertificateFields from "./CertificateFields.jsx";
import SkillFileds from "./SkillFileds.jsx";
import ProfileField from "./ProfileField.jsx";
import ProfileList from "./ProfileList.jsx";
import SkillsList from "./SkillsList.jsx";
import CertificateList from "./CertificateList.jsx";
import ProjectList from "./ProjectList.jsx";
const AdminDashboard = () => {
  const {
    checkLoginStatus,
    showLogoutModal,
    getAllCertificates,
    getAllSkills,
    getAllProjects,
    skills,
    setProjects,
    setCertificates,
    setSkills,
    projects,
    certificates,
    getAllProfiles,
    profiles,
    setProfiles,
  } = useContext(AppContext);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("projects");
  const [loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
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
    getAllProfiles();
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
      } else if (selectedType === "profiles") {
        setProfiles((prev) =>
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
  const handleSubmitProfile = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("profileImage", profileImage);

      await axios.post(`${url}/profiles/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      toast.success("Proile Uploaded Successfully!");
      setProfileImage(null);

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
    if (activeTab === "profiles") return handleSubmitProfile();
  };

  const [expanded, setExpanded] = useState({}); // to track which project is expanded

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const tabs = ["projects", "certificates", "skills", "profiles"];

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
          {projects.length === 0 && activeTab === "projects" && (
            <h1 className="text-2xl text-red-500">No projects found!</h1>
          )}
          {projects &&
            projects.length > 0 &&
            activeTab === "projects" &&
            projects.map((project) => {
              const isExpanded = expanded[project._id];
              const isLong = project.description.length > 200;

              return (
                <ProjectList
                  key={project._id}
                  toggleExpand={toggleExpand}
                  project={project}
                  setDeleteModalOpen={setDeleteModalOpen}
                  setSelectedType={setSelectedType}
                  setSelectedItem={setSelectedItem}
                  isExpanded={isExpanded}
                  isLong={isLong}
                />
              );
            })}
          {certificates.length === 0 && activeTab === "certificates" && (
            <h1 className="text-2xl text-red-500">No certificates found!</h1>
          )}
          {certificates &&
            certificates.length > 0 &&
            activeTab === "certificates" &&
            certificates.map((certificate) => {
              return (
                <CertificateList
                  key={certificate._id}
                  certificate={certificate}
                  setDeleteModalOpen={setDeleteModalOpen}
                  setSelectedType={setSelectedType}
                  setSelectedItem={setSelectedItem}
                />
              );
            })}
          {skills.length === 0 && activeTab === "skills" && (
            <h1 className=" text-2xl text-red-500">No skills found!</h1>
          )}
          {skills &&
            skills.length > 0 &&
            activeTab === "skills" &&
            skills.map((skill) => {
              return (
                <SkillsList
                  key={skill._id}
                  skill={skill}
                  setDeleteModalOpen={setDeleteModalOpen}
                  setSelectedType={setSelectedType}
                  setSelectedItem={setSelectedItem}
                />
              );
            })}
          {profiles.length === 0 && activeTab === "profiles" && (
            <h1 className=" text-2xl text-red-500">No profiles found!</h1>
          )}
          {profiles &&
            profiles.length > 0 &&
            activeTab === "profiles" &&
            profiles.map((profile) => {
              return (
                <ProfileList
                  key={profile._id}
                  profile={profile}
                  setDeleteModalOpen={setDeleteModalOpen}
                  setSelectedType={setSelectedType}
                  setSelectedItem={setSelectedItem}
                />
              );
            })}
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
        {activeTab === "projects" && (
          <ProjectFields
            projectData={projectData}
            handleInputChange={handleInputChange}
          />
        )}
        {activeTab === "certificates" && (
          <CertificateFields
            certificateData={certificateData}
            handleCertInputChange={handleCertInputChange}
          />
        )}
        {activeTab === "skills" && (
          <SkillFileds
            skillData={skillData}
            handleSkillsInputChange={handleSkillsInputChange}
          />
        )}
        {activeTab === "profiles" && (
          <ProfileField
            profileImage={profileImage}
            setProfileImage={setProfileImage}
          />
        )}
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
