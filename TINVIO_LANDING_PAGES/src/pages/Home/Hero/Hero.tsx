import {
  AccentButton,
  HeroTitle,
  SectionSubtitle,
} from "../../../components/shared/styles/shearedStyles";
import React from "react";
import {
  HeroRedBgRectangle,
  HeroRedRectangle,
  HeroSection,
  SmalDots,
  UnderButtonText,
} from "./HeroHome.styled";

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroTitle>Collecting payments is easy, right?</HeroTitle>
      <SectionSubtitle>
        Manage all your supply chain transactions in one dashboard. Get paid
        faster, reconcile quicker, grow bigger.
      </SectionSubtitle>
      <AccentButton>Get Started Now</AccentButton>
      <UnderButtonText>It's free to try!</UnderButtonText>
      <HeroRedBgRectangle>
        <HeroRedRectangle>
          <SmalDots></SmalDots>
          {/* <BigDots></BigDots> */}
        </HeroRedRectangle>
      </HeroRedBgRectangle>
    </HeroSection>
  );
};

export default Hero;
