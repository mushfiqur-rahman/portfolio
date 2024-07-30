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
            I have worked in various IT sectors for the past 5 years but always
            my mind was on programming. I was a little bit confused, about which
            programming language would give me happiness because I believe if
            someone enjoys the work & loves the work then they can achieve what
            they want.
          </p>

          <p className="py-2 text-gray-600 dark:text-slate-200">
            I am preparing for the higher education. My Research interest: Cyber
            Security, Computer Vision.
          </p>

          {/* <p className="py-2 text-gray-600 dark:text-slate-200">
            I am a passionate programmer, quick learner, and self-motivated. I
            have almost 2 years of experience in Web Development. I am able to
            develop secure, efficient and scalable web application by writing
            standard and well documented codes.{" "}
          </p> */}
          {/* <p className="py-2 text-gray-600 dark:text-slate-200">
            I want to utilize my professional skills along with my institutional
            skills to implement innovative ideas to reality. I have working
            knowledge on front-end development but main focus on back-end
            development.
          </p>
          <p className="py-2 text-gray-600 dark:text-slate-200">
            I am a team player who is comfortable working with tight deadlines
            and can deliver high-quality work. If you are looking for a team
            member who is dedicated and reliable, I would be the perfect fit for
            your team.
          </p> */}

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
        {/* <div className="w-full h-auto m-auto shadow-xl shadow-indigo-400 rounded-xl flex items-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={MushfiqImg} alt="MushfiqImg" priority sizes="100vh" />
        </div> */}
      </div>
    </div>
  );
};

export default About;
