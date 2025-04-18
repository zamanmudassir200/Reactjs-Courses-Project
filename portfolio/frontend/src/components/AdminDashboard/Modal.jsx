import React from "react";

const Modal = ({
  loading,
  isOpen,
  title,
  children,
  onClose,
  onSubmit,
  activeTab,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl w-full max-w-3xl p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-4xl font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-600 text-4xl"
          >
            &times;
          </button>
        </div>

        <div className="my-10">{children}</div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-2xl bg-gray-300 text-black rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={loading}
            onClick={onSubmit}
            className={`px-4 py-2 text-2xl text-white rounded-lg  ${
              loading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {loading ? "Submitting..." : `Add ${activeTab.slice(0, -1)}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
