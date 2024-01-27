import Head from "next/head";
import About from "@/components/About";
import EduExp from "@/components/EduExp";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="robots" content="follow, index" />
        <meta
          name="google-site-verification"
          content="UviZELNJ6Xu6G42kgGmKtVzRXpoc61MYCLpWmoV1uzA"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="content-language" content="en" />
        <meta
          name="facebook-domain-verification"
          content="0l6xk00ijn0tbpfyr2d5n7gqgn4x8f"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="I'm Mushfiqur Rahman, this is my portfolio. I am looking for remote or hybrid job in junior python django webdeveloper position. I have been working at Upwork as a python django developer since 2022"
          key="desc"
        />
        <meta content="#ffffff" name="theme-color" />
        <meta
          content="entry level django developer, jr python django developer, jr. software developer, software engineer"
          name="position"
        />
        <link rel="canonical" href="https://mushfiq.xyz" />
        <meta name="distribution" content="Global" />
        <meta name="coverage" content="Worldwide" />
        <meta name="rating" content="General" />
        <meta name="author" content="Mushfiqur Rahman" />
        <meta name="owner" content="Mushfiqur Rahman" />
        <meta name="robots" content="index,follow,noodp,noydir" />
        <meta name="googlebot" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta name="msvalidate.01" content="3EA8D19855F5F7D04AEABD2C2A95FA33" />
        <meta property="og:site_name" content="Mushfiqur Rahman" />
        <meta
          property="og:description"
          content="A passionate junior web developer with django & Next js | python enthusiastic."
        />
        <meta
          property="og:title"
          content="Mushfiqur Rahman Portfolio that presents his CV or Resume"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/depyaowh3/image/upload/v1675659298/og-image_zguqwh.png"
        />
        <meta property="fb:app_id" content="353614617613762" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@MushfiqFeed" />
        <meta
          name="twitter:title"
          content="Mushfiqur Rahman Portfolio that presents his CV or Resume"
        />
        <meta
          name="twitter:description"
          content="A passionate junior web developer with django | python enthusiastic."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/depyaowh3/image/upload/v1675659298/og-image_zguqwh.png"
        />
        <meta
          name="keywords"
          content="ecommerce developer,django developer at khulna,django developer at jessore,python developer at jessoere,python developer at khulna,python developer jashore,পাইথন যশোর,পাইথন খুলনা,ওয়েব ডেভেলপার,পাইথন ইঞ্জিনিয়ার, 
          পায়থন ইঞ্জিনিয়ার যশোর খুলনা,ecommerce website developer,best website developers,remote web developer,freelance backend developer,entry level software engineer,
          django developers,django nosql, مهندس برمجيات, مطور ويب, بيثون, جانغو, التعلم الالي"
        />
        <link href="https://mushfiq.xyz" rel="canonical" />
        <meta content="https://mushfiq.xyz/" property="og:url" />
        <meta content="Mushfiqur Rahman the django developer" name="author" />
        <meta content="Mushfiqur Rahman Portfolio" name="application-name" />
        <title>Mushfiqur Rahman - CV | Resume</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <EduExp />
      <Testimonial />
      <Footer />
    </>
  );
}
