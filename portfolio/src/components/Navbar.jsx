import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { AppContext } from "../context/context";

const Navbar = () => {
  const { showNavItems, showNavIcon, handleShowItems, handleHideItems } =
    useContext(AppContext);

  return (
    <header className="text-white z-[100] sticky shadow-lg shadow-orange-200 top-0 bg-[#0089b7] h-[70px]">
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
            <li className="relative group hover:scale-110 text-2xl transition-transform duration-300 ease-in-out">
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
            <FaBarsStaggered
              onClick={handleShowItems}
              className="text-4xl cursor-pointer "
            />
          ) : (
            <RxCross1
              onClick={handleHideItems}
              className="text-4xl cursor-pointer font-extrabold"
            />
          )}
          <div className=" ">
            <div
              id="wrapper"
              className={`absolute w-[100%] bg-[#0089b7] ${
                showNavItems ? "block" : "hidden"
              } md:hidden top-[60px] px-[2rem] py-[40px] right-0`}
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
  );
};

export default Navbar;
