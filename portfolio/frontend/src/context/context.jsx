import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import url from "../url/url.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // ensure it's imported

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [showNavItems, setShowNavItems] = useState(false);
  const [showNavIcon, setShowNavIcon] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [skills, setSkills] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [experiences, setExperiences] = useState([]);

  const [showLogoutModal, setShowLogoutModal] = useState(false); // New state for the modal
  const navigate = useNavigate();
  const handleShowItems = () => {
    setShowNavItems(true);
    setShowNavIcon(false);
  };

  const handleHideItems = () => {
    setShowNavItems(false);
    setShowNavIcon(true);
  };
  const checkLoginStatus = async () => {
    try {
      const response = await axios.get(`${url}/users/is-logged-in`, {
        withCredentials: true,
      });
      // If logged in, it will show the user details
      setIsLoggedIn(true);
    } catch (error) {
      navigate("/");
      console.log("Not logged in:", error.response?.data?.message);
    }
  };
  // Check cookies on mount
  useEffect(() => {
    checkLoginStatus();
  }, []);

  const logout = async () => {
    setLoading(true);
    try {
      // Send POST request to logout endpoint
      await axios.post(`${url}/users/logout`, {}, { withCredentials: true });
      setLoading(false);
      navigate("/");
      // Update frontend state
      setIsLoggedIn(false); // Set login state to false
      setShowLogoutModal(false); // Close the modal on logout
    } catch (error) {
      setLoading(false);

      console.error(
        "Logout failed:",
        error.response?.data?.message || error.message
      );
    }
  };
  const getAllProjects = async () => {
    try {
      const response = await axios.get(`${url}/projects`, {
        withCredentials: true,
      });
      setProjects(response.data.projects);
    } catch (error) {
      if (error.response?.status === 401) {
      } else {
        toast.error("Error occurred during fetching projects");
      }
    }
  };

  const getAllCertificates = async () => {
    try {
      const response = await axios.get(`${url}/certificates`, {
        withCredentials: true,
      });

      setCertificates(response.data.certificates);
    } catch (error) {
      toast.error("Error occured during fetching projects");
    }
  };
  const getAllProfiles = async () => {
    try {
      const response = await axios.get(`${url}/profiles`, {
        withCredentials: true,
      });

      setProfiles(response.data.profiles);
    } catch (error) {
      toast.error("Error occured during fetching projects");
    }
  };
  const getAllSkills = async () => {
    try {
      const response = await axios.get(`${url}/skills`, {
        withCredentials: true,
      });

      setSkills(response.data.skills);
    } catch (error) {
      toast.error("Error occured during fetching projects");
    }
  };

  const getAllExperiences = async () => {
    try {
      const response = await axios.get(`${url}/experiences`, {
        withCredentials: true,
      });
      setExperiences(response.data.experiences);
    } catch (error) {
      if (error.response?.status === 401) {
        navigate("/");
      } else {
        toast.error("Error occurred during fetching experiences");
      }
    }
  };

  const openLogoutModal = () => setShowLogoutModal(true);
  const closeLogoutModal = () => setShowLogoutModal(false);

  return (
    <AppContext.Provider
      value={{
        showNavItems,
        setLoading,
        getAllExperiences,
        experiences,
        setExperiences,
        loading,
        skills,
        setSkills,
        showNavIcon,
        getAllProjects,
        handleShowItems,
        checkLoginStatus,
        handleHideItems,
        setCertificates,
        getAllProfiles,
        profiles,
        setProfiles,
        setProjects,
        certificates,
        getAllCertificates,
        getAllSkills,
        isLoggedIn,
        setIsLoggedIn,
        logout,
        showLogoutModal, // Provide modal visibility state
        openLogoutModal, // Provide function to open modal
        closeLogoutModal, // Provide function to close modal
        projects,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
