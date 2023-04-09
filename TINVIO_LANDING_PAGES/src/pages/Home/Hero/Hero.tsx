import React from "react";
import {
  HeroHomeTitle,
  HeroRedBgRectangle,
  HeroRedRectangle,
  HeroSection,
  UnderButtonText,
} from "./HeroHome.styled";
import {
  AccentButton,
  SectionSubtitle,
  SvgContainer,
} from "@/components/shared/styles/shearedStyles";
import smileEmojiIcon from "@/assets/shared/heroSection/smile_emoji.svg";
import heroStarsIcon from "@/assets/shared/heroSection/hero_stars.svg";
import smalldotsIcon from "@/assets/shared/dots/small_12_dots_group.svg";
import bigdotsIcon from "@/assets/shared/dots/big_20_dots_group.svg";

import phoneHeroImage1x from "@/assets/mobile/hero/hero_phone_x1.png";
import phoneHeroImage2x from "@/assets/mobile/hero/hero_phone_x2.png";
import pcHeroImage1x from "@/assets/mobile/hero/hero_pc_x1.png";
import pcHeroImage2x from "@/assets/mobile/hero/hero_pc_x2.png";

const heroStarsGroupIconStyles = {
  height: "41px",
  width: "58px",
  left: "-12px",
  top: "-24px",
};

const smallDotsGroupIconStyles = {
  transform: "rotate(-45deg)",
  height: "123px",
  width: "149px",
  right: "-76px",
  top: "113px",
};

const bigDotsGroupIconStyles = {
  transform: "rotate(45deg)",
  height: "210px",
  width: "227px",
  right: "20px",
  top: "406px",
};

const phoneHeroImageStyles = {
  height: "242px",
  width: "125px",
  right: "257px",
  top: "490px",
};

const pcHeroImageStyles = {
  height: "311px",
  width: "465px",
  right: "-193px",
  top: "372px",
};

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroHomeTitle>
        Collecting payments is easy, right?
        <SvgContainer styles={heroStarsGroupIconStyles}>
          <img src={heroStarsIcon} alt="Stars Icon" />
        </SvgContainer>
      </HeroHomeTitle>

      <SectionSubtitle>
        Manage all your supply chain transactions in one dashboard. Get paid
        faster, reconcile quicker, grow bigger.
      </SectionSubtitle>
      <AccentButton>Get Started Now</AccentButton>
      <UnderButtonText>It's free to try!</UnderButtonText>
      <SvgContainer styles={phoneHeroImageStyles}>
        <img
          srcSet={`${phoneHeroImage1x} 1x, ${phoneHeroImage2x} 2x`}
          src={phoneHeroImage1x}
          alt="Phone preview"
        />
      </SvgContainer>
      <SvgContainer styles={pcHeroImageStyles}>
        <img
          srcSet={`${pcHeroImage1x} 1x, ${pcHeroImage2x} 2x`}
          src={pcHeroImage1x}
          width="100%"
          alt="PC preview"
        />
      </SvgContainer>
      <HeroRedBgRectangle>
        <HeroRedRectangle>
          <SvgContainer styles={smallDotsGroupIconStyles}>
            <img src={smalldotsIcon} alt="Dots Icon" />
          </SvgContainer>
          <SvgContainer styles={bigDotsGroupIconStyles}>
            <img src={bigdotsIcon} alt="Dots Icon" />
          </SvgContainer>
        </HeroRedRectangle>
      </HeroRedBgRectangle>
    </HeroSection>
  );
};

export default Hero;
