import React from "react";
import Link from "next/link";

const Footer = () => {
  const current = new Date();
  const date = `${current.getFullYear()}`;
  return (
    <div className="text-[#01EC83] bg-black/70 dark:bg-gray-700">
      <div className="mt-4 md:w-[1240px] mx-auto flex flex-col justify-center py-6 sm:flex-row">
        <p className="text-center md:text-center cursor-default">
          &copy; Copyright 2022 - {date}. All right reserved by{" "}
          <Link href="https://mushfiq.xyz/">MUSHFIQ</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
