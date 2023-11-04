import React from "react";
import Hero from "../components/hero/Hero";
import ServicesSection from "../components/section/ServicesSection";
import SectionHistory from "../components/sectionHistory/SectionHistory";
import ProjectSection from "../components/sectionProjects/ProjectSection";
import SectionNews from "../components/sectionNews/SectionNews";

const Home = () => {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <SectionHistory />
      <ProjectSection />
      <SectionNews />
    </div>
  );
};

export default Home;
