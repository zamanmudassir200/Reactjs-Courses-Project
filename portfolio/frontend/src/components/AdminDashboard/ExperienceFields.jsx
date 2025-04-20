import React from "react";

const Experience = ({ handleChange, experienceData }) => {
  return (
    <form className="space-y-4">
      <input
        type="text"
        name="experienceTitle"
        placeholder="Experience Title"
        value={experienceData.experienceTitle}
        onChange={handleChange}
        className="w-full text-2xl border p-2 rounded"
        required
      />
      <input
        type="text"
        name="experienceCompany"
        placeholder="Company"
        value={experienceData.experienceCompany}
        onChange={handleChange}
        className="w-full text-2xl border p-2 rounded"
        required
      />
      <input
        type="text"
        name="experienceRole"
        placeholder="Role"
        value={experienceData.experienceRole}
        onChange={handleChange}
        className="w-full text-2xl border p-2 rounded"
        required
      />
      <input
        type="date"
        name="experienceStart"
        value={experienceData.experienceStart}
        onChange={handleChange}
        className="w-full text-2xl border p-2 rounded"
        required
      />

      <input
        type="date"
        name="experienceEnd"
        value={experienceData.experienceEnd}
        onChange={handleChange}
        disabled={experienceData.isCurrentlyWorking}
        className={`w-full text-2xl border p-2 rounded ${
          experienceData.isCurrentlyWorking
            ? "bg-gray-100 cursor-not-allowed"
            : ""
        }`}
      />

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="isCurrentlyWorking"
          name="isCurrentlyWorking"
          checked={experienceData.isCurrentlyWorking}
          onChange={handleChange}
          className="w-5 h-5"
        />
        <label htmlFor="isCurrentlyWorking" className="text-xl select-none">
          Currently Working Here
        </label>
      </div>

      <input
        type="file"
        name="experienceImage"
        onChange={handleChange}
        accept="image/*"
        className="w-full text-2xl border p-2 rounded"
      />
    </form>
  );
};

export default Experience;
