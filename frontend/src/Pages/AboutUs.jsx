import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | ZeeCare Medical Institute"}
        imageUrl={"/about (1).png"}
      />
      <Biography imageUrl={"/whoweare (1).png"} />
    </>
  );
};

export default AboutUs;