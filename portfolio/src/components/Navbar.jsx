// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import styles from "./Navbar.module.css";

// const Navbar = () => {
//   return (
//     <>
//       <header>
//         <nav>
//           <div className={styles.logo}>
//             <h2>
//               <Link to="/" className={styles.portfolio}>
//                 Port<span>folio</span>
//               </Link>
//             </h2>
//           </div>
//           <div className={styles["nav-items"]}>
//             <ul>
//               <li>
//                 <NavLink
//                   exact
//                   className={({ isActive }) =>
//                     isActive
//                       ? `${styles["nav-link"]} ${styles["nav-link-active"]}`
//                       : styles["nav-link"]
//                   }
//                   to="/"
//                 >
//                   ABOUT ME
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   className={({ isActive }) =>
//                     isActive
//                       ? `${styles["nav-link"]} ${styles["nav-link-active"]}`
//                       : styles["nav-link"]
//                   }
//                   to="/about"
//                 >
//                   SKILLS
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   className={({ isActive }) =>
//                     isActive
//                       ? `${styles["nav-link"]} ${styles["nav-link-active"]}`
//                       : styles["nav-link"]
//                   }
//                   to="/projects"
//                 >
//                   PROJECTS
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   className={({ isActive }) =>
//                     isActive
//                       ? `${styles["nav-link"]} ${styles["nav-link-active"]}`
//                       : styles["nav-link"]
//                   }
//                   to="/contact"
//                 >
//                   CONTACT
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Navbar;
// import React from "react";
// import { Link, NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <>
//       <header className="text-white sticky top-0 z-100 bg-[#0089b7] h-20">
//         <nav className="max-w-[120rem] mx-auto flex items-center justify-between p-6">
//           <div className="logo">
//             <h2 className="text-2xl tracking-widest">
//               <Link to="/" className="text-white text-2xl no-underline">
//                 Port<span className="text-orange-500 text-[2.9rem]">folio</span>
//               </Link>
//             </h2>
//           </div>
//           <div className="nav-items">
//             <ul className="flex items-center justify-center list-none text-lg gap-[3.5rem] font-semibold transition-transform duration-300 ease-in-out">
//               <li className="hover:scale-110 transition-transform duration-300 ease-in-out">
//                 <NavLink
//                   exact
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-orange-500 no-underline pb-4 relative"
//                       : "text-white no-underline pb-4 relative"
//                   }
//                   to="/"
//                 >
//                   ABOUT ME
//                 </NavLink>
//               </li>
//               <li className="hover:scale-110 transition-transform duration-300 ease-in-out">
//                 <NavLink
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-orange-500 no-underline pb-4 relative"
//                       : "text-white no-underline pb-4 relative"
//                   }
//                   to="/about"
//                 >
//                   SKILLS
//                 </NavLink>
//               </li>
//               <li className="hover:scale-110 transition-transform duration-300 ease-in-out">
//                 <NavLink
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-orange-500 no-underline pb-4 relative"
//                       : "text-white no-underline pb-4 relative"
//                   }
//                   to="/projects"
//                 >
//                   PROJECTS
//                 </NavLink>
//               </li>
//               <li className="hover:scale-110 transition-transform duration-300 ease-in-out">
//                 <NavLink
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-orange-500 no-underline pb-4 relative"
//                       : "text-white no-underline pb-4 relative"
//                   }
//                   to="/contact"
//                 >
//                   CONTACT
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Navbar;
import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = ({
  handleHideItems,
  handleShowItems,
  showNavIcon,
  showNavItems,
}) => {
  const navRef = useRef();

  // const Navanimation = tl.from(navRef.current, {
  //   // y: -3000,
  //   duration: 1,
  //   rotate: 360,
  // });

  const openNavBtn = () => {
    handleShowItems();
    const tl = gsap.timeline();
    tl.from(navRef.current, {
      x: 200,
      duration: 0.2,
      opacity: 0,
    });
    tl.from(` ${navRef.current} "NavLink" `, {
      x: 100,
      duration: 0.2,
      opacity: 0,
      stagger: 0.3,
    });
  };
  const closeNavBtn = () => {
    handleHideItems();
  };
  return (
    <>
      <header className="text-white z-[100] sticky  top-0  bg-[#0089b7] h-30">
        <nav className="max-w-[120rem] mx-auto flex items-center justify-between p-6">
          <div className="logo">
            <h2 className="text-2xl tracking-widest">
              <Link to="/" className="text-white text-5xl no-underline">
                Port
                <span className="text-orange-500 text-[2.9rem]">folio</span>
              </Link>
            </h2>
          </div>
          <div className={`nav-items hidden sm:block`}>
            <ul className="flex items-center justify-center list-none text-xl gap-[3.5rem] font-semibold">
              <li className="relative group hover:scale-110 text-2xl transition-transform duration-300 ease-in-out">
                <NavLink
                  handleHideItems={handleHideItems}
                  exact
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-400 no-underline pb-4 relative"
                      : "text-white no-underline pb-4 relative"
                  }
                  to="/"
                >
                  ABOUT ME
                  <span className="block h-[3px] w-2 bg-orange-500 absolute bottom-0 left-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </NavLink>
              </li>
              <li className="relative group hover:scale-110 text-2xl transition-transform duration-300 ease-in-out">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500 no-underline pb-4 relative"
                      : "text-white no-underline pb-4 relative"
                  }
                  to="/skills"
                >
                  SKILLS
                  <span className="block h-[3px] w-2 bg-orange-500 absolute bottom-0 left-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </NavLink>
              </li>
              <li className="relative group hover:scale-110 text-2xl transition-transform duration-300 ease-in-out">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500 no-underline pb-4 relative"
                      : "text-white no-underline pb-4 relative"
                  }
                  to="/projects"
                >
                  PROJECTS
                  <span className="block h-[3px] w-2 bg-orange-500 absolute bottom-0 left-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </NavLink>
              </li>
              <li className="relative group hover:scale-110  text-2xl transition-transform duration-300 ease-in-out">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500 no-underline pb-4 relative"
                      : "text-white no-underline pb-4 relative"
                  }
                  to="/contact"
                >
                  CONTACT
                  <span className="block h-[3px] w-2 bg-orange-500 absolute bottom-0 left-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="sm:hidden">
            {showNavIcon ? (
              <FaBarsStaggered onClick={openNavBtn} className="text-4xl " />
            ) : (
              <RxCross1
                className="text-4xl font-extrabold"
                onClick={closeNavBtn}
              />
            )}
            <div className="  ">
              <div
                id="wrapper"
                ref={navRef}
                className={`absolute w-[100%]  bg-[#0089b7]    ${
                  showNavItems ? "block" : "hidden"
                } md:hidden top-[60px] px-[2rem] py-[40px]  right-0`}
              >
                <div className={`nav-items`}>
                  <ul className="flex flex-col items-center justify-center list-none text-xl gap-[3.5rem] font-semibold">
                    <li className="relative group hover:scale-110 text-xl transition-transform duration-300 ease-in-out">
                      <NavLink
                        exact
                        className={({ isActive }) =>
                          isActive
                            ? "text-orange-400 no-underline pb-4 relative"
                            : "text-white no-underline pb-4 relative"
                        }
                        to="/"
                      >
                        ABOUT ME
                        <span className="block h-[3px] w-2 bg-orange-500 absolute bottom-0 left-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                      </NavLink>
                    </li>
                    <li className="relative group hover:scale-110 transition-transform duration-300 ease-in-out">
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-orange-500 no-underline pb-4 relative"
                            : "text-white no-underline pb-4 relative"
                        }
                        to="/skills"
                      >
                        SKILLS
                        <span className="block h-[3px] w-2 bg-orange-500 absolute bottom-0 left-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                      </NavLink>
                    </li>
                    <li className="relative group hover:scale-110 transition-transform duration-300 ease-in-out">
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-orange-500 no-underline pb-4 relative"
                            : "text-white no-underline pb-4 relative"
                        }
                        to="/projects"
                      >
                        PROJECTS
                        <span className="block h-[3px] w-2 bg-orange-500 absolute bottom-0 left-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                      </NavLink>
                    </li>
                    <li className="relative group hover:scale-110 transition-transform duration-300 ease-in-out">
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-orange-500 no-underline pb-4 relative"
                            : "text-white no-underline pb-4 relative"
                        }
                        to="/contact"
                      >
                        CONTACT
                        <span className="block h-[3px] w-2 bg-orange-500 absolute bottom-0 left-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
