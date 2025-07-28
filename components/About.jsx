import React from "react";
import Image from "next/image";
import AboutImg from "../public/mushfiqur.jpg";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen flex items-center p-2 py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="uppercase text-xl font-bold tracking-widest text-indigo-500">
            About
          </h2>

          <h2 className="py-4">Career Summary</h2>

          <p className="py-2 text-gray-600 dark:text-slate-200">
            I am Mushfiq — a Web Developer & IT Support Engineer helping
            businesses build trust and grow online. I specialize in fast,
            SEO-friendly, Responsive websites and professional email setup using
            Google Workspace and Microsoft 365.
          </p>
          <p className="py-2 text-gray-600 dark:text-slate-200">
            Whether you are launching a new brand, moving your email from
            cPanel, or struggling with domain/DNS issues, I make complex tech
            simple and reliable. My goal is to make sure your online presence is
            not just live — but working for your business 24/7.
          </p>
          <p className="py-2 text-gray-600 dark:text-slate-200">
            I believe in clear communication, quick turnaround, and long-term
            support — so you’re never left guessing. Let’s build something that
            works.
          </p>

          <motion.a
            href="/services"
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
