// skillData.js
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
import next from "../public/skills/nextjs.webp";
import Docker from "../public/skills/docker.png";
import TypeScript from "../public/skills/typescript.png";
import CCNA from "../public/skills/ccna.png";
import MTCNA from "../public/skills/mtcna.png";
import COMPTIA from "../public/skills/comptia.svg";
import SECURITY from "../public/skills/security.png";
import KaliLinux from "../public/skills/kali.png";

export const skillCategories = {
  web: [
    { name: "HTML", image: HTML },
    { name: "CSS", image: CSS },
    { name: "Bootstrap", image: BootStrap },
    { name: "Tailwind CSS", image: TailWind },
    { name: "Python", image: Python },
    { name: "Django", image: Django },
    { name: "Next JS", image: next },
    { name: "TypeScript", image: TypeScript },
    { name: "Page Speed", image: pagespeed },
    { name: "Docker", image: Docker },
    { name: "Redis", image: Redis },
    { name: "Celery", image: Celery },
    { name: "Django Rest Framework", image: Drf },
  ],
  networking: [
    { name: "CCNA", image: CCNA },
    { name: "MTCNA", image: MTCNA },
  ],
  itSupport: [
    { name: "KaliLinux", image: KaliLinux },
    { name: "Ubuntu", image: ubuntu },
    { name: "COMPTIA A+", image: COMPTIA },
    { name: "Security+", image: SECURITY },
  ],
};
