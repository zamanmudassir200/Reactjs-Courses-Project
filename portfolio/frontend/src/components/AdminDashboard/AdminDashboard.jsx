import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/context";
import LogoutModal from "../Logout/LogoutModal";
const AdminDashboard = () => {
  const { checkLoginStatus, setShowLogoutModal, showLogoutModal } =
    useContext(AppContext);
  useEffect(() => {
    checkLoginStatus();
  }, []);
  return (
    <div className="min-h-screen">
      AdminDashboard
      {showLogoutModal && <LogoutModal />}
    </div>
  );
};

export default AdminDashboard;
