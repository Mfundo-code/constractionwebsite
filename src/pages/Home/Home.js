import React from "react";
import HeroSection from "./HomeComponents/HeroSection";
import FeaturesSection from "./HomeComponents/FeaturesSection";
import HowItWorksSection from "./HomeComponents/HowItWorksSection";
import ServicesSection from "./HomeComponents/ServicesSection";
import ServicesAreaSection from "./HomeComponents/ServicesAreaSection";
import CallToActionSection from "./HomeComponents/CallToActionSection";
import FloatingButtons from "./HomeComponents/FloatingButtons"; 

const Home = () => {
  return (
    <main>
      <HeroSection />
      <CallToActionSection />
      <FeaturesSection />
      <ServicesSection />
      <HowItWorksSection />
      <FloatingButtons />
    </main>
  );
};

export default Home;
