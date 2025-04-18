import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

const CertificateList = ({
  certificate,
  setSelectedItem,
  setSelectedType,
  setDeleteModalOpen,
}) => {
  return (
    <div
      key={certificate._id}
      className="relative bg-white border-2 border-gray-300  shadow-md rounded-lg p-4 mb-4"
    >
      <div className="w-full h-100 overflow-hidden ">
        <img
          src={certificate.certificateImage}
          alt={certificate.certificateName}
          className="w-full h-full object-contain rounded "
        />
      </div>
      <h3 className="my-7 text-4xl font-bold capitalize">
        {certificate.certificateName}
      </h3>
      <p className="text-3xl text-gray-600">
        <strong>From:</strong> {certificate.certificateFrom} <br />
        <strong>By:</strong> {certificate.certificateBy}
      </p>
      <a
        href={certificate.certificateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 text-2xl underline mt-2 inline-block"
      >
        View Certificate
      </a>
      <div
        onClick={() => {
          setSelectedItem(certificate); // or project/certificate
          setSelectedType("certificates");
          setDeleteModalOpen(true);
        }}
        className="absolute -top-5 -right-5 cursor-pointer"
      >
        <RiDeleteBin5Fill className="text-red-500" size={29} />
      </div>
    </div>
  );
};

export default CertificateList;
