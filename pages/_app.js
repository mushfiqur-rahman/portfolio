import "@/styles/globals.css";
import { Manrope } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useTheme } from "next-themes";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SiteSchema from "@/components/SiteName";

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
          <SiteSchema />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
          <GoogleAnalytics gaId="G-J2N8PJJ379" />
        </main>
      </ThemeProvider>
    </>
  );
}
