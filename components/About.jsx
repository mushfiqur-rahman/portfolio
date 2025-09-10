import React from "react";
import Image from "next/image";
import AboutImg from "../public/mushfiq.png";
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
            I’m Mushfiqur Rahman, a Web Developer and IT Support Engineer
            passionate about building solutions that help businesses grow and
            run smoothly. With years of hands-on experience, I combine technical
            expertise with a strategic mindset, ensuring that every website I
            build and every IT system I manage not only works flawlessly but
            also drives measurable results.
          </p>
          <p className="py-2 text-gray-600 dark:text-slate-200">
            💻 As a Web Developer I specialize in creating fast, secure, and
            SEO-friendly websites tailored to your brand. From portfolio sites
            to blogs and business platforms, I focus on user experience, clean
            design, and long-term scalability.
          </p>
          <p className="py-2 text-gray-600 dark:text-slate-200">
            As an IT Support Engineer I bring deep expertise in Google
            Workspace, Microsoft 365, DNS configuration, and email migration.
            Whether you need seamless email setup, troubleshooting, or system
            migration, I ensure minimal downtime and maximum efficiency.
          </p>
          <p className="py-2 text-gray-600 dark:text-slate-200">
            I don’t just deliver websites and IT support — I align them with
            your business goals. I help you optimize your online presence,
            improve email deliverability, and create systems that support growth
            and client engagement.
          </p>

          <motion.a
            href="/contact"
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
