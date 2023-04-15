import React, { useState } from "react";
import {
  SmarterDescriptionList,
  SmarterDescriptionListItem,
  SmarterOptionButton,
  SmarterOptionsGroup,
  SmarterPhoneChatsImageContainer,
  SmarterPhoneOrdersImageContainer,
  SmarterRedBgRectangle,
  SmarterRedRectangle,
  SmarterSection,
} from "./SmarterSuplyChain.styled";
import {
  AccentLinkButton,
  ContentContainer,
  FlexContainer,
  SectionTitle,
} from "@/components/shared/styles/shearedStyles";

import mobile_smarterPhoneOrdersImage1x from "@/assets/Home/mobile/smarter/smarter_phone_orders_x1.png";
import mobile_smarterPhoneOrdersImage2x from "@/assets/Home/mobile/smarter/smarter_phone_orders_x2.png";
import tablet_smarterPhoneOrdersImage1x from "@/assets/Home/tablet/smarter/smarter_phone_orders_x1.png";
import tablet_smarterPhoneOrdersImage2x from "@/assets/Home/tablet/smarter/smarter_phone_orders_x2.png";
import mobile_smarterPhoneChatsImage1x from "@/assets/Home/mobile/smarter/smarter_phone_chats_x1.png";
import mobile_smarterPhoneChatsImage2x from "@/assets/Home/mobile/smarter/smarter_phone_chats_x2.png";
import tablet_smarterPhoneChatsImage1x from "@/assets/Home/tablet/smarter/smarter_phone_chats_x1.png";
import tablet_smarterPhoneChatsImage2x from "@/assets/Home/tablet/smarter/smarter_phone_chats_x2.png";

type optionsType = "Chats" | "Orders" | "Payments";

const optionsDescription = {
  Chats:
    "Create chats with any business (even if they're not on Tinvio)^Fully integrated with your favorite chat apps^Real-time messages and alerts",
  Orders:
    "Create or confirm purchase orders at lightning speed^Manage inventory details and availability in real-time^24/7 order insights and data reports",
  Payments:
    "Send invoices and easily track them until they're paid^Real-time payments settlement and reconciliation^Safe, secure, and compliant",
};

const SmarterSuplyChain = () => {
  const [option, setOption] = useState<optionsType>("Chats");

  const currentOptionsDescription = optionsDescription[option].split("^");

  const onOptionSet = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const optionName = evt.currentTarget.textContent;
    if (optionName === option) {
      return;
    }
    if (
      optionName === "Chats" ||
      optionName === "Orders" ||
      optionName === "Payments"
    ) {
      setOption(optionName);
    }
  };

  return (
    <SmarterSection>
      <ContentContainer>
        <SectionTitle>
          Smarter supply chain transactions. More buddy
        </SectionTitle>
        <SmarterOptionsGroup>
          <li>
            <SmarterOptionButton
              onClick={onOptionSet}
              isActive={option === "Chats"}
            >
              Chats
            </SmarterOptionButton>
          </li>
          <li>
            <SmarterOptionButton
              onClick={onOptionSet}
              isActive={option === "Orders"}
            >
              Orders
            </SmarterOptionButton>
          </li>
          <li>
            <SmarterOptionButton
              onClick={onOptionSet}
              isActive={option === "Payments"}
            >
              Payments
            </SmarterOptionButton>
          </li>
        </SmarterOptionsGroup>
        <FlexContainer>
          <SmarterDescriptionList>
            <SmarterDescriptionListItem>
              <p>{currentOptionsDescription[0]}</p>
            </SmarterDescriptionListItem>
            <SmarterDescriptionListItem>
              <p>{currentOptionsDescription[1]}</p>
            </SmarterDescriptionListItem>
            <SmarterDescriptionListItem>
              <p>{currentOptionsDescription[2]}</p>
            </SmarterDescriptionListItem>
          </SmarterDescriptionList>
        </FlexContainer>
        <div>
          <AccentLinkButton to="/">More Features</AccentLinkButton>
        </div>
        <SmarterRedBgRectangle>
          <SmarterRedRectangle>
            {/* IMAGES */}
            <SmarterPhoneOrdersImageContainer>
              <picture>
                <source
                  srcSet={`${mobile_smarterPhoneOrdersImage1x} 1x, ${mobile_smarterPhoneOrdersImage2x} 2x`}
                  media="(max-width: 767px)"
                  type="image/png"
                />
                <source
                  srcSet={`${tablet_smarterPhoneOrdersImage1x} 1x, ${tablet_smarterPhoneOrdersImage2x} 2x`}
                  media="(min-width: 768px)"
                  type="image/png"
                />
                {/* <source
              srcSet="./images/desktop/team_desktop/ihor.jpg 1x, ./images/desktop/team_desktop/ihor_2x.jpg 2x"
              media="(min-width: 1200px)"
              type="image/png"
            /> */}
                <img
                  src={mobile_smarterPhoneOrdersImage1x}
                  alt="Phone Image"
                  width="100%"
                />
              </picture>
            </SmarterPhoneOrdersImageContainer>
            <SmarterPhoneChatsImageContainer>
              <picture>
                <source
                  srcSet={`${mobile_smarterPhoneChatsImage1x} 1x, ${mobile_smarterPhoneChatsImage2x} 2x`}
                  media="(max-width: 767px)"
                  type="image/png"
                />
                <source
                  srcSet={`${tablet_smarterPhoneChatsImage1x} 1x, ${tablet_smarterPhoneChatsImage2x} 2x`}
                  media="(min-width: 768px)"
                  type="image/png"
                />
                {/* <source
              srcSet="./images/desktop/team_desktop/ihor.jpg 1x, ./images/desktop/team_desktop/ihor_2x.jpg 2x"
              media="(min-width: 1200px)"
              type="image/png"
            /> */}
                <img
                  src={mobile_smarterPhoneOrdersImage1x}
                  alt="Phone Image"
                  width="100%"
                />
              </picture>
            </SmarterPhoneChatsImageContainer>
            {/* IMAGES */}
          </SmarterRedRectangle>
        </SmarterRedBgRectangle>
      </ContentContainer>
    </SmarterSection>
  );
};

export default SmarterSuplyChain;
