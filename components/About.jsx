import React from "react";
import Image from "next/image";
import AboutImg from "../public/mushfiq.png";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen flex items-center p-2 py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 dark:text-slate-200">
          <h2 className="uppercase text-xl font-bold tracking-widest text-indigo-500">
            About
          </h2>

          <h2 className="py-4">Career Summary</h2>

          <p className="py-2 text-gray-600 dark:text-slate-200">Hi There 👋,</p>
          <p className="py-2 text-gray-600 dark:text-slate-200">
            I am Mushfiqur Rahman.
          </p>
          <p className="py-2 text-gray-600 dark:text-slate-200">
            an IT Support Engineer with a passion for building reliable, secure,
            and efficient IT solutions. My background in internet infrastructure
            and software development allows me to provide end-to-end IT support
            that helps businesses run smoothly.
          </p>
          <p className="py-2 text-gray-600 dark:text-slate-200">
            Through my agency, I have served over 50 clients across the US, UK,
            Australia, Germany, Europe and local businesses offering both
            on-site and remote solutions. I specialise in Microsoft 365, Google
            Workspace, email infrastructure, DNS management, and IT operations,
            combining technical expertise with practical problem-solving to
            ensure systems are robust and resilient.
          </p>
          <p className="py-2 text-gray-600 dark:text-slate-200">
            I take pride in making technology simple and effective for
            businesses, enabling them to focus on growth while I handle their IT
            backbone.
          </p>

          <motion.a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 text-lg font-semibold rounded-full shadow hover:bg-gray-100 transition border-2 border-indigo-600"
          >
            Services <FaArrowRight />
          </motion.a>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
