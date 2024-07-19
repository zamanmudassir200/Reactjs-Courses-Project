import React, { useContext } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AppContext } from "../context/context.jsx";

const Footer = ({ handleHideItems }) => {
  // const { handleHideItems } = useContext(AppContext);
  return (
    <footer
      onClick={handleHideItems}
      className="bg-gray-200 text-black text-center py-7 px-3 "
    >
      <div className="flex lg:flex-row  gap-10 flex-col max-w-[1000px] mx-auto items-center justify-between py-2">
        <div className="text-3xl font-bold">
          <h2 className="text-2xl tracking-widest">
            <Link to="/" className="text-black text-5xl no-underline">
              MUDA
              <span className="text-orange-500 text-[2.9rem]">SSIR</span>
            </Link>
          </h2>
        </div>
        <div className="text-3xl">
          <p>
            © {new Date().getFullYear()} | Muhammad Mudassir Zaman | All rights
            reserved.
          </p>
        </div>
        <div className="mb-4">
          <ul className="flex bg-white list-none items-center justify-between mt-2 gap-4 p-2 rounded-lg">
            <li className=" text-4xl bg-white p-2 rounded transition-transform transform hover:rotate-[360deg] hover:bg-orange-500 hover:text-white">
              <a
                href="https://github.com/zamanmudassir200?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li className="text-4xl bg-white p-2 rounded transition-transform transform hover:rotate-[360deg] hover:bg-orange-500 hover:text-white">
              <a
                href="https://www.linkedin.com/in/muhammad-mudassir-zaman-a6722a2b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="text-4xl bg-white p-2 rounded transition-transform transform hover:rotate-[360deg] hover:bg-orange-500 hover:text-white">
              <a
                href="https://www.facebook.com/mudie.abbaxi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className="text-4xl bg-white p-2 rounded transition-transform transform hover:rotate-[360deg] hover:bg-orange-500 hover:text-white">
              <a
                href="https://www.instagram.com/mudassirzaman2?igsh=YXY5ZTN1bnd5MWZu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="text-4xl bg-white p-2 rounded transition-transform transform hover:rotate-[360deg] hover:bg-orange-500 hover:text-white">
              <a
                href="https://x.com/ZamanMudassir_2?t=HaSJvg3sijTGj-Pf7gk_Gw&s=09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
