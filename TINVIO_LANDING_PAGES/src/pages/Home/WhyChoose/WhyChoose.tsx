import React, { Key, useState } from "react";
import { ContentContainer } from "@/components/shared/styles/shearedStyles";
import {
  WhyChooseSection,
  WhyChooseSectionTitle,
  WhyCooseSkewedInnerContainer,
} from "./WhyChoose.styled";
import Slider from "react-slick";
import SliderCard from "./components/SliderCard";

import inactivePaginationDotIcon from "@/assets/shared/dots/pagination_inactive_dot_icon.svg";
import activePaginationDotIcon from "@/assets/shared/dots/pagination_active_dot_icon.svg";

import cardsInfo from "./cardsInfo";

const WhyChoose: React.FC = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const deviceType: "mobile" | "tablet" | "desktop" = (() => {
    const pageWidth = document.documentElement.scrollWidth;
    if (pageWidth < 768 && pageWidth > 1) {
      return "mobile";
    }
    if (pageWidth > 768 && pageWidth < 1024) {
      return "tablet";
    }
    if (pageWidth > 1024 && pageWidth < 1920) {
      return "desktop";
    }
    return "desktop";
  })();

  const handleAfterChange = (index: number) => {
    setCurrentCardIndex(index);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: handleAfterChange,
    customPaging: (i: number) => (
      <div>
        <img
          src={
            i === currentCardIndex
              ? activePaginationDotIcon
              : inactivePaginationDotIcon
          }
          alt="Pagination Dot"
        />
      </div>
    ),
  };

  return (
    <WhyChooseSection>
      <ContentContainer>
        <WhyCooseSkewedInnerContainer>
          <WhyChooseSectionTitle>Why choose Tinvio?</WhyChooseSectionTitle>
          <Slider {...sliderSettings}>
            {Object.keys(cardsInfo).map((item: Key) => (
              <SliderCard
                key={item}
                mainImage={cardsInfo[item].mainImage}
                mainImageSize={cardsInfo[item].mainImageSize[deviceType]}
                descriptionText={cardsInfo[item].descriptionText}
                companyLogoImage={cardsInfo[item].companyLogoImage}
              />
            ))}
          </Slider>
        </WhyCooseSkewedInnerContainer>
      </ContentContainer>
    </WhyChooseSection>
  );
};

export default WhyChoose;
