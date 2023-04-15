import React from "react";
import {
  HowItWorksCardSubtitle,
  HowItWorksCardTitle,
  HowItWorksChatsCardIcon,
  HowItWorksChatsCardStars,
  HowItWorksContentContainer,
  HowItWorksFirstRedArrow,
  HowItWorksOrdersCardIcon,
  HowItWorksOrdersCardStars,
  HowItWorksPaymentsCardIcon,
  HowItWorksPaymentsCardSecondStars,
  HowItWorksPaymentsCardStars,
  HowItWorksSecondRedArrow,
  HowItWorksSection,
  HowItWorksSeparator,
  HowItWorksSkewdInnerContainer,
  HowItWorksStaticCard,
  PlayIcon,
} from "./HowItWorks.styled";
import {
  AccentWhiteButton,
  ContentContainer,
  SectionSubtitle,
  SectionTitle,
} from "@/components/shared/styles/shearedStyles";

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

const HowItWorks: React.FC = () => {
  return (
    <HowItWorksSection>
      <ContentContainer>
        <HowItWorksSkewdInnerContainer>
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

                <HowItWorksChatsCardIcon>
                  <img src={chatCardIcon} alt="Chat Icon" />
                </HowItWorksChatsCardIcon>
                <div>
                  <HowItWorksFirstRedArrow>
                    <img src={firstRedArrowCardIcon} alt="Red Arrow Icon" />
                  </HowItWorksFirstRedArrow>
                </div>

                <HowItWorksChatsCardStars>
                  <img src={chatStarsIcon} alt="Stars Icon" />
                </HowItWorksChatsCardStars>
              </HowItWorksStaticCard>

              <HowItWorksStaticCard ml="auto" mb="30">
                <div>
                  <HowItWorksCardTitle>Orders</HowItWorksCardTitle>
                  <HowItWorksCardSubtitle>
                    Create or confirm purchase orders with tap of a button
                  </HowItWorksCardSubtitle>
                </div>
                <div>
                  <HowItWorksOrdersCardIcon>
                    <img src={ordersCardIcon} alt="Orders Icon" />
                  </HowItWorksOrdersCardIcon>
                </div>
                <div>
                  <HowItWorksSecondRedArrow>
                    <img src={secondRedArrowCardIcon} alt="Red Arrow Icon" />
                  </HowItWorksSecondRedArrow>
                </div>

                <div>
                  <HowItWorksOrdersCardStars>
                    <img src={ordersStarsIcon} alt="Stars Icon" />
                  </HowItWorksOrdersCardStars>
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
                  <HowItWorksPaymentsCardIcon>
                    <img src={paymentsCardIcon} alt="Payments Icon" />
                  </HowItWorksPaymentsCardIcon>
                </div>
                <div>
                  <HowItWorksPaymentsCardStars>
                    <img src={paymentsStarsIcon} alt="Stars Icon" />
                  </HowItWorksPaymentsCardStars>
                </div>
                <div>
                  <HowItWorksPaymentsCardSecondStars>
                    <img src={paymentsSecondStarsIcon} alt="Stars Icon" />
                  </HowItWorksPaymentsCardSecondStars>
                </div>
              </HowItWorksStaticCard>
            </HowItWorksSeparator>
          </HowItWorksContentContainer>
        </HowItWorksSkewdInnerContainer>
      </ContentContainer>
    </HowItWorksSection>
  );
};

export default HowItWorks;
