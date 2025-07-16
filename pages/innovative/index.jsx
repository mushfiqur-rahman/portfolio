import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import InnovativeImg from "../../public/projects/innoaps.webp";
import Head from "next/head";

const innovative = () => {
  return (
    <>
      <Head>
        <title>Innovative Software - MUSHFIQ</title>
        <link rel="canonical" href="/innovative" />
        <meta
          name="description"
          content="This is One of Popular App developer company website whose app is top ranking in Book and reference category in playstore"
        />
        <meta
          name="keywords"
          content="laravel, bootstrap, fontawesome, innovative software, english to bangla dictionary"
        />
      </Head>
      <div className="w-full">
        <div className="w-screen h-[50vh] relative">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/50 z-10" />
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={InnovativeImg}
            alt="InnovativeImg"
            priority
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Innovative Software Website</h2>
            <h3>Laravel 10 / MySQL </h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p>
              I have developed this website for an Android apps company whose
              dictionary apps are most popular in Bangladesh in book and
              reference categories in the Google Play Store.
            </p>
            <p>
              <span className="font-bold font-serif">
                Why I choose Laravel:
              </span>{" "}
              <span>
                For django application need better server for better
                performance. According the requirements I think laravel is the
                best for both server quality and cost optimization.
              </span>
            </p>

            <a
              href="https://innovativesoftware.eu/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4">Live</button>
            </a>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 ">
            <div className="p-2 dark:text-slate-200">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 dark:text-slate-200 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> PHP
                </p>
                <p className="text-gray-600 py-2 flex items-center dark:text-slate-200">
                  <RiRadioButtonFill className="pr-1" /> MySQL
                </p>
                <p className="text-gray-600 py-2 flex items-center dark:text-slate-200">
                  <RiRadioButtonFill className="pr-1" /> Laravel 10
                </p>
                <p className="text-gray-600 py-2 flex items-center dark:text-slate-200">
                  <RiRadioButtonFill className="pr-1" /> Bootstrap
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

export default innovative;
