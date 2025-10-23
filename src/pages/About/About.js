import React from "react";
import AboutHero from "./AboutComponents/AboutHero";
import MissionSection from "./AboutComponents/MissionSection";
import HistorySection from "./AboutComponents/HistorySection";
import TeamSection from "./AboutComponents/TeamSection";
import ValuesSection from "./AboutComponents/ValuesSection";
import StatsSection from "./AboutComponents/StatsSection";
import TimelineSection from "./AboutComponents/TimelineSection";
import AboutCTA from "./AboutComponents/AboutCTA";

const About = () => {
  return (
    <main style={styles.main}>
      <AboutHero />
      <MissionSection />
      <StatsSection />
      <ValuesSection />
      <TimelineSection />
      <TeamSection />
      <HistorySection />
      <AboutCTA />
    </main>
  );
};

const styles = {
  main: {
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    color: "#04223A",
    overflow: "hidden",
  },
};

export default About;