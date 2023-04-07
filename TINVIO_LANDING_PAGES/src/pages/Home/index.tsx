import Hero from "./Hero/Hero";
import React from "react";
import HowItWorks from "./HowItWorks/HowItWorks";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
    </>
  );
};

export default Home;
