import React from "react";
import ProjectsHero from "./ProjectsComponents/ProjectsHero";
import ProjectList from "./ProjectsComponents/ProjectList";
import CallToActionSection from "./ProjectsComponents/CallToActionSection";

const Projects = () => {
  return (
    <main>
      <ProjectsHero />
      <ProjectList />
      <CallToActionSection />
    </main>
  );
};

export default Projects;
