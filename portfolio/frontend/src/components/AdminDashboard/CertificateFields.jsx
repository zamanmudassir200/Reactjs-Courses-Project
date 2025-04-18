import React from "react";

const CertificateFields = ({ certificateData, handleCertInputChange }) => {
  return (
    <form className="space-y-4">
      <input
        type="text"
        name="certificateName"
        placeholder="Certificate Name"
        value={certificateData.certificateName}
        onChange={handleCertInputChange}
        className="w-full text-2xl border p-2 rounded"
      />
      <input
        type="file"
        name="certificateImage"
        onChange={handleCertInputChange}
        className="w-full text-2xl border p-2 rounded"
      />
      <input
        type="text"
        name="certificateLink"
        placeholder="Certificate Link"
        value={certificateData.certificateLink}
        onChange={handleCertInputChange}
        className="w-full text-2xl border p-2 rounded"
      />
      <input
        type="text"
        name="certificateFrom"
        placeholder="Issued From"
        value={certificateData.certificateFrom}
        onChange={handleCertInputChange}
        className="w-full text-2xl border p-2 rounded"
      />
      <input
        type="text"
        name="certificateBy"
        placeholder="Issued By"
        value={certificateData.certificateBy}
        onChange={handleCertInputChange}
        className="w-full text-2xl border p-2 rounded"
      />
    </form>
  );
};

export default CertificateFields;
