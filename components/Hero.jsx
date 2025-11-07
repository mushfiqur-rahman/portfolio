import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Hero = () => {
  const email = "mushfiq.kdu@gmail.com";

  const handleClick = () => {
    window.location.href = `mailto:${email}`;
  };
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="relative max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="mt-2.5 w-full justify-center content-center">
          <div className="py-2 font-bold text-sm md:text-3xl text-indigo-600 dark:text-slate-200">
            <h1>IT Support Engineer</h1>
          </div>

          <div className="py-2 font-bold md:text-2xl text-sm dark:text-slate-200">
            <h2>Helping CEO, Founders to run smooth IT operations</h2>
          </div>
          <div className="flex items-center justify-between max-w-[350px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-indigo-200 p-6 cursor-pointer hover:scale-110 hover:bg-indigo-500 hover:text-white ease-in duration-300">
              <Link
                href="https://www.linkedin.com/in/itMushfiq"
                rel="noreferrer"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="dark:text-slate-200" />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-indigo-200 p-6 cursor-pointer hover:scale-110 hover:bg-indigo-500 hover:text-white ease-in duration-300">
              <Link
                href="https://github.com/mushfiqur-rahman/"
                rel="noreferrer"
                target="_blank"
                aria-label="GitHub"
              >
                <FaGithub className="dark:text-slate-200" />
              </Link>
            </div>

            <div
              className="rounded-full shadow-lg shadow-indigo-200 p-6 cursor-pointer hover:scale-110 hover:bg-indigo-500 hover:text-white ease-in duration-300"
              onClick={handleClick}
            >
              <Link
                href={`mailto:${email}`}
                rel="noreferrer"
                target="_blank"
                aria-label="email"
              >
                <MdEmail className="dark:text-slate-200" />
              </Link>
            </div>

            <div className="rounded-full shadow-lg shadow-indigo-200 p-6 cursor-pointer hover:scale-110 hover:bg-red-500 hover:text-white ease-in duration-300">
              <Link
                href="https://www.youtube.com/@itMushfiq"
                rel="noreferrer"
                target="_blank"
                aria-label="YouTube"
              >
                <BsYoutube className="dark:text-slate-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
