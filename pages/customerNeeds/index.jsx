import React from "react";
import Image from "next/image";
import gstoautocompleteImg from "../../public/projects/customerneeds.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const gstoautocomplete = () => {
  return (
    <>
      <Head>
        <title>Customer Needs</title>
        <link rel="canonical" href="/customerNeeds" />
        <meta name="description" content="Customer Needs Dashboard Controll" />
        <meta name="keywords" content="Django, Bootstrap, Stripe payment" />
      </Head>
      <div className="w-full">
        <div className="w-screen h-[50vh] relative">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/50 z-10" />
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={gstoautocompleteImg}
            alt="gstoautocompleteImg"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Google Spreadsheet API to Mui Autocomple</h2>
            <h3>Django / Material UI </h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p>Task</p>
            <h2>Overview</h2>
            <p>
              This a task that have done to use in a project. Why I use
              spreadsheet? Simply customer provided their information through
              google spreadsheet. So I have get data from sp then modified using
              django after that I showed it using DRF then used those api in
              React mui autocomplete. I made a video on it also for better
              understanding.
            </p>

            <a
              href="http://customer-needs-100032.pythonanywhere.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4">Live</button>
            </a>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 py-2 flex items-center dark:text-slate-200">
                  <RiRadioButtonFill className="pr-1" /> Google Spreadsheet API
                </p>
                <p className="text-gray-600 py-2 flex items-center dark:text-slate-200">
                  <RiRadioButtonFill className="pr-1" /> Django
                </p>
                <p className="text-gray-600 py-2 flex items-center dark:text-slate-200">
                  <RiRadioButtonFill className="pr-1" /> Django Rest Framework
                </p>
                <p className="text-gray-600 py-2 flex items-center dark:text-slate-200">
                  <RiRadioButtonFill className="pr-1" /> Reactjs
                </p>
                <p className="text-gray-600 py-2 flex items-center dark:text-slate-200">
                  <RiRadioButtonFill className="pr-1" /> Material UI
                </p>
                <p className="text-gray-600 py-2 flex items-center dark:text-slate-200">
                  <RiRadioButtonFill className="pr-1" /> Fetch API
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

export default gstoautocomplete;
