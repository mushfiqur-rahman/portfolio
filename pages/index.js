import Head from "next/head";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Testimonial from "@/components/Testimonial";
import TestimonialMotion from "@/components/TestimonialMotion";
import Projects from "@/components/Projects";
import EduExp from "@/components/EduExp";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="content-language" content="en-US" />
        <meta name="robots" content="follow, index" />
        <meta
          name="google-site-verification"
          content="UviZELNJ6Xu6G42kgGmKtVzRXpoc61MYCLpWmoV1uzA"
        />
        <meta name="yandex-verification" content="f603ed602ebfae14" />

        <meta
          name="facebook-domain-verification"
          content="0l6xk00ijn0tbpfyr2d5n7gqgn4x8f"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Professional IT Support Engineer helping businesses with Google Workspace, Microsoft 365, MSP, DNS, cloud & email solutions for smooth digital operations."
          key="desc"
        />
        <meta content="#ffffff" name="theme-color" />
        <meta
          content="Professional IT Support Engineer helping businesses with Google Workspace, Microsoft 365, MSP, DNS, cloud & email solutions for smooth digital operations."
          name="position"
        />
        <meta name="distribution" content="Global" />
        <meta name="coverage" content="Worldwide" />
        <meta name="rating" content="General" />
        <meta name="author" content="Mushfiqur Rahman" />
        <meta name="owner" content="Mushfiqur Rahman" />
        <meta name="robots" content="index,follow,noodp,noydir" />
        <meta name="copyright" content="Copyright © Mushfiqur Rahman" />
        <meta name="googlebot" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta name="msvalidate.01" content="3EA8D19855F5F7D04AEABD2C2A95FA33" />
        <meta property="og:site_name" content="Mushfiqur Rahman" />
        <meta
          property="og:description"
          content="Professional IT Support Engineer helping businesses with Google Workspace, Microsoft 365, MSP, DNS, cloud & email solutions for smooth digital operations."
        />
        <meta property="og:title" content="MUSHFIQ - IT Support Engineer" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/depyaowh3/image/upload/v1743254614/mushfiq-wide_image_q4up1c.png"
        />
        <meta property="fb:app_id" content="353614617613762" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:og:publish_date" content="2022-06-01" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@itmushfiq" />
        <meta name="twitter:title" content="MUSHFIQ - IT Support Engineer" />
        <meta
          name="twitter:description"
          content="Professional IT Support Engineer helping businesses with Google Workspace, Microsoft 365, MSP, DNS, cloud & email solutions for smooth digital operations."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/depyaowh3/image/upload/v1743254614/mushfiq-wide_image_q4up1c.png"
        />
        <meta
          name="keywords"
          content="Mushfiqur Rahman, itmushfiq, experienced freelancer, IT Expert,Remote Services,Remote IT Service, IT support engineer, Start up Software Engineer, Software Engineer, Next js Software Engineer, python django Software Engineer, Google Workspace administration, Microsoft Office 365 administration, email deliverability, WordPress website bug-free transfer, DNS management (GoDaddy, Cloudflare, Namecheap), website & DNS issue fixes (CNAME, A records, IP, redirects), spam or junk issue fix, cold mail setup, email migration, and IT consultancy"
        />
        <meta
          name="impact-site-verification"
          value="0074120f-c25b-4fa8-8c30-58ad69f0ad07"
        />
        <link href="https://mushfiq.xyz" rel="canonical" />
        <meta content="https://mushfiq.xyz" property="og:url" />
        <meta content="MUSHFIQ - IT Support Engineer" name="author" />
        <meta content="Mushfiqur Rahman Portfolio" name="application-name" />
        <title>MUSHFIQ - IT Support Engineer</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <EduExp />
        <Testimonial />
      </div>
    </>
  );
}
