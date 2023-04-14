import React from "react";
import {
  HeroHomeTitle,
  HeroQuoteEmojiIcon,
  HeroRedBgRectangle,
  HeroRedRectangle,
  HeroSection,
  PhoneHeroImageContainer,
  SmallDotsGroupIconStyles,
} from "./HeroHome.styled";
import {
  AccentButton,
  ContentContainer,
  QuoteWithEmoji,
  SectionSubtitle,
  SvgContainer,
} from "@/components/shared/styles/shearedStyles";

import smileEmojiIcon from "@/assets/Home/shared/hero/smile_emoji.svg";
import heroStarsIcon from "@/assets/Home/shared/hero/hero_stars.svg";
import smalldotsIcon from "@/assets/shared/dots/small_12_dots_group.svg";
import smarterMedDotsIconStyles from "@/assets/shared/dots/big_20_dots_group.svg";

import mobile_phoneHeroImage1x from "@/assets/Home/mobile/hero/hero_phone_x1.png";
import mobile_phoneHeroImage2x from "@/assets/Home/mobile/hero/hero_phone_x2.png";
import tablet_phoneHeroImage1x from "@/assets/Home/tablet/hero/hero_phone_x1.png";
import tablet_phoneHeroImage2x from "@/assets/Home/tablet/hero/hero_phone_x2.png";
import pcHeroImage1x from "@/assets/Home/mobile/hero/hero_pc_x1.png";
import pcHeroImage2x from "@/assets/Home/mobile/hero/hero_pc_x2.png";

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

const pcHeroImageStyles = {
  height: "311px",
  width: "465px",
  right: "-193px",
  top: "372px",
};
ContentContainer;
const Hero: React.FC = () => {
  return (
    <HeroSection>
      <ContentContainer>
        <HeroHomeTitle>
          Collecting payments is easy, right?
          <SvgContainer style={heroStarsGroupIconStyles}>
            <img src={heroStarsIcon} alt="Stars Icon" />
          </SvgContainer>
        </HeroHomeTitle>

        <SectionSubtitle>
          Manage all your supply chain transactions in one dashboard. Get paid
          faster, reconcile quicker, grow bigger.
        </SectionSubtitle>
        <AccentButton>Get Started Now</AccentButton>
        <QuoteWithEmoji>
          It's free to try!
          <HeroQuoteEmojiIcon>
            <img src={smileEmojiIcon} alt="Smile Emoji Icon" />
          </HeroQuoteEmojiIcon>
        </QuoteWithEmoji>
        <PhoneHeroImageContainer>
          <picture>
            <source
              srcSet={`${mobile_phoneHeroImage1x} 1x, ${mobile_phoneHeroImage2x} 2x`}
              media="(max-width: 767px)"
              type="image/png"
            />
            <source
              srcSet={`${tablet_phoneHeroImage1x} 1x, ${tablet_phoneHeroImage2x} 2x`}
              media="(min-width: 768px)"
              type="image/png"
            />
            {/* <source
              srcSet="./images/desktop/team_desktop/ihor.jpg 1x, ./images/desktop/team_desktop/ihor_2x.jpg 2x"
              media="(min-width: 1200px)"
              type="image/png"
            /> */}
            <img
              src={mobile_phoneHeroImage1x}
              alt="Phone Image"
              // width="450"
              // height="460"
            />
          </picture>
        </PhoneHeroImageContainer>
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
              <img src={smarterMedDotsIconStyles} alt="Dots Icon" />
            </SvgContainer>
          </HeroRedRectangle>
        </HeroRedBgRectangle>
      </ContentContainer>
    </HeroSection>
  );
};

export default Hero;
