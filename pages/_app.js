import "@/styles/globals.css";
import { Manrope } from "next/font/google";
import Script from "next/script";
import { useTheme } from "next-themes";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-Y0TBY9CBHD" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Y0TBY9CBHD');
        `}
      </Script>
      <ThemeProvider enableSystem={true} attribute="class">
        <main className={`${manrope.className}`}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </main>
      </ThemeProvider>
    </>
  );
}
