import Hero from "./Hero/Hero";
import React from "react";
import HowItWorks from "./HowItWorks/HowItWorks";
import SmarterSuplyChain from "./SmarterSuplyChain/SmarterSuplyChain";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <SmarterSuplyChain />
    </>
  );
};

export default Home;
