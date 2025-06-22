import React from "react";
import Link from "next/link";
import Image from "next/image";
import AboutImg from "../public/mushfiqur.jpg";

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
            Hi, I am Mushfiq — a passionate IT Support Engineer and Web
            Developer with years of hands-on experience solving complex tech
            challenges and building impactful digital solutions.
          </p>
          <p className="py-2 text-gray-600 dark:text-slate-200">
            I am always learning, improving, and looking for ways to deliver
            better tech experiences. When I am not coding or troubleshooting,
            you will probably find me exploring new tools, writing tech tips or
            making video for youtube.
          </p>

          <div className="flex gap-10">
            <div className="py-5 grid">
              {/* resume */}
              <Link
                className="py-4"
                href="/contact"
                locale={false}
                aria-label="help"
              >
                <button className="p-5 font-bold hover:text-white">
                  contact
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
