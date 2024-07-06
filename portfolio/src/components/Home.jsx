// // import React, { useState } from "react";
// // import styles from "./Home.module.css";
// // import Footer from "./Footer";

// // const Home = () => {
// //   const [tiltStyle, setTiltStyle] = useState({});
// //   const handleMouseMove = (e) => {
// //     const container = e.currentTarget;
// //     const { left, top, width, height } = container.getBoundingClientRect();
// //     const x = (e.clientX - left) / width - 0.5;
// //     const y = (e.clientY - top) / height - 0.5;

// //     const tiltX = y * 30; // Adjust tilt angle on Y-axis
// //     const tiltY = x * -30; // Adjust tilt angle on X-axis

// //     setTiltStyle({
// //       transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
// //     });
// //   };

// //   const handleMouseLeave = () => {
// //     setTiltStyle({
// //       transform: `rotateX(0) rotateY(0)`,
// //     });
// //   };

// //   return (
// //     <>
// //       <section className={styles["hero-section"]}>
// //         <div className={styles.container}>
// //           {/* <div
// //             className={`${styles["image-container"]} animate__animated animate__bounceInLeft `}
// //           >
// //             <img src="public\profile.jpg" alt="Profile" />
// //           </div> */}
// //           <div
// //             className={`${styles["image-container"]} animate__animated animate__bounceInLeft`}
// //             onMouseMove={handleMouseMove}
// //             onMouseLeave={handleMouseLeave}
// //             style={{ perspective: "700px" }}
// //           >
// //             <img
// //               src="public\profile.jpg"
// //               alt="Profile"
// //               style={{
// //                 width: "300px",
// //                 height: "400px",
// //                 transition: "transform 0.1s",
// //                 willChange: "transform",
// //                 ...tiltStyle,
// //               }}
// //             />
// //           </div>
// //           <div className={styles["hero-content"]}>
// //             <center className="">
// //               <span className={styles["hi-text"]}>Hi👋</span>
// //               <span className={styles.Iam}>, I'm </span>
// //               <span className={styles["name-text"]}>M.Mudassir Zaman </span>
// //               <h2 className={styles["dev"]}>Frontend Developer</h2>
// //             </center>
// //             <div className={styles["home-content"]}>
// //               <p>
// //                 Crafting dynamic and responsive web experiences with React.
// //                 Specializing in modern front-end development. Transforming ideas
// //                 into seamless user interfaces
// //               </p>
// //             </div>
// //             <div className={styles.Cv}>
// //               <a href="public\Resume.pdf" target="_blank">
// //                 Download CV
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //       <Footer />
// //     </>
// //   );
// // };

// // export default Home;
import React, { useState } from "react";
import styles from "./Home.module.css";
// import { useGSAP } from "@gsap/react";
// import { gsap } from "react";

const Home = ({ handleHideItems }) => {
  const [tiltStyle, setTiltStyle] = useState({});
  const handleMouseMove = (e) => {
    const container = e.currentTarget;
    const { left, top, width, height } = container.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    const tiltX = y * 30; // Adjust tilt angle on Y-axis
    const tiltY = x * -30; // Adjust tilt angle on X-axis

    setTiltStyle({
      transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: `rotateX(0) rotateY(0)`,
    });
  };

  return (
    <>
      <section
        onClick={handleHideItems}
        className="bg-[#003d62] min-h-screen px-[20px] py-10"
      >
        <div className="flex  lg:flex-row flex-col  lg:h-screen  items-center justify-center  gap-[1rem] lg:gap-[4rem]  lg:p-10 max-w-[120rem] mx-auto">
          <div className="-z-10000">
            <div
              className="animate__animated animate__bounceInLeft -z-100 relative"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ perspective: "700px" }}
            >
              <img
                src="./profile.jpg"
                alt="Profile"
                className=" w-[14rem] sm:w-[20rem] lg:w-[28rem] -z-100000 inline-block bg-red-400 rounded-[47%] drop-shadow-lg transition-transform duration-100 will-change-transform"
                style={tiltStyle}
              />
            </div>
          </div>
          <div className="flex lg:flex-col flex-wrap gap-0 lg:gap-5 mx-5 max-w-[600px] text-center">
            <div className="">
              <span className="text-[3rem] md:text-[5rem] lg:text-[6rem] font-bold text-orange-500">
                Hi👋
              </span>
              <span className="text-[2.9rem] text-white">, I'm </span>
              <span className="text-[34px] sm:text-[5rem] text-white">
                M.Mudassir Zaman{" "}
              </span>
              <span
                className={`${styles.dev} text-[30px] sm:text-[4.6rem] font-bold text-white border-r-[0.15em] border-orange-500 overflow-hidden whitespace-nowrap mx-auto typing-animation`}
              >
                Frontend Developer
              </span>
            </div>
            <div className="mt-5 text-[23px] text-white text-justify max-w-[700px] leading-[35px]">
              <p>
                Crafting dynamic and responsive web experiences with React.
                Specializing in modern front-end development. Transforming ideas
                into seamless user interfaces
              </p>
            </div>
            <div className="mt-10 text-center self-center relative ">
              <a
                href="public/Resume.pdf"
                target="_blank"
                className="relative inline-block text-white overflow-hidden font-extrabold text-[1.5rem] px-8 py-4 border-2 border-orange-500 rounded-lg transition-all duration-300 transform hover:scale-[1.02] letter-spacing-[0.4rem] before:absolute  before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-orange-500 before:z-[-1] before:transition-left before:duration-700 before:ease-in-out hover:before:left-0  "
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
