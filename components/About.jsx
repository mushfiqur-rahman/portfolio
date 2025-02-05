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
            Proactive and detail-oriented professional with nearly 6 years of
            experience in web development and technical support. Adept at
            troubleshooting technical issues, optimizing application
            performance, and delivering customer-centric solutions in dynamic
            environments.
          </p>
          <p className="py-2 text-gray-600 dark:text-slate-200">
            Skilled in diagnosing and resolving complex challenges, contributing
            to knowledge-sharing initiatives, and fostering collaboration to
            ensure seamless service delivery.
          </p>
          <p className="py-2 text-gray-600 dark:text-slate-200">
            I am a team player who is comfortable working with tight deadlines
            and can deliver high-quality work. If you are looking for a team
            member who is dedicated and reliable, I would be the perfect fit for
            your team.
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
