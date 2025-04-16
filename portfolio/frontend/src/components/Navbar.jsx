import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { AppContext } from "../context/context";

const Navbar = () => {
  const {
    showNavItems,
    showNavIcon,
    handleShowItems,
    handleHideItems,
    isLoggedIn,

    openLogoutModal,
  } = useContext(AppContext);

  return (
    <header className="text-white z-[100] sticky shadow-lg shadow-orange-200 top-0 bg-[#0089b7] h-[70px]">
      <nav className="max-w-[120rem] mx-auto flex items-center gap-4 justify-between p-6">
        {/* Logo */}
        <div className="logo">
          <h2 className="text-2xl tracking-widest">
            <Link to="/" className="text-white text-5xl no-underline">
              MUDA
              <span className="text-orange-500 text-[2.9rem]">SSIR</span>.dev
            </Link>
          </h2>
        </div>

        {/* Nav items - Desktop */}
        <div className="nav-items hidden sm:block">
          <ul className="flex items-center justify-center list-none text-xl gap-[3.5rem] font-semibold">
            {["/", "/skills", "/projects", "/contact"].map((path, index) => (
              <li
                key={path}
                className="relative group hover:scale-110 text-2xl transition-transform duration-300 ease-in-out"
              >
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500 no-underline pb-4 relative"
                      : "text-white no-underline pb-4 relative"
                  }
                  to={path}
                >
                  {["ABOUT ME", "SKILLS", "PROJECTS", "CONTACT"][index]}
                  <span className="block h-[3px] w-2 bg-orange-500 absolute bottom-0 left-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Login/Logout - Desktop */}
        <div className="hidden sm:block">
          {isLoggedIn ? (
            <button
              onClick={openLogoutModal}
              className="px-10 py-2 bg-white text-3xl text-black border-[1px] border-black rounded-2xl"
            >
              Logout
            </button>
          ) : (
            <Link
              className="px-10 py-2 bg-white text-3xl text-black border-[1px] border-black rounded-2xl"
              to="/login"
            >
              Login
            </Link>
          )}
        </div>

        {/* Hamburger Icon */}
        <div className="sm:hidden">
          {showNavIcon ? (
            <FaBarsStaggered
              onClick={handleShowItems}
              className="text-4xl cursor-pointer"
            />
          ) : (
            <RxCross1
              onClick={handleHideItems}
              className="text-4xl cursor-pointer font-extrabold"
            />
          )}
        </div>
      </nav>

      {/* Mobile Nav Dropdown */}
      <div
        id="wrapper"
        className={`absolute w-full drop-shadow-xl bg-opacity-95 bg-[#0089b7] ${
          showNavItems ? "block" : "hidden"
        } sm:hidden top-[70px] px-8 py-8 right-0 z-[99]`}
      >
        <ul className="flex flex-col items-center justify-center list-none text-xl gap-10 font-semibold">
          {["/", "/skills", "/projects", "/contact"].map((path, index) => (
            <li
              key={path}
              className="relative group hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <NavLink
                onClick={handleHideItems}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 no-underline pb-4 relative"
                    : "text-white no-underline pb-4 relative"
                }
                to={path}
              >
                {["ABOUT ME", "SKILLS", "PROJECTS", "CONTACT"][index]}
                <span className="block h-[3px] w-2 bg-orange-500 absolute bottom-0 left-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </NavLink>
            </li>
          ))}
          {/* Login/Logout - Mobile */}
          <li>
            {isLoggedIn ? (
              <button
                onClick={openLogoutModal}
                className="px-10 py-2 bg-white text-3xl text-black border-[1px] border-black rounded-2xl"
              >
                Logout
              </button>
            ) : (
              <Link
                onClick={handleHideItems}
                className="px-10 py-2 bg-white text-3xl text-black border-[1px] border-black rounded-2xl"
                to="/login"
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
