import React from "react";
import HeroSection from "../components/heroSection/HeroSection";
import SectionAbout from "../components/SectionAbout/SectionAbout";
import ContactComp from "../components/ContactComp/ContactComp";

const About = () => {
  return (
    <div>
      <HeroSection
        bgImg={
          "https://images.pexels.com/photos/4513940/pexels-photo-4513940.jpeg"
        }
        hText={"About"}
        subText={
          "During all this time we stayed true to one and the same principles of business operations."
        }
      />
      <SectionAbout />
      <ContactComp 
       text={"If you can envision it, then we can build it. Tell us more about your project"}/>
    </div>
  );
};

export default About;
