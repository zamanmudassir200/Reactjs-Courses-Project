// AppContext.js
import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showNavItems, setShowNavItems] = useState(false);
  const [showNavIcon, setShowNavIcon] = useState(true);

  const handleShowItems = () => {
    setShowNavItems(true);
    setShowNavIcon(false);
  };

  const handleHideItems = () => {
    setShowNavItems(false);
    setShowNavIcon(true);
  };

  return (
    <AppContext.Provider
      value={{ showNavItems, showNavIcon, handleShowItems, handleHideItems }}
    >
      {children}
    </AppContext.Provider>
  );
};
