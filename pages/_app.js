import "@/styles/globals.css";
import localFont from "next/font/local";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import SiteSchema from "@/components/SiteName";
import Progress from "@/components/Progress";
import PinterestTag from "@/components/PinterestTag";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Manrope = localFont({ src: "../public/fonts/ManropeRegular.woff2" });

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={`${Manrope.className}`}>
        <PinterestTag />
        <SiteSchema />
        <Navbar />
        <Progress />
        <GoogleTagManager gtmId="MSLF9J5J" />
        <Component {...pageProps} />
        <GoogleAnalytics gaId="G-J2N8PJJ379" />
        <Footer />
      </main>
    </>
  );
}
