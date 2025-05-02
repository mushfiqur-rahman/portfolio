import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en-US">
      <Head />
      <link rel="alternate" hreflang="en-US" href="https://mushfiq.xyz" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
              document.addEventListener("contextmenu", event => event.preventDefault());
              document.addEventListener("keydown", event => {
                if (
                  (event.ctrlKey && (event.key === "u" || event.key === "U")) || // Ctrl + U
                  (event.ctrlKey && event.shiftKey && (event.key === "i" || event.key === "I")) || // Ctrl + Shift + I
                  (event.ctrlKey && event.shiftKey && (event.key === "j" || event.key === "J")) || // Ctrl + Shift + J
                  (event.ctrlKey && event.shiftKey && (event.key === "c" || event.key === "C")) || // Ctrl + Shift + C
                  event.key === "F12" // F12
                ) {
                  event.preventDefault();
                }
              });
            `,
        }}
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
