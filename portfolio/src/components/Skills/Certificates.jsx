import React from "react";

const Certificates = () => {
  const certificates = [
    {
      name: "Introduction to Front-End Development",
      link: "https://www.coursera.org/account/accomplishments/records/E8GX5WYK9JW5",
      img: "src/components/Skills/certificates-images/Introduction-to-frontend-web-development.png",
      cerficateFrom: "Meta",
    },
    {
      name: "Programming With JavaScript",
      link: "https://www.coursera.org/account/accomplishments/records/7BAMBS64D2DQ",
      img: "src/components/Skills/certificates-images/Programming-With-JavaScript.png",
      cerficateFrom: "Meta",
    },
    {
      name: "Version Control",
      link: "https://www.coursera.org/account/accomplishments/records/J675C2D5XB4V",
      img: "src/components/Skills/certificates-images/Version-Control.png",
      cerficateFrom: "Meta",
    },
    {
      name: "React and Redux Certification Test - Youtube Course",
      link: "https://www.kgcoding.in/verify-certificate?serialno=HCORYUOG",
      img: "src/components/Skills/certificates-images/react.png",
      cerficateFrom: "KGCoding by Prashant Sir",
    },
    {
      name: "JavaScript Certification Test - Youtube Course",
      link: "https://www.kgcoding.in/verify-certificate?serialno=FP3KFKY1",
      img: "src/components/Skills/certificates-images/js.png",
      cerficateFrom: "KGCoding by Prashant Sir",
    },
    {
      name: "Namaste JavaScript",
      link: "https://namastedev.com/zamanmudassir200/certificates/namaste-javascript",
      img: "src/components/Skills/certificates-images/namaste-js.webp",
      cerficateFrom: "NamasteDev.com",
    },
  ];
  return (
    <div>
      <h1 className="text-6xl underline font-bold pt-[70px] mb-[25px] text-center">
        Certificates
      </h1>
      {certificates.map((cert) => {
        return (
          <div
            key={cert.link}
            className="border-2 border-gray-400 hover:scale-[1.02] transition-all flex sm:flex-row flex-col items-start sm:items-start gap-4 rounded-lg overflow-hidden  justify-between p-5 my-6"
          >
            <div className="flex-1   ">
              <h1 className="font-bold text-5xl my-6 ">{cert.name}</h1>
              <p className="font-semibold my-4 text-4xl text-orange-300">
                From: {cert.cerficateFrom}
              </p>
              <a
                className="font-light text-blue-300 text-3xl"
                target="_blank"
                href={cert.link}
              >
                Checkout
              </a>
            </div>
            <div className="">
              <a href={cert.link} target="_blank">
                <img
                  className="sm:w-[240px] w-full hover:scale-[1.02]  sm:hover:scale-125 transition-all cursor-pointer"
                  src={cert.img}
                  alt={cert.name}
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
