import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import HomeImg from "../../public/projects/home.webp";

const fsass = () => {
  return (
    <>
      <Head>
        <title>Full Stack SASS Project</title>
        <link rel="canonical" href="/eccomerce" />
        <meta name="description" content="Full Stack SASS Project" />
        <meta
          name="keywords"
          content="Full Stack Django Next JS SASS Project"
        />
      </Head>
      <div className="w-full">
        <div className="w-screen h-[50vh] relative">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/50 z-10" />
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={HomeImg}
            alt="HomeImg"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Full Stack SASS Project</h2>
            <h3>Django / Next JS </h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p>
              I was assigned to develop a Django REST API and convert a Figma
              template into a Next.js application. After completing the design,
              I successfully integrated all APIs into the front end. Throughout
              the development process, I did not use ChatGPT for a single line
              of code.
            </p>
            <a href="https://gerfin.net" target="_blank" rel="noreferrer">
              <button className="px-8 py-2 mt-4">Live</button>
            </a>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 ">
            <div className="p-2 dark:text-slate-200">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 dark:text-slate-200 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Django
                </p>
                <p className="text-gray-600 py-2 flex items-center dark:text-slate-200">
                  <RiRadioButtonFill className="pr-1" /> DRF
                </p>
                <p className="text-gray-600 py-2 flex items-center dark:text-slate-200">
                  <RiRadioButtonFill className="pr-1" /> PostgreSQL
                </p>
                <p className="text-gray-600 py-2 flex items-center dark:text-slate-200">
                  <RiRadioButtonFill className="pr-1" /> Redis
                </p>
                <p className="text-gray-600 py-2 flex items-center dark:text-slate-200">
                  <RiRadioButtonFill className="pr-1" /> Celery
                </p>
                <p className="text-gray-600 py-2 flex items-center dark:text-slate-200">
                  <RiRadioButtonFill className="pr-1" /> Docker
                </p>
                <p className="text-gray-600 py-2 flex items-center dark:text-slate-200">
                  <RiRadioButtonFill className="pr-1" /> LangChain
                </p>
                <p className="text-gray-600 dark:text-slate-200 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Next JS
                </p>
                <p className="text-gray-600 dark:text-slate-200 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Tailwind CSS
                </p>

                <p className="text-gray-600 py-2 flex items-center dark:text-slate-200">
                  <RiRadioButtonFill className="pr-1" /> Amazon EC2
                </p>
              </div>
            </div>
          </div>
          <Link href="/#project">
            <p className="underline cursor-pointer">Back</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default fsass;
