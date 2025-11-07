import Image from "next/image";
import React from "react";
import { skill } from "@/data/skills";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:min-h-screen p-2 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <div className="text-xl font-bold tracking-widest uppercase text-indigo-500">
          <p>Skills</p>
        </div>

        <h2 className="py-4 dark:text-slate-200">What I learnt</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skill.map((item) => (
            <div
              key={item.id}
              className="p-6 shadow-xl shadow-indigo-200 rounded-xl hover:scale-105 ease-in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                  />
                </div>
                <div className="flex flex-col items-center justify-center dark:text-slate-200">
                  <h3>{item.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
