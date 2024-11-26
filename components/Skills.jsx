// Skills.js
import React, { useState } from "react";
import { skillCategories } from "../data/skillData";
import SkillCard from "./SkillCard";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("web");

  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <div className="text-xl font-bold tracking-widest uppercase text-indigo-500">
          <p>Skills</p>
        </div>

        <h2 className="py-4">What I learnt</h2>

        {/* Buttons for selecting categories */}
        <div className="flex space-x-4 py-4">
          <button
            onClick={() => setSelectedCategory("web")}
            className={`px-4 py-2 rounded ${
              selectedCategory === "web"
                ? "bg-indigo-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Web Development
          </button>
          <button
            onClick={() => setSelectedCategory("networking")}
            className={`px-4 py-2 rounded ${
              selectedCategory === "networking"
                ? "bg-indigo-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Networking
          </button>
          <button
            onClick={() => setSelectedCategory("itSupport")}
            className={`px-4 py-2 rounded ${
              selectedCategory === "itSupport"
                ? "bg-indigo-500 text-white"
                : "bg-gray-200"
            }`}
          >
            IT Support
          </button>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories[selectedCategory].map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
