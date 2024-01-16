import React from "react";
import Image from "next/image";
import { BiSolidQuoteRight } from "react-icons/bi";
import dwllImg from "../public/clients/dwll.png";
import DefaultImg from "../public/clients/avatar.png";

const Testimonial = () => {
  return (
    <>
      <div className="py-10 sm:py-16 lg:py-24 mt-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl text-xl font-bold tracking-widest uppercase text-indigo-500">
            <p>Testimonial</p>
          </div>
          <h2 className="py-4">Client Say</h2>

          <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
            <div className="overflow-hidden rounded-xl border-green-500 border-4 shadow-xl shadow-gray-400">
              <div className="px-8 py-12">
                <div className="relative w-24 h-24 mx-auto">
                  <Image
                    className="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src={dwllImg}
                    alt="dwllImg"
                    width={50}
                    height={50}
                  />
                  <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                    <BiSolidQuoteRight className="w-4 h-4 text-white" />
                  </div>
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg ">
                    “Great work done by this freelancer!!
                    <br /> Highly Recommended”
                  </p>
                </blockquote>
                <p className="text-base font-semibold tex-tblack mt-9">CEO</p>
                <p className="mt-1 text-base">DoWell Research Pte Ltd</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border-green-500 border-4 shadow-xl shadow-gray-400">
              <div className="px-8 py-12">
                <div className="relative w-24 h-24 mx-auto">
                  <Image
                    className="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src={dwllImg}
                    alt="dwllImg"
                    width={50}
                    height={50}
                  />
                  <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                    <BiSolidQuoteRight className="w-4 h-4 text-white" />
                  </div>
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg">
                    “He is great in his niche !! <br /> Highly Recommended
                    seller”
                  </p>
                </blockquote>
                <p className="text-base font-semibold tex-tblack mt-9">CEO</p>
                <p className="mt-1 text-base">DoWell Research UK Limited</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border-green-500 border-4 shadow-xl shadow-gray-400">
              <div className="px-8 py-12">
                <div className="relative w-24 h-24 mx-auto">
                  <Image
                    className="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src={DefaultImg}
                    alt="DefaultImg"
                    width={50}
                    height={50}
                  />
                  <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                    <BiSolidQuoteRight className="w-4 h-4 text-white" />
                  </div>
                </div>
                <blockquote className="mt-7">
                  <p className="text-lg">“Good”</p>
                </blockquote>
                <p className="text-base font-semibold tex-tblack mt-9">
                  Christiano Daniel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
