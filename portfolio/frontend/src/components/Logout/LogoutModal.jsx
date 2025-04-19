import React, { useContext } from "react";
import { AppContext } from "../../context/context";

const LogoutModal = () => {
  const { showLogoutModal, loading, closeLogoutModal, logout } =
    useContext(AppContext);

  return (
    showLogoutModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-[200] flex justify-center items-center">
        <div className="bg-white p-6 rounded-xl max-w-2xl w-full">
          <h2 className="text-3xl text-black font-bold mb-4">
            Are you sure you want to logout?
          </h2>
          <div className="flex justify-end gap-4">
            <button
              onClick={logout}
              disabled={loading}
              className={`px-4 py-2 bg-red-500 text-2xl text-white rounded-lg hover:bg-red-600 ${
                loading && "bg-red-300"
              }`}
            >
              {loading ? "Please wait..." : "Yes"}
            </button>
            <button
              onClick={closeLogoutModal}
              className="px-4 py-2 bg-gray-300 text-2xl text-black rounded-lg hover:bg-gray-400"
            >
              No
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default LogoutModal;
