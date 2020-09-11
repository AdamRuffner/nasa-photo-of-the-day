import React from "react";
import { render } from 'react-dom'
import "./index.css";
import App from "./App";
import { ThemeProvider } from 'styled-components'
import theme from './theme'

export const BASE_URL = 'https://api.nasa.gov'
export const API_KEY = 'uZ44Q7fcKVVxiVhEjlPVFgR2z42qz6BeShaolNYz' 
render(
    <ThemeProvider theme = {theme}><App /> </ThemeProvider>,
    document.getElementById("root"));
