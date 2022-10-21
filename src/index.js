import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import { createGlobalStyle } from "styled-components"
import {
  GlobalTypographyStyles,
  themes
} from "@bcgx-personalization-community/gamma.ui"

import App from "./App"

// light and dark themes are available
const activeTheme = themes.dark
const vizTheme = activeTheme.viz

const GlobalVizStyles = createGlobalStyle`${vizTheme.globalCSS}`

ReactDOM.render(
  <ThemeProvider theme={activeTheme}>
    <CssBaseline />
    <GlobalVizStyles />
    <GlobalTypographyStyles />
    <App />
  </ThemeProvider>,
  document.querySelector("#root")
)
