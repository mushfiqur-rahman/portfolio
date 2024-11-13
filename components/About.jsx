import React from "react";
import Link from "next/link";

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
            From my student years, I have always sought to help others,
            particularly with technology-related issues. I dreamed of becoming
            an IT expert to benefit the community.To pursue this, I began my
            career by learning network engineering and web development, taking
            additional training to enhance my skills and professionalism.
          </p>
          <p className="py-2 text-gray-600 dark:text-slate-200">
            I am now looking to start a role as an IT Support Engineer. In the
            next five years, I plan to expand my expertise in cybersecurity and
            leadership, aiming to advance my career and better serve the
            community.
          </p>
          <p className="py-2 text-gray-600 dark:text-slate-200">
            I want to utilize my professional skills along with my institutional
            skills to implement innovative ideas to reality.
          </p>

          <div className="py-5">
            {/* resume */}
            <Link
              className="py-4"
              href="/Mushfiqur_Rahman_CV.pdf"
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
      </div>
    </div>
  );
};

export default About;
