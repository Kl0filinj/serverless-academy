import React from "react";
import {
  HowItWorksCardSubtitle,
  HowItWorksCardTitle,
  HowItWorksContentContainer,
  HowItWorksInnerContainer,
  HowItWorksSection,
  HowItWorksSeparator,
  HowItWorksStaticCard,
  HowItWorksSvgContainer,
  PlayIcon,
} from "./HowItWorks.styled";
import {
  AccentWhiteButton,
  SectionSubtitle,
  SectionTitle,
} from "../../../components/shared/styles/shearedStyles";
import playIcon from "../../../assets/shared/play_icon.svg";
import chatCardIcon from "../../../assets/shared/chat_card_icon.svg";
import ordersCardIcon from "../../../assets/shared/orders_card_icon.svg";
import paymentsCardIcon from "../../../assets/shared/payments_card_icon.svg";
import firstRedArrowCardIcon from "../../../assets/shared/first_step_red_arrow.svg";
import secondRedArrowCardIcon from "../../../assets/shared/second_step_red_arrow.svg";

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
  height: "91px",
  width: "100px",
  left: "157px",
  top: "38px",
};

const secondRedArrowIconStyles = {
  height: "85px",
  width: "100px",
  left: "-87px",
  top: "29px",
};

const HowItWorks: React.FC = () => {
  return (
    <HowItWorksSection>
      <HowItWorksInnerContainer>
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
              <HowItWorksSvgContainer styles={chatCardIconStyles}>
                <img src={chatCardIcon} alt="Chat Icon" />
              </HowItWorksSvgContainer>
              <div>
                <HowItWorksSvgContainer styles={firstRedArrowIconStyles}>
                  <img src={firstRedArrowCardIcon} alt="Red Arrow Icon" />
                </HowItWorksSvgContainer>
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
                <HowItWorksSvgContainer styles={ordersIconStyles}>
                  <img src={ordersCardIcon} alt="Orders Icon" />
                </HowItWorksSvgContainer>
              </div>
              <div>
                <HowItWorksSvgContainer styles={secondRedArrowIconStyles}>
                  <img src={secondRedArrowCardIcon} alt="Red Arrow Icon" />
                </HowItWorksSvgContainer>
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
                <HowItWorksSvgContainer styles={paymentsCardIconStyles}>
                  <img src={paymentsCardIcon} alt="Payments Icon" />
                </HowItWorksSvgContainer>
              </div>
              <div></div>
            </HowItWorksStaticCard>
          </HowItWorksSeparator>
        </HowItWorksContentContainer>
      </HowItWorksInnerContainer>
    </HowItWorksSection>
  );
};

export default HowItWorks;
