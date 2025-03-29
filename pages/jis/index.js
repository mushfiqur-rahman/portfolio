import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import FlaressaImg from "../../public/projects/flaressa.webp";
import Head from "next/head";

const flaressa = () => {
  return (
    <>
      <Head>
        <title>Jashore Installation Service -Blog</title>
        <link rel="canonical" href="/flaressa" />
        <meta
          name="description"
          content="This is a startup company website, who provides service at jashore bangladesh area"
        />
        <meta
          name="keywords"
          content="WordPress, MySQL, Content Management System, jashore installation service blog"
        />
      </Head>
      <div className="w-full">
        <div className="w-screen h-[50vh] relative">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/50 z-10" />
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={FlaressaImg}
            alt="FlaressaImg"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Jashore Installation Service</h2>
            <h3>WordPress / MySQL </h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p>This is</p>
            <p>
              <span className="font-bold font-serif">
                Why I choose WordPress:
              </span>{" "}
              <span>
                They just started a business, so they have very limited budget.
                I tried to understand their requirements and expectation. I
                developed their website using Most popular Content Management
                System WordPress. It has fast loadign speed and SEO optimised
                with social media integration.
              </span>
            </p>
            <a
              href="https://github.com/mushfiqur-rahman/jashoreinstallationservice/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4 mr-8">Code</button>
            </a>
            <a
              href="https://jashoreinstallationservice.com"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4">Demo</button>
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
                  <RiRadioButtonFill className="pr-1" /> WordPress
                </p>
                <p className="text-gray-600 py-2 flex items-center dark:text-slate-200">
                  <RiRadioButtonFill className="pr-1" /> MySQL
                </p>
                <p className="text-gray-600 py-2 flex items-center dark:text-slate-200">
                  <RiRadioButtonFill className="pr-1" /> Elementor
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

export default flaressa;
