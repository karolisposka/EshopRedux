import React from "react";
import { ThemeProvider } from "styled-components";
import ReactDOM from "react-dom/client";
import theme from '../src/theme';
import { PersistGate } from 'redux-persist/integration/react';
import "normalize.css";
import "./fonts.css";
import {Provider} from 'react-redux';
import {store, persistor} from '../src/store/configureStore';
import Router from "./Router";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    <ThemeProvider theme={theme}>
      <Router />
      </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
