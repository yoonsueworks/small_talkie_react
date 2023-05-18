import React from "react";
import ReactDOM from "react-dom/client";

import Router from "./Router";
import theme from "./style/theme";
import variables from "./style/variable";
import GlobalStyle from "./style/global";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={{ style: theme, variables }}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>
);
