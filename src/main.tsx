import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "../node_modules/react-router-dom/dist/index";
// import { LoginRouter } from "./login/LoginRouter";

import "./index.css";
import { AppPage } from "./Pages/AppPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppPage />
    </BrowserRouter>
  </React.StrictMode>
);
