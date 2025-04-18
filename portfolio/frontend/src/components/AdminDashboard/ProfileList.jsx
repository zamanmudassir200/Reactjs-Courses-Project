import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

const ProfileList = ({
  profile,
  setSelectedItem,
  setSelectedType,
  setDeleteModalOpen,
}) => {
  return (
    <div
      key={profile._id}
      className="p-4 relative mb-4 rounded-lg shadow-md border border-gray-200 bg-white"
    >
      <div className="w-50 h-50 rounded-full overflow-hidden mx-auto mb-2">
        <img
          className="w-full h-full object-cover"
          src={profile.profileImage}
          alt="Profile"
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-600">
        <p className="text-2xl">
          <span className="font-semibold ">Created:</span>{" "}
          {new Date(profile.createdAt).toLocaleString()}
        </p>
        <p className="text-2xl">
          <span className="font-semibold">Updated:</span>{" "}
          {new Date(profile.updatedAt).toLocaleString()}
        </p>
      </div>
      <div
        onClick={() => {
          setSelectedItem(profile);
          setSelectedType("profiles");
          setDeleteModalOpen(true);
        }}
        className="absolute -top-5 -right-5 cursor-pointer"
      >
        <RiDeleteBin5Fill className="text-red-500" size={29} />
      </div>
    </div>
  );
};

export default ProfileList;
