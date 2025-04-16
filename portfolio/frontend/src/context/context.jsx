import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import url from "../url/url";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [showNavItems, setShowNavItems] = useState(false);
  const [showNavIcon, setShowNavIcon] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
      console.log(response.data);
      // If logged in, it will show the user details
      setIsLoggedIn(true);
    } catch (error) {
      console.log("Not logged in:", error.response?.data?.message);
    }
  };
  // Check cookies on mount
  useEffect(() => {
    checkLoginStatus();
  }, []);

  const logout = async () => {
    try {
      // Send POST request to logout endpoint
      await axios.post(`${url}/users/logout`, {}, { withCredentials: true });
      navigate("/");
      // Update frontend state
      setIsLoggedIn(false); // Set login state to false
      setShowLogoutModal(false); // Close the modal on logout
    } catch (error) {
      console.error(
        "Logout failed:",
        error.response?.data?.message || error.message
      );
    }
  };
  const openLogoutModal = () => setShowLogoutModal(true);
  const closeLogoutModal = () => setShowLogoutModal(false);

  return (
    <AppContext.Provider
      value={{
        showNavItems,
        showNavIcon,
        handleShowItems,
        checkLoginStatus,
        handleHideItems,
        isLoggedIn,
        setIsLoggedIn,
        logout,
        showLogoutModal, // Provide modal visibility state
        openLogoutModal, // Provide function to open modal
        closeLogoutModal, // Provide function to close modal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
