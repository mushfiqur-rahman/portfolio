import React from "react";
import Link from "next/link";
import Image from "next/image";
import AboutImg from "../public/mushfiqur.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen flex items-center p-2 py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl font-bold tracking-widest text-indigo-500 ">
            About
          </p>
          <h2 className="py-4">Career Summary</h2>

          <p className="py-2 text-gray-600 dark:text-slate-200">
            I am a highly skilled and dynamic IT professional with a strong
            passion for technology. With a keen ability to learn quickly, I
            excel in tackling complex IT challenges and delivering outstanding
            results. My expertise spans web development and IT support, and I
            have successfully completed numerous projects, earning recognition
            for my dedication and proficiency.
          </p>
          <p className="py-2 text-gray-600 dark:text-slate-200">
            Currently, freelancing on Upwork as an IT Support Engineer. To
            strengthen my technical foundation, I have obtained the CompTIA A+
            certification. My strengths lie in diagnosing and resolving
            intricate technical issues, contributing to knowledge-sharing
            initiatives, and fostering collaboration to ensure seamless service
            delivery.
          </p>
          <p className="py-2 text-gray-600 dark:text-slate-200">
            If you have any issues, please feel free to knock me! I will try to
            help you in better way
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
                  Eager to Help
                </button>
              </Link>
            </div>
            <div className="py-5 grid">
              {/* resume */}
              <Link
                className="py-4"
                href="/service"
                target="_blank"
                locale={false}
                rel="noopener noreferrer"
                aria-label="services"
              >
                <button className="p-5 font-bold hover:text-white">
                  Services
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
