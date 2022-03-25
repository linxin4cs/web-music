import React from "react";
import ReactDOM from "react-dom";

import { HashRouter } from "react-router-dom";

import App from "@/App";

import "@/assets/css/base.css";

// 需用一个 <Router> 包裹, 提供一个 history context
const WrappedApp = (
  <HashRouter>
    <App />
  </HashRouter>
);

ReactDOM.render(WrappedApp, document.getElementById("root"));
