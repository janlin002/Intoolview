import { Html, Head, Main, NextScript } from "next/document";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";

import { store } from "@/store/store";

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head />
      <body>
        <Provider store={store}>
          <ThemeProvider>
            <Main />
          </ThemeProvider>
          <NextScript />
        </Provider>
      </body>
    </Html>
  );
}
