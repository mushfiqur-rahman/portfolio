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
            You can hire me through international platforms like Upwork or
            directly for professional IT solutions
          </p>

          <div className="py-5">
            {/* resume */}
            <Link
              className="py-4"
              href="https://www.upwork.com/freelancers/mushfiqurrahman"
              target="_blank"
              locale={false}
              rel="noopener noreferrer"
              aria-label="Hire Me"
            >
              <button className="p-5 font-bold hover:text-white">
                Hire Me
              </button>
            </Link>
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
