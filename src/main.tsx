import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import { BrowserRouter, Route, Routes } from "react-router";
import MasterPage from "./components/pages/masterPage/MasterPage.tsx";
import HomePage from "./components/pages/homePage/HomePage.tsx";
import ProjectsPage from "./components/pages/projectsPage/ProjectsPage.tsx";
import { ParallaxProvider } from "react-scroll-parallax";

createRoot(document.getElementById("root")!).render(
  <ParallaxProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MasterPage />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ParallaxProvider>
);
