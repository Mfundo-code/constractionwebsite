import React from "react";
import ContactHero from "./ContactsComponents/ContactHero";
import ContactForm from "./ContactsComponents/ContactForm";
import MapSection from "./ContactsComponents/MapSection";

const Contacts = () => {
  return (
    <main style={styles.main}>
      <ContactHero />
      <ContactForm />
      <MapSection />
    </main>
  );
};

const styles = {
  main: {
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    color: "#04223A"
  }
};

export default Contacts;