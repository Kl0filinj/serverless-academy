import { ContentContainer } from "@/components/shared/styles/shearedStyles";
import React from "react";
import {
  FeatureSeparatorLine,
  FeaturedLogoList,
  FeaturedLogoListItem,
  FeaturedSection,
  FeaturedTitle,
} from "./FeaturedOn.styled";

import TechCrunchLogo from "@/assets/Home/shared/featuredOn/Tech_Crunch_logo.svg";
import TechInAsiaLogo from "@/assets/Home/shared/featuredOn/Tech_In_Asia_logo.svg";
import PymntsLogo from "@/assets/Home/shared/featuredOn/Pymnts_logo.svg";
import VentureBeatLogo from "@/assets/Home/shared/featuredOn/Venture_Beat_logo.svg";

const FeaturedOn: React.FC = () => {
  return (
    <FeaturedSection>
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
