import React from "react";
import Ecommerce from "../public/projects/ecommerce.webp";
import Blog from "../public/projects/djblogger.webp";
import PlatformManagerImg from "../public/projects/usermanager.webp";
import drfImg from "../public/projects/drf.webp";
import bigcartImg from "../public/projects/bigcart.webp";
import gstoautocomplete from "../public/projects/customerneeds.png";
import EventtechImg from "../public/projects/eventtech.webp";
import ProjectItem from "./ProjecItem";

const Projects = () => {
  return (
    <div id="project" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl font-bold tracking-widest uppercase text-indigo-500">
          Projects
        </p>
        <h2 className="py-4">What I have Built(Out of NDA)</h2>
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
            title="Django DRF Next Store"
            backgroundImg={drfImg}
            projectUrl="/drfstore"
            tech="Django, Nextjs, TailwindCSS, DRF"
            alt="PlatformManagerImg"
            aria-label="Django REST store"
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
            title="Eventtech"
            backgroundImg={EventtechImg}
            projectUrl="/eventtech"
            tech="NextJS"
            alt="Eventtech"
            aria-label="Eventtech startup website"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
