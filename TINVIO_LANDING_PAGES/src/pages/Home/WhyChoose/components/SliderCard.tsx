import React from "react";
import {
  SliderCardContainer,
  SliderCardTextContainer,
  SliderCardText,
  SliderCardLogoIconContainer,
  SliderCardImage,
  SliderQuotesContainer,
} from "./SliderCard.styled";

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

const SliderCard: React.FC<SliderCardProps> = ({
  mainImage,
  mainImageSize,
  descriptionText,
  companyLogoImage,
}) => {
  return (
    <SliderCardContainer>
      <SliderCardImage>
        <picture>
          <source
            srcSet={`${mainImage.mobile.x1} 1x, ${mainImage.mobile.x2} 2x`}
            media="(max-width: 767px)"
            type="image/png"
          />
          <source
            srcSet={`${mainImage.tablet.x1} 1x, ${mainImage.tablet.x2} 2x`}
            media="(min-width: 768px) and (max-width: 1024px)"
            type="image/png"
          />
          <source
            srcSet={`${mainImage.desktop.x1} 1x, ${mainImage.desktop.x2} 2x`}
            media="(min-width: 1025px)"
            type="image/png"
          />
          <img
            src={mainImage.mobile.x1}
            alt="Image"
            width={mainImageSize.width}
            height={mainImageSize.height}
          />
        </picture>
      </SliderCardImage>
      <SliderCardTextContainer>
        <SliderCardText>{descriptionText}</SliderCardText>
      </SliderCardTextContainer>
      <SliderCardLogoIconContainer>
        <img src={companyLogoImage} alt="Company Logo" />
        <SliderQuotesContainer>
          <img src={quotesIcon} alt="Quotes Icon" />
        </SliderQuotesContainer>
      </SliderCardLogoIconContainer>
    </SliderCardContainer>
  );
};

export default SliderCard;
