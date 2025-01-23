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
            With nearly five years in web development, I’ve specialized in
            Python, Django, and Next.js, WordPress handling both international
            and local freelance projects that enhanced my technical and
            collaborative skills.
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
              href="https://www.upwork.com/freelancers/mushfiqurrahman"
              locale={false}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Hire Me"
            >
              <button className="p-5 font-bold hover:text-white">
                Hire Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
