import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";

const MyServices = () => {
  return (
    <>
      <div className="w-full lg:h-screen p-2">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full py-16">
          <div className="text-xl font-bold tracking-widest uppercase text-indigo-500">
            <p>My Services</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer">
            <Link
              href="https://www.facebook.com/JashoreInstallationService"
              rel="noreferrer"
              target="_blank"
              aria-label="GitHub"
            >
              <FaFacebook />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyServices;
