import React from "react";
import HomeImg from "../public/projects/home.webp";
import Ecommerce from "../public/projects/ecommerce.webp";
import PlatformManagerImg from "../public/projects/usermanager.webp";
import DjblogImg from "../public/projects/djblogger.webp";
import innoImg from "../public/projects/inno.webp";
import EventtechImg from "../public/projects/eventtech.webp";
import Metaverse from "../public/projects/metaverse.webp";
import gitHubImg from "../public/projects/github.webp";
import FlaressaImg from "../public/projects/flaressa.webp";
import VlanImg from "../public/projects/vlan.webp";
import BgpImg from "../public/projects/bgp.webp";
import MediImg from "../public/projects/medicalwp.webp";
import GourgeImg from "../public/projects/gourgesourcing.webp";
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

        <div className="grid md:grid-cols-3 gap-8">
          <ProjectItem
            title="RMG Supplier"
            backgroundImg={GourgeImg}
            projectUrl="/"
            tech="WordPress"
            alt="WordPress Development"
            aria-label="Service Provider"
          />
          <ProjectItem
            title="Medical Training"
            backgroundImg={MediImg}
            projectUrl="/"
            tech="WordPress"
            alt="WordPress Development"
            aria-label="Service Provider"
          />
          <ProjectItem
            title="Full Stack SASS Project"
            backgroundImg={HomeImg}
            projectUrl="/fsass"
            tech="Djnago, Next JS"
            alt="Full Stack SASS Project"
            aria-label="Service Provider"
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
            title="Jashore Installation Service"
            backgroundImg={FlaressaImg}
            projectUrl="/jis"
            tech="WordPress"
            alt="Flaressa"
            aria-label="Service Provider"
          />
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
            backgroundImg={DjblogImg}
            projectUrl="/djblog"
            tech="Django, HTMX, Bootstrap 5, PostgreSQL"
            alt="Dj blog"
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
            title="Innovative Software"
            backgroundImg={innoImg}
            projectUrl="/innovative"
            tech="Laravel 10"
            alt="innoImg"
            aria-label="Innovative Software Website"
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
          <ProjectItem
            title="Border Gateway Protocol (BGP)"
            backgroundImg={BgpImg}
            projectUrl="/bgp"
            tech="cisco"
            alt="bgp"
            aria-label="Border Gateway Protocol (BGP) configuration"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
