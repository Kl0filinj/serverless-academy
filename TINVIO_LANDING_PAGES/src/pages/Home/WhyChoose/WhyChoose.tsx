import React, { Key, useState } from "react";
import Slider from "react-slick";
import SliderCard from "./SliderCard";

import cardRiseMainImage1x from "@/assets/mobile/whyChoose/card_rise_image_x1.png";
import cardRiseMainImage2x from "@/assets/mobile/whyChoose/card_rise_image_x2.png";
import cardCoffeeMainImage1x from "@/assets/mobile/whyChoose/card_coffee_image_x1.png";
import cardCoffeeMainImage2x from "@/assets/mobile/whyChoose/card_coffee_image_x2.png";
import cardMilkMainImage1x from "@/assets/mobile/whyChoose/card_milk_image_x1.png";
import cardMilkMainImage2x from "@/assets/mobile/whyChoose/card_milk_image_x2.png";
import cardEggsMainImage1x from "@/assets/mobile/whyChoose/card_eggs_image_x1.png";
import cardEggsMainImage2x from "@/assets/mobile/whyChoose/card_eggs_image_x2.png";

import cardRiseCompanyLogoIcon from "@/assets/shared/Home/whyChooseSection/card_rise_company_logo.svg";
import cardCoffeeCompanyLogoIcon from "@/assets/shared/Home/whyChooseSection/card_coffee_company_logo.svg";
import cardMilkCompanyLogoIcon from "@/assets/shared/Home/whyChooseSection/card_milk_company_logo.svg";
import cardEggsCompanyLogoIcon from "@/assets/shared/Home/whyChooseSection/card_eggs_company_logo.svg";

import inactivePaginationDotIcon from "@/assets/shared/dots/pagination_inactive_dot_icon.svg";
import activePaginationDotIcon from "@/assets/shared/dots/pagination_active_dot_icon.svg";
import starsGroupIcon from "@/assets/shared/Home/whyChooseSection/stars_group.svg";
import bigDotsGroupIcon from "@/assets/shared/dots/big_25_dots_group.svg";

import {
  ContentContainer,
  SkewedInnerContainer,
  SvgContainer,
} from "@/components/shared/styles/shearedStyles";
import { WhyChooseSection, WhyChooseSectionTitle } from "./WhyChoose.styled";

interface ICardInfo {
  descriptionText: string;
  mainImage: {
    x1: string;
    x2: string;
  };
  mainImageSize: {
    width: string;
    height: string;
  };
  companyLogoImage: string;
}

const cardsInfo: { [key: string]: ICardInfo } = {
  rise: {
    descriptionText:
      "Tinvio has been a foundational partner and solution. We now have faster and more efficient communication with our clients, which makes order processing and deliveries smoother than ever before.",
    mainImage: {
      x1: cardRiseMainImage1x,
      x2: cardRiseMainImage2x,
    },
    mainImageSize: {
      width: "183",
      height: "235",
    },
    companyLogoImage: cardRiseCompanyLogoIcon,
  },
  coffee: {
    descriptionText:
      "With Tinvio, it's easier for my customers to make payments across various methods. Every payment is also collected in one business account where funds can be withdrawn instantly at any time.",
    mainImage: {
      x1: cardCoffeeMainImage1x,
      x2: cardCoffeeMainImage2x,
    },
    mainImageSize: {
      width: "181",
      height: "246",
    },
    companyLogoImage: cardCoffeeCompanyLogoIcon,
  },
  milk: {
    descriptionText:
      "Tinvio helps our business run smoother. We can manage our customer's orders, receivables, and most importantly, trace and reconcile their payments without checking banking apps or statements.",
    mainImage: {
      x1: cardMilkMainImage1x,
      x2: cardMilkMainImage2x,
    },
    mainImageSize: {
      width: "128",
      height: "200",
    },
    companyLogoImage: cardMilkCompanyLogoIcon,
  },
  eggs: {
    descriptionText:
      "Tinvio definitely helps to reduce the time and errors in order management between customers and suppliers. It’s super easy to use and available on mobile and web, and the team are friendly and always helpful.",
    mainImage: {
      x1: cardEggsMainImage1x,
      x2: cardEggsMainImage2x,
    },
    mainImageSize: {
      width: "234",
      height: "223",
    },
    companyLogoImage: cardEggsCompanyLogoIcon,
  },
};

const starsGroupIconStyles = {
  top: "-317px",
  left: "50%",
  transform: "translate(-46%, 0)",
};

const bigDotsGroupIconStyles = {
  top: "694px",
  left: "-73px",
};

const WhyChoose: React.FC = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

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
        <SkewedInnerContainer>
          <SvgContainer styles={starsGroupIconStyles}>
            <img src={starsGroupIcon} alt="Stars Icon" />
          </SvgContainer>

          <SvgContainer styles={bigDotsGroupIconStyles}>
            <img src={bigDotsGroupIcon} alt="Dots Icon" />
          </SvgContainer>
          <WhyChooseSectionTitle>Why choose Tinvio?</WhyChooseSectionTitle>
          <Slider {...sliderSettings}>
            {Object.keys(cardsInfo).map((item: Key) => (
              <SliderCard
                key={item}
                mainImage={cardsInfo[item].mainImage}
                mainImageSize={cardsInfo[item].mainImageSize}
                descriptionText={cardsInfo[item].descriptionText}
                companyLogoImage={cardsInfo[item].companyLogoImage}
              />
            ))}
          </Slider>
        </SkewedInnerContainer>
      </ContentContainer>
    </WhyChooseSection>
  );
};

export default WhyChoose;
