import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX, BsYoutube } from "react-icons/bs";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="relative max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-[180px] w-full justify-center content-center"
        >
          <div className="py-2 font-bold text-lg md:text-3xl text-blue-600">
            <p>Assalamu Alaikum Orohmatullah</p>
          </div>
          <div className="py-4 text-4xl font-extrabold md:text-7xl uppercase duration-300 text-violet-600">
            <h1>Mushfiqur Rahman</h1>
          </div>
          <div className="py-2 font-bold md:text-2xl text-lg">
            <h2>Python Django Developer</h2>
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
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-indigo-500 hover:text-white ease-in duration-300">
              <Link
                href="https://twitter.com/MushfiqFeed"
                rel="noreferrer"
                target="_blank"
                aria-label="Twitter"
              >
                <BsTwitterX />
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
        </motion.div>
        YouTube
      </div>
    </div>
  );
};

export default Main;
