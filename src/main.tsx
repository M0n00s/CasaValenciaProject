import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  useLocation,
} from "../node_modules/react-router-dom/dist/index";
import { LoginRouter } from "./login/LoginRouter";
// global css
import "./index.css";
// animaciones
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

// import { AppPage } from "./Pages/AppPage";

// Wraper para que las paginas al cambiar se posicionen arriba
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Wrapper>
        <LoginRouter />
      </Wrapper>
    </BrowserRouter>
  </React.StrictMode>
);
