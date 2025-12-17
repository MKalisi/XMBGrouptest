import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./styles/globals.css";
import "swiper/css";
import "swiper/css/parallax";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
