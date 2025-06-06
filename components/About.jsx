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

          <p className="py-2 dark:text-slate-200">
            I am a quick learner, self-motivated, and punctual IT professional
            with hands-on experience in IT support, web development, and network
            monitoring. I thrive in solving technical challenges, whether it is
            ensuring smooth IT operations, building responsive websites, or
            maintaining secure and efficient networks. With a strong passion for
            technology and continuous improvement, I am always eager to expand
            my skills and deliver reliable, scalable solutions.
          </p>
          <h3 className="py-2 dark:text-slate-200">What I Do:</h3>
          <ul className="list-disc pl-6 space-y-2 dark:text-slate-200 text-lg">
            <li>
              Technical support for desktops, networks, and cloud services
            </li>
            <li>
              Responsive web development using modern frameworks (Next.js,
              Tailwind CSS)
            </li>
            <li>Network monitoring and performance optimization</li>
            <li>
              Troubleshooting hardware/software issues across IT environments
            </li>
            <li>
              System setup, user account management, and device configuration
            </li>
          </ul>
          <p className="py-2 dark:text-slate-200">
            Whether you are supporting a small office or scaling digital
            services, I ensure your
            <span className="font-semibold">
              {" "}
              IT infrastructure is efficient, secure, and future-ready
            </span>{" "}
            — so your team can stay focused and productive.
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
