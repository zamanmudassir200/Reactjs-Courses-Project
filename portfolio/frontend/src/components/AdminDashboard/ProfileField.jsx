import React from "react";

const ProfileField = ({ setProfileImage }) => {
  return (
    <form className="space-y-4">
      <input
        type="file"
        name="profileImage"
        accept="image/*"
        placeholder="Upload Profile"
        onChange={(e) => setProfileImage(e.target.files[0])}
        className="w-full text-2xl border p-2 rounded"
      />
    </form>
  );
};

export default ProfileField;
