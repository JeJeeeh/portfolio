import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import MasterPage from "./components/pages/masterPage/MasterPage.tsx";
import HomePage from "./components/pages/homePage/HomePage.tsx";
import ProjectsPage from "./components/pages/projectsPage/ProjectsPage.tsx";
import { ParallaxProvider } from "react-scroll-parallax";
import AboutPage from "./components/pages/aboutPage/AboutPage.tsx";

createRoot(document.getElementById("root")!).render(
  <ParallaxProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MasterPage />}>
          <Route index element={<HomePage />} />

          <Route path="projects">
            <Route index element={<ProjectsPage />} />
            <Route path=":slug" element={<Navigate to="/projects" />} />
          </Route>

          <Route path="about" element={<AboutPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ParallaxProvider>
);
