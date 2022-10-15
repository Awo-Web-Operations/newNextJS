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
    orange: "#F47900",
    lighGray: "#E9E9ED",
  },
  borderRadius: "10px",
};

const GlobalStyle = createGlobalStyle`

body {
  font-family: 'Inter', sans-serif;
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
