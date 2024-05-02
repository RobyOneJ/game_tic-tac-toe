/*You won’t be editing this file during the tutorial but it is the bridge between the component you created in the App.js file and the web browser.*/


/*Lines 6-10 bring all the necessary pieces together*/

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

/* The below brings all the pieces together and injects the final product into 'index.html' in the public folder.*/
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);