import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./fonts.css";
import {Provider} from 'react-redux';
import configureAppSotre from '../src/store/configureStore';
import Router from "./Router";

const store = configureAppSotre();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
