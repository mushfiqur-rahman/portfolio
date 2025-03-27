import "@/styles/globals.css";
import { Manrope, Merriweather } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useTheme } from "next-themes";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SiteSchema from "@/components/SiteName";
import Progress from "@/components/Progress";
import PinterestTag from "@/components/PinterestTag";

const manrope = Manrope({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

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
        <main className={`${manrope.className}`}>
          <PinterestTag />
          <SiteSchema />
          <Progress />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
          <GoogleAnalytics gaId="G-J2N8PJJ379" />
        </main>
      </ThemeProvider>
    </>
  );
}
