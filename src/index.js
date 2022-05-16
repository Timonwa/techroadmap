import React from "react";
import ReactDOM from "react-dom/client";
// import { hydrate, render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "../src/styles/css-resets/normalize.css";
import "../src/styles/css-resets/my-css-reset.css";
import "../src/styles/css-resets/my-font-reset.css";
import "./index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//   hydrate(<App />, rootElement);
// } else {
//   render(<App />, rootElement);
// }
