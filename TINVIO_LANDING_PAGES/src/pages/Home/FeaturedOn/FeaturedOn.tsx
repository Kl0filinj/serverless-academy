import {
  ContentContainer,
  SvgContainer,
} from "@/components/shared/styles/shearedStyles";
import React from "react";
import {
  FeatureSeparatorLine,
  FeaturedLogoList,
  FeaturedLogoListItem,
  FeaturedSection,
  FeaturedTitle,
} from "./FeaturedOn.styled";
import bigDotsIcon from "@/assets/shared/dots/big_20_dots_group.svg";

import TechCrunchLogo from "@/assets/shared/featuredOnSection/Tech_Crunch_logo.svg";
import TechInAsiaLogo from "@/assets/shared/featuredOnSection/Tech_In_Asia_logo.svg";
import PymntsLogo from "@/assets/shared/featuredOnSection/Pymnts_logo.svg";
import VentureBeatLogo from "@/assets/shared/featuredOnSection/Venture_Beat_logo.svg";

const FeaturedBigDotsIconStyles = {
  width: "280px",
  height: "213px",
  top: "-86px",
  left: "299px",
};

const FeaturedOn: React.FC = () => {
  return (
    <FeaturedSection>
      <SvgContainer styles={FeaturedBigDotsIconStyles}>
        <img src={bigDotsIcon} alt="Dots Icon" />
      </SvgContainer>
      <ContentContainer>
        <div>
          <FeaturedTitle>Featured On</FeaturedTitle>
          <FeatureSeparatorLine></FeatureSeparatorLine>
        </div>
        <FeaturedLogoList>
          <FeaturedLogoListItem>
            <img src={TechCrunchLogo} alt="Tech Crunch Logo" />
          </FeaturedLogoListItem>
          <FeaturedLogoListItem>
            <img src={TechInAsiaLogo} alt="Tech In Asia Logo" />
          </FeaturedLogoListItem>
          <FeaturedLogoListItem>
            <img src={PymntsLogo} alt="Pymnts Logo" />
          </FeaturedLogoListItem>
          <FeaturedLogoListItem>
            <img src={VentureBeatLogo} alt="Venture Beat Logo" />
          </FeaturedLogoListItem>
        </FeaturedLogoList>
      </ContentContainer>
    </FeaturedSection>
  );
};

export default FeaturedOn;
