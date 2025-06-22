import "@/styles/globals.css";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useTheme } from "next-themes";
import { ThemeProvider } from "next-themes";
import SiteSchema from "@/components/SiteName";
import Progress from "@/components/Progress";
import PinterestTag from "@/components/PinterestTag";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Manrope = localFont({ src: "../public/fonts/ManropeRegular.woff2" });

export default function App({ Component, pageProps }) {
  const { SystemTheme, theme, setTheme } = useTheme();

  const getGradientBackground = () => {
    const currentTheme = theme === "system" ? SystemTheme : theme;

    if (currentTheme === "dark") {
      return {
        background:
          "linear-gradient(109.6deg, rgb(20, 30, 48) 11.2%, rgb(36, 59, 85) 91.1%)",
      };
    } else {
      return {};
    }
  };

  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <main className={`${Manrope.className}`}>
          <PinterestTag />
          <SiteSchema />
          <Progress />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
          <GoogleAnalytics gaId="G-J2N8PJJ379" />
          <SpeedInsights />
          <Analytics />
        </main>
      </ThemeProvider>
    </>
  );
}
