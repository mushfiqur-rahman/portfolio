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
            Hi, I am Mushfiq — an experienced IT Support Engineer helping
            individuals, startups, and small businesses solve complex IT
            problems with simple, effective solutions. With years of hands-on
            experience in tools like Microsoft 365, Google Workspace, domain &
            DNS management, and email deliverability, I specialize in keeping
            your business running smoothly and securely online.
          </p>
          <h3 className="py-2 dark:text-slate-200">What I Do:</h3>
          <ul className="list-disc pl-6 space-y-2 dark:text-slate-200 text-lg">
            <li>Professional email setup (Google Workspace, Microsoft 365)</li>
            <li>Email migration & troubleshooting</li>
            <li>Domain configuration, DNS, SPF, DKIM, DMARC setup</li>
            <li>Email security and reputation management</li>
            <li>Cloud app support for modern business workflows</li>
          </ul>
          <p className="py-2 dark:text-slate-200">
            Whether {`you're`} launching a business or scaling operations, I
            make sure your digital foundation is{" "}
            <span className="font-semibold">
              reliable, secure, and professionally managed
            </span>{" "}
            — so you can focus on what matters most.
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
