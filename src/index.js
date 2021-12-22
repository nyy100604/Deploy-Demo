import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    {" "}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
