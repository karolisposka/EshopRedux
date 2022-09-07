import React from "react";
import { ThemeProvider } from "styled-components";
import ReactDOM from "react-dom/client";
import theme from '../src/theme';
import "normalize.css";
import "./fonts.css";
import {Provider} from 'react-redux';
import configureAppSotre from '../src/store/configureStore';
import Router from "./Router";


console.log(theme)
const store = configureAppSotre();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
