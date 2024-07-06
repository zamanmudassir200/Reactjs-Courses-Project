import React from "react";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { IoMdNotifications } from "react-icons/io";
import { FaFacebookMessenger } from "react-icons/fa";

import { MdOutlineOndemandVideo, MdGroups } from "react-icons/md";
import { VscGame } from "react-icons/vsc";
import { CgMenuGridO } from "react-icons/cg";

const Navbar = () => {
  return (
    <header className="bg-white shadow-xl py-1 sticky top-0">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <a href="#">
            <img
              src="public\fbLogo.png"
              alt="fb-logo"
              className="w-[100px] h-[58px]"
            />
          </a>
          <div className="flex items-center bg-gray-200 justify-center border-2 px-2 h-[45px] rounded-full">
            <IoSearch className="text-xl text-gray-500" />

            <input
              type="text"
              placeholder="Search Facebook"
              className="px-2 border-none bg-transparent placeholder:text-gray-500 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex">
          <ul className="flex items-center justify-between gap-0">
            <li>
              <NavLink to="/">
                <GoHomeFill className="text-4xl hover:bg-gray-200  p-1 w-[100px]" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/video">
                <MdOutlineOndemandVideo className="text-4xl hover:bg-gray-200  p-1 w-[100px]" />
              </NavLink>
            </li>{" "}
            <li>
              <NavLink to="/groups">
                <MdGroups className="text-4xl hover:bg-gray-200  p-1 w-[100px]" />
              </NavLink>
            </li>{" "}
            <li>
              <NavLink to="/gaming">
                <VscGame className="text-4xl hover:bg-gray-200 p-1 w-[100px]" />
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex items-center justify-center gap-6">
            <li>
              <CgMenuGridO className="rounded-full text-5xl cursor-pointer bg-gray-300 p-3" />
            </li>
            <li>
              <FaFacebookMessenger className="rounded-full text-5xl cursor-pointer bg-gray-300 p-3" />
            </li>
            <li>
              <IoMdNotifications className="rounded-full text-5xl cursor-pointer bg-gray-300 p-3" />
            </li>
            <li>
              <div className="">
                <img
                  src="public\fbLogo.png"
                  alt="profile"
                  className="rounded-full w-[100px] h-[58px]"
                />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
