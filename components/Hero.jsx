import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Main = () => {
  const email = "mushfiq.kdu@gmail.com";

  const handleClick = () => {
    window.location.href = `mailto:${email}`;
  };
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="relative max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="mt-[10px] w-full justify-center content-center">
          <div className="py-4 font-bold text-sm lg:text-3xl xl:text-4xl duration-300 leading-none">
            <h1>
              Website Development, Google Workspace Setup & Email Marketing
              Support for Your Business
            </h1>
          </div>
          <div className="py-2 text-xs md:text-2xl">
            <h3>
              Helping B2B businesses in the US build websites, secure
              professional emails, and grow online presence.
            </h3>
          </div>
          <div className="flex items-center justify-between max-w-[350px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-indigo-500 hover:text-white ease-in duration-300">
              <Link
                href="https://www.linkedin.com/in/mushfiq1/"
                rel="noreferrer"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-indigo-500 hover:text-white ease-in duration-300">
              <Link
                href="https://github.com/mushfiqur-rahman/"
                rel="noreferrer"
                target="_blank"
                aria-label="GitHub"
              >
                <FaGithub />
              </Link>
            </div>

            <div
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-indigo-500 hover:text-white ease-in duration-300"
              onClick={handleClick}
            >
              <Link
                href={`mailto:${email}`}
                rel="noreferrer"
                target="_blank"
                aria-label="email"
              >
                <MdEmail />
              </Link>
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-red-500 hover:text-white ease-in duration-300">
              <Link
                href="https://www.youtube.com/@MushfiqFeed"
                rel="noreferrer"
                target="_blank"
                aria-label="YouTube"
              >
                <BsYoutube />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
