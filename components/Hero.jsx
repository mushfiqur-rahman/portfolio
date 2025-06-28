import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <div className="bg-gradient-to-br from-blue-700 via-purple-800 to-purple-800 text-white w-full h-screen text-center">
        <div className="relative max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-cente">
          <div className="mt-[10px] w-full justify-center content-center">
            <div className="">
              <div className="py-4 font-extrabold text-lg lg:text-5xl xl:text-6xl uppercase duration-300 leading-tight tracking-tight">
                <h1>
                  Build Your Website &<br className="hidden sm:inline" /> Email
                  Setup with Confidence
                </h1>
              </div>

              <div className="py-2 font-bold md:text-2xl text-sm mb-4">
                <p>
                  I help US businesses launch SEO-friendly websites and set up
                  Google Workspace or Microsoft 365 for secure, professional
                  email and growth.
                </p>
              </div>

              <div className="py">
                <a
                  href="https://calendly.com/mushfiq.kdu/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 text-base sm:text-lg font-semibold rounded-full shadow hover:bg-gray-100 transition"
                >
                  Book a Free Consultation <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
