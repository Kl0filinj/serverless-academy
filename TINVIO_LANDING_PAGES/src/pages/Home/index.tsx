import Hero from "./Hero/Hero";
import React from "react";
import HowItWorks from "./HowItWorks/HowItWorks";
import SmarterSuplyChain from "./SmarterSuplyChain/SmarterSuplyChain";
import FeaturedOn from "./FeaturedOn/FeaturedOn";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <SmarterSuplyChain />
      <FeaturedOn />
    </>
  );
};

export default Home;
