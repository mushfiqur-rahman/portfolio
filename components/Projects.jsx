import React from "react";
import Ecommerce from "../public/projects/ecommerce.webp";
import Blog from "../public/projects/djblogger.webp";
import PlatformManagerImg from "../public/projects/usermanager.webp";
import drfImg from "../public/projects/drf.webp";
import gstoautocomplete from "../public/projects/customerneeds.png";
import innoImg from "../public/projects/inno.webp";
import EventtechImg from "../public/projects/eventtech.webp";
import Metaverse from "../public/projects/metaverse.webp";
import bigcartImg from "../public/projects/bigcart.webp";
import gitHubImg from "../public/projects/github.webp";
import VlanImg from "../public/projects/vlan.png";
import ProjectItem from "./ProjecItem";

const Projects = () => {
  return (
    <div id="project" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="text-xl font-bold tracking-widest uppercase text-indigo-500">
          Projects
        </h2>
        <p className="py-4">
          What I have Built{" "}
          <span className="font-mono text-base">
            (Out of Non-disclosure agreement)
          </span>{" "}
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Ecommerce Project"
            backgroundImg={Ecommerce}
            projectUrl="/eccomerce"
            tech="Django, MySQL, Redis, Auth Token"
            alt="ecommerce"
            aria-label="Ecommerce Project"
          />
          <ProjectItem
            title="Django & HTMX Blog"
            backgroundImg={Blog}
            projectUrl="/blog"
            tech="Django, HTMX, Bootstrap 5, PostgreSQL"
            alt="blogger"
            aria-label="django htmx project"
          />

          <ProjectItem
            title="Platform Manager"
            backgroundImg={PlatformManagerImg}
            projectUrl="/platformManager"
            tech="Django, React, MUI, DRF"
            alt="PlatformManagerImg"
            aria-label="django htmx project"
          />

          <ProjectItem
            title="GitHub Clone"
            backgroundImg={gitHubImg}
            projectUrl="/github"
            tech="TypeScript, NextJS, Framer Motion"
            alt="gitHubImg"
            aria-label="GitHub Clone"
          />
          <ProjectItem
            title="Big Cart Django Store"
            backgroundImg={bigcartImg}
            projectUrl="/bigcart"
            tech="Python, Django, Bootstrap"
            alt="bigcartImgImg"
            aria-label="Big Cart Django Store"
          />

          <ProjectItem
            title="Customer Needs"
            backgroundImg={gstoautocomplete}
            projectUrl="/customerNeeds"
            tech="Django, React, MUI"
            alt="MUI Autocomplete"
            aria-label="react mui autocomplete"
          />

          <ProjectItem
            title="Innovative Software"
            backgroundImg={innoImg}
            projectUrl="/innovative"
            tech="Laravel 10"
            alt="innoImg"
            aria-label="Innovative Software Website"
          />

          <ProjectItem
            title="Django DRF Next Store"
            backgroundImg={drfImg}
            projectUrl="/drfstore"
            tech="Django, Nextjs, TailwindCSS, DRF"
            alt="PlatformManagerImg"
            aria-label="Django REST store"
          />

          <ProjectItem
            title="Eventtech"
            backgroundImg={EventtechImg}
            projectUrl="/eventtech"
            tech="NextJS"
            alt="Eventtech"
            aria-label="Eventtech startup website"
          />

          <ProjectItem
            title="Metaverse Clone"
            backgroundImg={Metaverse}
            projectUrl="/metaverse"
            tech="Nextjs"
            alt="Metaverse"
            aria-label="figma template clone metaverse"
          />
          <ProjectItem
            title="CISCO VLAN"
            backgroundImg={VlanImg}
            projectUrl="/vlan"
            tech="cisco"
            alt="vlan"
            aria-label="cisco vlan configuration"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
