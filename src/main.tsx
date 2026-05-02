import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.css";

AOS.init({
  duration: 700,
  easing: "ease-out-cubic",
  once: true,
  offset: 60,
});

const router = getRouter();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
