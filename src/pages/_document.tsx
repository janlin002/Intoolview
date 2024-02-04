import { Html, Head, Main, NextScript } from "next/document";
import { ThemeProvider } from "@material-tailwind/react";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ThemeProvider>
          <Main />
        </ThemeProvider>
        <NextScript />
      </body>
    </Html>
  );
}
