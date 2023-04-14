import React from "react";
import {
  HowItWorksCardSubtitle,
  HowItWorksCardTitle,
  HowItWorksContentContainer,
  HowItWorksSeparator,
  HowItWorksStaticCard,
  PlayIcon,
} from "./HowItWorks.styled";
import {
  AccentWhiteButton,
  ContentContainer,
  SectionSubtitle,
  SectionTitle,
  SkewedInnerContainer,
  SkewedSection,
  SvgContainer,
} from "@/components/shared/styles/shearedStyles";
import medDotsGroupIcon from "@/assets/shared/dots/med_14_dots_group.svg";
import bigDotsGroupIcon from "@/assets/shared/dots/big_20_dots_group.svg";

import playIcon from "@/assets/Home/shared/howItworks/play_icon.svg";
import chatCardIcon from "@/assets/Home/shared/howItworks/chat_card_icon.svg";
import chatStarsIcon from "@/assets/Home/shared/howItworks/chat_stars.svg";
import ordersCardIcon from "@/assets/Home/shared/howItworks/orders_card_icon.svg";
import ordersStarsIcon from "@/assets/Home/shared/howItworks/order_stars.svg";
import paymentsCardIcon from "@/assets/Home/shared/howItworks/payments_card_icon.svg";
import paymentsStarsIcon from "@/assets/Home/shared/howItworks/payment_stars.svg";
import paymentsSecondStarsIcon from "@/assets/Home/shared/howItworks/second_payment_stars.svg";
import firstRedArrowCardIcon from "@/assets/Home/shared/howItworks/first_step_red_arrow.svg";
import secondRedArrowCardIcon from "@/assets/Home/shared/howItworks/second_step_red_arrow.svg";

const chatCardIconStyles = {
  transform: "matrix(0.98, -0.18, 0.18, 0.98, 0, 0)",
  left: "135px",
  top: "-25px",
};
const ordersIconStyles = {
  transform: "matrix(0.98, -0.18, 0.18, 0.98, 0, 0)",
  left: "-25px",
  bottom: "-42px",
};
const paymentsCardIconStyles = {
  transform: "matrix(0.98, -0.18, 0.18, 0.98, 0, 0)",
  left: "-24px",
  top: "-28px",
};
const firstRedArrowIconStyles = {
  transform: "rotate(11deg)",
  height: "91px",
  width: "100px",
  left: "157px",
  top: "38px",
};

const secondRedArrowIconStyles = {
  transform: "rotate(-17deg)",
  height: "85px",
  width: "100px",
  left: "-81px",
  top: "46px",
};

const chatsStarsIconStyles = {
  transform: "matrix(0.98, -0.18, 0.18, 0.98, 0, 0)",
  height: "42px",
  width: "40px",
  left: "95px",
  top: "-45px",
};

const ordesStarsIconStyles = {
  transform: "matrix(0.98, -0.18, 0.18, 0.98, 0, 0)",
  height: "32px",
  width: "60px",
  left: "100px",
  top: "-43px",
};

const paymentsStarsIconStyles = {
  transform: "matrix(0.98, -0.18, 0.18, 0.98, 0, 0)",
  height: "59px",
  width: "40px",
  left: "167px",
  top: "-9px",
};

const paymentsSecondStarsIconStyles = {
  transform: "matrix(0.98, -0.18, 0.18, 0.98, 0, 0)",
  height: "36px",
  width: "40px",
  left: "37px",
  top: "-44px",
};

const medDotsGroupIconStyles = {
  height: "150px",
  width: "199px",
  left: "-122px",
  top: "330px",
};

const bigDotsGroupIconStyles = {
  height: "226px",
  width: "299px",
  left: "240px",
  top: "573px",
};

const HowItWorks: React.FC = () => {
  return (
    <SkewedSection>
      <ContentContainer>
        <SkewedInnerContainer>
          <SvgContainer styles={medDotsGroupIconStyles}>
            <img src={medDotsGroupIcon} alt="Dots Icon" />
          </SvgContainer>
          <SvgContainer styles={bigDotsGroupIconStyles}>
            <img src={bigDotsGroupIcon} alt="Dots Icon" />
          </SvgContainer>
          <HowItWorksContentContainer>
            <div>
              <SectionTitle>Check out how it works </SectionTitle>
              <SectionSubtitle>
                It`s easy! Exchange messages, create or confirm orders, send
                invoices, and collect payments across your supply chain — all
                within one dashboard.
              </SectionSubtitle>
              <AccentWhiteButton>
                <PlayIcon>
                  <img src={playIcon} alt="Play Icon" />
                </PlayIcon>
                Play Video
              </AccentWhiteButton>
            </div>

            <HowItWorksSeparator>
              <HowItWorksStaticCard mb="60">
                <div>
                  <HowItWorksCardTitle>Chats</HowItWorksCardTitle>
                  <HowItWorksCardSubtitle>
                    Connect to anyone in your supply chain and exchange messages
                  </HowItWorksCardSubtitle>
                </div>
                <SvgContainer styles={chatCardIconStyles}>
                  <img src={chatCardIcon} alt="Chat Icon" />
                </SvgContainer>
                <div>
                  <SvgContainer styles={firstRedArrowIconStyles}>
                    <img src={firstRedArrowCardIcon} alt="Red Arrow Icon" />
                  </SvgContainer>
                </div>

                <div>
                  <SvgContainer styles={chatsStarsIconStyles}>
                    <img src={chatStarsIcon} alt="Stars Icon" />
                  </SvgContainer>
                </div>
              </HowItWorksStaticCard>

              <HowItWorksStaticCard ml="auto" mb="30">
                <div>
                  <HowItWorksCardTitle>Orders</HowItWorksCardTitle>
                  <HowItWorksCardSubtitle>
                    Create or confirm purchase orders with tap of a button
                  </HowItWorksCardSubtitle>
                </div>
                <div>
                  <SvgContainer styles={ordersIconStyles}>
                    <img src={ordersCardIcon} alt="Orders Icon" />
                  </SvgContainer>
                </div>
                <div>
                  <SvgContainer styles={secondRedArrowIconStyles}>
                    <img src={secondRedArrowCardIcon} alt="Red Arrow Icon" />
                  </SvgContainer>
                </div>

                <div>
                  <SvgContainer styles={ordesStarsIconStyles}>
                    <img src={ordersStarsIcon} alt="Stars Icon" />
                  </SvgContainer>
                </div>
              </HowItWorksStaticCard>

              <HowItWorksStaticCard>
                <div>
                  <HowItWorksCardTitle>Payments</HowItWorksCardTitle>
                  <HowItWorksCardSubtitle>
                    Send invoices and reconcile payments in one dashboard
                  </HowItWorksCardSubtitle>
                </div>
                <div>
                  <SvgContainer styles={paymentsCardIconStyles}>
                    <img src={paymentsCardIcon} alt="Payments Icon" />
                  </SvgContainer>
                </div>
                <div>
                  <SvgContainer styles={paymentsStarsIconStyles}>
                    <img src={paymentsStarsIcon} alt="Stars Icon" />
                  </SvgContainer>
                </div>
                <div>
                  <SvgContainer styles={paymentsSecondStarsIconStyles}>
                    <img src={paymentsSecondStarsIcon} alt="Stars Icon" />
                  </SvgContainer>
                </div>
              </HowItWorksStaticCard>
            </HowItWorksSeparator>
          </HowItWorksContentContainer>
        </SkewedInnerContainer>
      </ContentContainer>
    </SkewedSection>
  );
};

export default HowItWorks;
