import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaSkype } from "react-icons/fa";

const services = () => {
  const email = "mushfiq.kdu@gmail.com";
  const skype = "mushfiq.style";

  const handleEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleSkype = () => {
    window.location.href = `skype:username?call`;
  };
  return (
    <>
      <div className="w-full h-screen text-center">
        <div className="relative max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-[25px] w-full justify-center content-center"
          >
            <div className="py-2 font-bold text-lg md:text-3xl text-blue-600">
              <p className="servGrad">
                Looking to elevate your {"Business's"} online presence?
              </p>
            </div>
            <div>
              <p>I am just one mail away</p>
            </div>
            <div className="flex items-center justify-center gap-4 max-w-[350px] m-auto py-4">
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:text-yellow-500 ease-in duration-300"
                onClick={handleEmail}
              >
                <Link
                  href={`mailto:${email}`}
                  rel="noreferrer"
                  target="_blank"
                  aria-label="email"
                >
                  <MdEmail size={30} />
                </Link>
              </div>
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:text-[#0096DE] ease-in duration-300"
                onClick={handleSkype}
              >
                <Link
                  href={`call:${skype}`}
                  rel="noreferrer"
                  target="_blank"
                  aria-label="skype"
                >
                  <FaSkype size={30} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default services;
