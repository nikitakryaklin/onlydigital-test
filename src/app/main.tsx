import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.scss";
import { HomePage } from "@/pages";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);
