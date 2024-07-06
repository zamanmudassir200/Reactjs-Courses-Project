import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const email = "zamanmudassir193@yahoo.com";
  const subject = "Welcome to my yahoo mail";
  const body = "This is a test email body.";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  return (
    <footer className="bg-purple-100 py-4">
      <div className=" max-w-[1200px] py-5 px-10 mx-auto flex gap-4  flex-col lg:flex-row  items-center justify-center md:justify-between lg:gap-0">
        <div className="">
          <img src="./todo.png" className="w-[70px] h-[70px]" alt="TodoList" />
        </div>
        <hr />

        <div className="text-center">
          <p>
            Developed by{" "}
            <span className="font-bold">
              <a href={mailtoLink}>MUHAMMAD MUDASSIR ZAMAN</a>
            </span>{" "}
          </p>
          <p>
            {" "}
            &copy; <b>{new Date().getFullYear()}</b> All rights reserved
          </p>
        </div>
        <hr />

        <div className="">
          <ul className="flex gap-3 text-4xl">
            <li>
              <a
                href="https://github.com/zamanmudassir200?tab=repositories"
                target="_blank"
              >
                <FaGithub className="hover:bg-purple-950 p-1 rounded-xl hover:-translate-y-2  transition-all hover:text-white" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/muhammad-mudassir-zaman-a6722a2b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                <FaLinkedin className="hover:bg-purple-950 hover:-translate-y-2 p-1 rounded-xl transition-all hover:text-white" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/mudie.abbaxi" target="_blank">
                <FaFacebookF className="hover:bg-purple-950 p-1 rounded-xl hover:-translate-y-2 transition-all hover:text-white" />
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/mudassirzaman2?igsh=YXY5ZTN1bnd5MWZu"
                target="_blank"
              >
                <AiFillInstagram className="hover:bg-purple-950 p-1 rounded-xl hover:-translate-y-2  transition-all hover:text-white" />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/ZamanMudassir_2?t=HaSJvg3sijTGj-Pf7gk_Gw&s=09"
                target="_blank"
              >
                <FaTwitter className="hover:bg-purple-950 p-1 rounded-xl transition-all hover:-translate-y-2  hover:text-white" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
