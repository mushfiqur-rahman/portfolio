import Link from "next/link";
import React from "react";

const MyServices = () => {
  return (
    <>
      <div className="w-full lg:h-screen p-2">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full py-16">
          <div className="text-xl font-bold tracking-widest uppercase text-indigo-500"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer text-center">
            <h3 className="text-gradient ">Coming Soon...</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyServices;
