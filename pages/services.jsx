import React from "react";
import { motion } from "framer-motion";

const services = () => {
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
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default services;
