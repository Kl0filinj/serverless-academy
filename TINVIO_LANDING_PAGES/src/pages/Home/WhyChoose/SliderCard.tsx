import React from "react";
import {
  SliderCardContainer,
  SliderCardImageContainer,
  SliderCardTextContainer,
  SliderCardText,
  SliderCardLogoIconContainer,
  SliderCardImage,
} from "./SliderCard.styled";
import { SvgContainer } from "@/components/shared/styles/shearedStyles";

import quotesIcon from "@/assets/Home/shared/whyChoose/quotes_icon.svg";

interface SliderCardProps {
  mainImage: {
    mobile: {
      x1: string;
      x2: string;
    };
    tablet: {
      x1: string;
      x2: string;
    };
    desktop: {
      x1: string;
      x2: string;
    };
  };
  mainImageSize: {
    width: string;
    height: string;
  };
  descriptionText: string;
  companyLogoImage: string;
}

const quotesIconStyles = {
  top: "27%",
  left: "90%",
};

const SliderCard: React.FC<SliderCardProps> = ({
  mainImage,
  mainImageSize,
  descriptionText,
  companyLogoImage,
}) => {
  return (
    <SliderCardContainer>
      <SliderCardImage size={mainImageSize}>
        <picture>
          <source
            srcSet={`${mainImage.mobile.x1} 1x, ${mainImage.mobile.x2} 2x`}
            media="(max-width: 767px)"
            type="image/png"
          />
          <source
            srcSet={`${mainImage.tablet.x1} 1x, ${mainImage.tablet.x2} 2x`}
            media="(min-width: 768px)"
            type="image/png"
          />
          {/* <source
              srcSet="./images/desktop/team_desktop/ihor.jpg 1x, ./images/desktop/team_desktop/ihor_2x.jpg 2x"
              media="(min-width: 1200px)"
              type="image/png"
            /> */}
          <img src={mainImage.mobile.x1} alt="Image" />
        </picture>
      </SliderCardImage>
      <SliderCardTextContainer>
        <SliderCardText>{descriptionText}</SliderCardText>
      </SliderCardTextContainer>
      <SliderCardLogoIconContainer>
        <img src={companyLogoImage} alt="Company Logo" />
        <SvgContainer styles={quotesIconStyles}>
          <img src={quotesIcon} alt="Quotes Icon" />
        </SvgContainer>
      </SliderCardLogoIconContainer>
    </SliderCardContainer>
  );
};

export default SliderCard;
