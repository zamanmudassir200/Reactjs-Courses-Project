import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/context";

const Certificates = () => {
  const { getAllCertificates, certificates } = useContext(AppContext);

  useEffect(() => {
    getAllCertificates();
  }, []);

  return (
    <div>
      <h1 className="text-6xl underline font-bold pt-[70px] mb-[25px] text-center">
        Certificates
      </h1>
      {certificates &&
        certificates.length > 0 &&
        certificates.map((cert) => {
          return (
            <div
              key={cert._id}
              className="border-2 border-gray-400 hover:scale-[1.02] transition-all flex sm:flex-row flex-col items-start sm:items-start gap-4 rounded-lg overflow-hidden  justify-between p-5 my-6"
            >
              <div className="flex-1   ">
                <h1 className="font-bold text-5xl my-6 ">
                  {cert.certificateName}
                </h1>
                <p className="font-semibold my-4 text-4xl text-orange-300">
                  From: {cert.certificateFrom}
                </p>
                <p className="font-semibold my-4 text-4xl text-orange-300">
                  By: {cert.certificateBy}
                </p>
                <a
                  className="font-light text-blue-300 text-3xl"
                  target="_blank"
                  href={cert.certificateLink}
                >
                  Checkout
                </a>
              </div>
              <div className="h-full overflow-hidden">
                <a href={cert.certificateLink} target="_blank">
                  <img
                    className="sm:w-[240px] object-contain w-full hover:scale-[1.02]  sm:hover:scale-125 transition-all cursor-pointer"
                    src={cert.certificateImage}
                    alt={cert.certificateName}
                  />
                </a>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Certificates;
