import Image from "next/image";
import React from "react";
import HTML from "../public/skills/html.png";
import CSS from "../public/skills/css.png";
import BootStrap from "../public/skills/bootstrap.png";
import TailWind from "../public/skills/tailwindcss.png";
import Python from "../public/skills/python.png";
import Django from "../public/skills/django.png";
import Redis from "../public/skills/redis.png";
import Celery from "../public/skills/celery.png";
import Drf from "../public/skills/drf.png";
import pagespeed from "../public/skills/pagespeed.png";
import ubuntu from "../public/skills/ubuntu.webp";
import kali from "../public/skills/kali.webp";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <div className="text-xl font-bold tracking-widest uppercase text-indigo-500">
          <p>Skills</p>
        </div>

        <h2 className="py-4">What I learnt</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl shadow-gray-200 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Python} alt="Python" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-gray-200 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Django} alt="Django" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Django</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-gray-200 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Drf} alt="Drf" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Django Rest Framework</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-gray-200 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Redis} alt="Redis" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Redis</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-gray-200 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Celery} alt="Celery" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Celery</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-gray-200 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={HTML} alt="CSS" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-gray-200 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={CSS} alt="CSS" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-gray-200 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={TailWind} alt="TailWind" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-gray-200 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={BootStrap} alt="BootStrap" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Bootstrap</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-gray-200 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={pagespeed} alt="pagespeed" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Page Speed</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-gray-200 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ubuntu} alt="ubuntu" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Ubuntu</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-gray-200 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={kali} alt="kali linux" width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Kali Linux</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
