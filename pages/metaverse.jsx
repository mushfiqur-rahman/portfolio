import Image from "next/image";
import React from "react";
import MetaImg from "../public/projects/metaverse.webp";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const metaverse = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/50 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={MetaImg}
          alt="MetaImg"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Metaverse app</h2>
          <h3>Nextt JS / Tailwind / FramerMotion</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I built this application in Next JS and is hosted on Vercel. This
            app features eyecaching style with tailwind gradient background and
            framermotion slider, scroll animation and manymore.
          </p>
          <a
            href="https://github.com/mushfiqur-rahman/metaverse"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://metaverse-bay-pi.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center dark:text-slate-200">
                <RiRadioButtonFill className="pr-1" /> NextJS 13 beta
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-slate-200">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center dark:text-slate-200">
                <RiRadioButtonFill className="pr-1" /> FramerMotion
              </p>
            </div>
          </div>
        </div>
        <Link href="/#project">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default metaverse;
