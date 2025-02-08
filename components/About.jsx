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
            I am Mushfiqur Rahman from Bangladesh, a web developer and an IT
            support engineer.
          </p>
          <p className="py-2 text-gray-600 dark:text-slate-200">
            My services are Google Workspace administration, Microsoft Office
            365 administration, email deliverability, WordPress website bug-free
            transfer, DNS management (GoDaddy, Cloudflare, Namecheap), website &
            DNS issue fixes (CNAME, A records, IP, redirects), spam or junk
            issue fix, cold mail setup, email migration, and IT consultancy.
          </p>
          <p className="py-2 text-gray-600 dark:text-slate-200">
            You may hire me through international marketplaces, such as Upwork
            or Fiverr, or directly.
          </p>

          <div className="py-5">
            {/* resume */}
            <Link
              className="py-4"
              href="/contact"
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
