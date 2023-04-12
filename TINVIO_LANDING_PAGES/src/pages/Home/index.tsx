import Hero from "./Hero/Hero";
import React from "react";
import HowItWorks from "./HowItWorks/HowItWorks";
import SmarterSuplyChain from "./SmarterSuplyChain/SmarterSuplyChain";
import FeaturedOn from "./FeaturedOn/FeaturedOn";
import WhyChoose from "./WhyChoose/WhyChoose";
import RectangleLogos from "./RectangleLogos/RectangleLogos";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <SmarterSuplyChain />
      <FeaturedOn />
      <WhyChoose />
      <RectangleLogos />
    </>
  );
};

export default Home;
