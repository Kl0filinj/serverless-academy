import React from "react";
import {
  HeroContentContainer,
  HeroHomeTitle,
  HeroQuoteEmojiIcon,
  HeroRedBgRectangle,
  HeroRedRectangle,
  HeroSection,
  PcHeroImageContainer,
  PhoneHeroImageContainer,
} from "./HeroHome.styled";
import {
  AccentButton,
  QuoteWithEmoji,
  SectionSubtitle,
  SvgContainer,
} from "@/components/shared/styles/shearedStyles";

import smileEmojiIcon from "@/assets/Home/shared/hero/smile_emoji.svg";
import heroStarsIcon from "@/assets/Home/shared/hero/hero_stars.svg";

import mobile_phoneHeroImage1x from "@/assets/Home/mobile/hero/hero_phone_x1.png";
import mobile_phoneHeroImage2x from "@/assets/Home/mobile/hero/hero_phone_x2.png";
import tablet_phoneHeroImage1x from "@/assets/Home/tablet/hero/hero_phone_x1.png";
import tablet_phoneHeroImage2x from "@/assets/Home/tablet/hero/hero_phone_x2.png";
import desktop_phoneHeroImage1x from "@/assets/Home/desktop/hero/hero_phone_x1.png";
import desktop_phoneHeroImage2x from "@/assets/Home/desktop/hero/hero_phone_x2.png";
import mobile_pcHeroImage1x from "@/assets/Home/mobile/hero/hero_pc_x1.png";
import mobile_pcHeroImage2x from "@/assets/Home/mobile/hero/hero_pc_x2.png";
import tablet_pcHeroImage1x from "@/assets/Home/tablet/hero/hero_pc_x1.png";
import tablet_pcHeroImage2x from "@/assets/Home/tablet/hero/hero_pc_x2.png";
import desktop_pcHeroImage1x from "@/assets/Home/desktop/hero/hero_pc_x1.png";
import desktop_pcHeroImage2x from "@/assets/Home/desktop/hero/hero_pc_x2.png";

const heroStarsGroupIconStyles = {
  height: "41px",
  width: "58px",
  left: "-12px",
  top: "-24px",
};

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroContentContainer>
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
        <div>
          <AccentButton>Get Started Now</AccentButton>
          <QuoteWithEmoji>
            It's free to try!
            <HeroQuoteEmojiIcon>
              <img src={smileEmojiIcon} alt="Smile Emoji Icon" />
            </HeroQuoteEmojiIcon>
          </QuoteWithEmoji>
        </div>
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
            <source
              srcSet={`${desktop_phoneHeroImage1x} 1x, ${desktop_phoneHeroImage2x} 2x`}
              media="(min-width: 1024px)"
              type="image/png"
            />
            <img src={mobile_phoneHeroImage1x} alt="Phone Image" />
          </picture>
        </PhoneHeroImageContainer>
        <PcHeroImageContainer>
          <picture>
            <source
              srcSet={`${mobile_pcHeroImage1x} 1x, ${mobile_pcHeroImage2x} 2x`}
              media="(max-width: 767px)"
              type="image/png"
            />
            <source
              srcSet={`${tablet_pcHeroImage1x} 1x, ${tablet_pcHeroImage2x} 2x`}
              media="(min-width: 768px)"
              type="image/png"
            />
            <source
              srcSet={`${desktop_pcHeroImage1x} 1x, ${desktop_pcHeroImage2x} 2x`}
              media="(min-width: 1024px)"
              type="image/png"
            />
            <img src={mobile_pcHeroImage1x} alt="PC Image" width="100%" />
          </picture>
        </PcHeroImageContainer>
        <HeroRedBgRectangle>
          <HeroRedRectangle></HeroRedRectangle>
        </HeroRedBgRectangle>
      </HeroContentContainer>
    </HeroSection>
  );
};

export default Hero;
