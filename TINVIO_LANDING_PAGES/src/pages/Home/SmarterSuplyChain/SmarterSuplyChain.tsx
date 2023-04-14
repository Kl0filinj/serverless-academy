import React, { useState } from "react";
import {
  SmarterDescriptionListItem,
  SmarterOptionButton,
  SmarterOptionsGroup,
  SmarterRedBgRectangle,
  SmarterRedRectangle,
  SmarterSection,
} from "./SmarterSuplyChain.styled";
import {
  AccentLinkButton,
  ContentContainer,
  FlexContainer,
  SectionTitle,
  SvgContainer,
} from "@/components/shared/styles/shearedStyles";

import smarterBigDostIcon from "@/assets/shared/dots/big_25_dots_group.svg";
import smarterMedDostIcon from "@/assets/shared/dots/med_17_dots_group.svg";
import smarterStarsIcon from "@/assets/Home/shared/smarter/smarterStars.svg";

import smarterPhoneOrdersImage1x from "@/assets/Home/mobile/smarter/smarter_phone_orders_x1.png";
import smarterPhoneOrdersImage2x from "@/assets/Home/mobile/smarter/smarter_phone_orders_x2.png";
import smarterPhoneChatsImage1x from "@/assets/Home/mobile/smarter/smarter_phone_chats_x1.png";
import smarterPhoneChatsImage2x from "@/assets/Home/mobile/smarter/smarter_phone_chats_x2.png";

type optionsType = "Chats" | "Orders" | "Payments";

const optionsDescription = {
  Chats:
    "Create chats with any business (even if they're not on Tinvio)^Fully integrated with your favorite chat apps^Real-time messages and alerts",
  Orders:
    "Create or confirm purchase orders at lightning speed^Manage inventory details and availability in real-time^24/7 order insights and data reports",
  Payments:
    "Send invoices and easily track them until they're paid^Real-time payments settlement and reconciliation^Safe, secure, and compliant",
};

const smarterPhoneOrdersImageStyles = {
  transform: "rotate(45deg)",
  height: "520px",
  width: "225px",
  right: "52%",
  top: "-60px",
};

const smarterPhoneChatsImageStyles = {
  transform: "rotate(45deg)",
  height: "520px",
  width: "225px",
  left: "24%",
  top: "136px",
};

const smarterBigDotsIconStyles = {
  transform: "rotate(45deg)",
  left: "234px",
  top: "86px",
};

const smarterMedDotsIconStyles = {
  transform: "rotate(45deg)",
  left: "552px",
  top: "2px",
};

const smarterStarsIconStyles = {
  left: "18px",
  top: "-96px",
  "z-index": "-1",
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
          <ul>
            <SmarterDescriptionListItem>
              <p>{currentOptionsDescription[0]}</p>
            </SmarterDescriptionListItem>
            <SmarterDescriptionListItem>
              <p>{currentOptionsDescription[1]}</p>
            </SmarterDescriptionListItem>
            <SmarterDescriptionListItem>
              <p>{currentOptionsDescription[2]}</p>
            </SmarterDescriptionListItem>
          </ul>
        </FlexContainer>
        <div>
          <AccentLinkButton to="/">More Features</AccentLinkButton>
        </div>
        <SmarterRedBgRectangle>
          <SmarterRedRectangle>
            <SvgContainer styles={smarterBigDotsIconStyles}>
              <img src={smarterBigDostIcon} alt="Dots Icon" />
            </SvgContainer>
            <SvgContainer styles={smarterMedDotsIconStyles}>
              <img src={smarterMedDostIcon} alt="Dots Icon" />
            </SvgContainer>
            <SvgContainer styles={smarterPhoneOrdersImageStyles}>
              <img
                srcSet={`${smarterPhoneOrdersImage1x} 1x, ${smarterPhoneOrdersImage2x} 2x`}
                src={smarterPhoneOrdersImage1x}
                width="100%"
                alt="Phone preview"
              />
              <SvgContainer styles={smarterStarsIconStyles}>
                <img src={smarterStarsIcon} alt="Stars Icon" />
              </SvgContainer>
            </SvgContainer>
            <SvgContainer styles={smarterPhoneChatsImageStyles}>
              <img
                srcSet={`${smarterPhoneChatsImage1x} 1x, ${smarterPhoneChatsImage2x} 2x`}
                src={smarterPhoneChatsImage1x}
                width="100%"
                alt="Phone preview"
              />
            </SvgContainer>
          </SmarterRedRectangle>
        </SmarterRedBgRectangle>
      </ContentContainer>
    </SmarterSection>
  );
};

export default SmarterSuplyChain;
