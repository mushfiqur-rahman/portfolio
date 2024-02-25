import React from "react";
import Link from "next/link";
import MushfiqImg from "../public/mushfiq.png";
import Image from "next/image";

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
            With a dynamic four-year IT journey, my passion for programming
            finds its zenith in Python Django Development. Armed with two years
            of expertise, I specialize in crafting secure, efficient, and
            scalable web applications, boasting meticulous code that aligns with
            industry standards.
          </p>

          <p className="py-2 text-gray-600 dark:text-slate-200">
            A quick learner and self-motivated, I am eager to breathe life into
            innovative ideas. While I possess front-end proficiency, my core
            strength lies in back-end development.{" "}
          </p>
          <p className="py-2 text-gray-600 dark:text-slate-200">
            A reliable team player, I consistently deliver high-quality work. If
            you seek a dedicated professional with a knack for turning ideas
            into reality, I am the impressive team member you are looking for.
          </p>

          <div className="py-5">
            {/* resume */}
            <Link
              className="py-4"
              href="/Mushfiqur_Rahman_Resume.pdf"
              locale={false}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Downlod Resume"
            >
              <button className="p-5 font-bold hover:text-white">
                Downlod Resume
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-indigo-400 rounded-xl flex items-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={MushfiqImg} className="rounded-xl" alt="MushfiqImg" priority/>
        </div>
      </div>
    </div>
  );
};

export default About;
