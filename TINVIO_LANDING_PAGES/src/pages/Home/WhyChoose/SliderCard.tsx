import React from "react";
import {
  SliderCardContainer,
  SliderCardImageContainer,
  SliderCardTextContainer,
  SliderCardText,
  SliderCardLogoIconContainer,
} from "./SliderCard.styled";
import { SvgContainer } from "@/components/shared/styles/shearedStyles";

import quotesIcon from "@/assets/Home/shared/whyChoose/quotes_icon.svg";

interface SliderCardProps {
  mainImage: {
    x1: string;
    x2: string;
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
      <SliderCardImageContainer>
        <img
          srcSet={`${mainImage.x1} 1x, ${mainImage.x2} 2x`}
          src={mainImage.x1}
          width={mainImageSize.width}
          height={mainImageSize.height}
          alt="Card Icon"
        />
      </SliderCardImageContainer>
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
