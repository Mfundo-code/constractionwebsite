import React from "react";
import ContactHero from "./ContactsComponents/ContactHero";
import ContactForm from "./ContactsComponents/ContactForm";
import MapSection from "./ContactsComponents/MapSection";


const Contacts = () => {
  return (
    <main>
      <div>hey i'm Contacts page</div>
      <ContactHero />
      <ContactForm />
      <MapSection />
    </main>
  );
};

export default Contacts;
