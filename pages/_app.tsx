import type { AppProps } from "next/app";
import {
  ThemeProvider,
  DefaultTheme,
  createGlobalStyle,
} from "styled-components";
import { Layout } from "../src/layout/components/main-layout";

const theme: DefaultTheme = {
  colors: {
    primary: "#ff4742",
    secondary: "#000",
    white: "#fff",
    gray: "gray",
  },
  borderRadius: "10px",
};

const GlobalStyle = createGlobalStyle`
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
    
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }


  a {
    text-decoration: none;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
