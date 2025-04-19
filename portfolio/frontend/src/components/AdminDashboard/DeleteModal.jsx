const DeleteModal = ({ isOpen, onClose, onConfirm, loading, itemName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-xl max-w-2xl">
        <h2 className="text-3xl font-extrabold mb-4">Confirm Delete</h2>
        <p className="text-3xl ">
          Are you sure you want to delete <strong>{itemName}</strong>?
        </p>
        <div className="flex justify-end mt-6 gap-4">
          <button
            onClick={onClose}
            className="px-4 text-2xl py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className={`px-4 py-2 text-2xl duration-300 transition-all text-white rounded ${
              loading ? "bg-red-300" : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {loading ? "Deleting..." : "Yes, Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
