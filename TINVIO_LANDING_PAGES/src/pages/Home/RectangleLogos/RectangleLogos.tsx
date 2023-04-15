import React from "react";
import {
  ReactangleLogosSection,
  ReactangleLogosContainer,
  ReactangleLogosItem,
  ReactangleLogosItemBackground,
  ReactangleLogosItemForeground,
  ReactangleLogosItemIcon,
  ReactangleLogosItemCentral,
  ReactangleLogosItemCentralBackground,
  ReactangleLogosItemCentralForeground,
  ReactangleLogosItemCentralFlexContainer,
  ReactangleLogosItemCentralText,
  ReactangleLogosItemCentralSmileIcon,
  ReactangleLogosItemCentralContentContainer,
  ReactangleLogosOneItem,
  ReactangleLogosTwoItems,
  ReactangleLogosSecondTopTwoItems,
  ReactangleLogosSecondBottomTwoItems,
} from "./RectangleLogos.styled";
import {
  ContentContainer,
  SectionTitle,
} from "@/components/shared/styles/shearedStyles";

import BBSLogoIcon from "@/assets/Home/shared/rectangleLogos/BBS_logo_icon.svg";
import BurgerLobsterLogoIcon from "@/assets/Home/shared/rectangleLogos/Burger_Lobster_logo_icon.svg";
import EstehLogoIcon from "@/assets/Home/shared/rectangleLogos/Esteh_logo_icon.svg";
import GongchaLogoIcon from "@/assets/Home/shared/rectangleLogos/Gongcha_logo_icon.svg";
import GroupOfCompaniensLogoIcon from "@/assets/Home/shared/rectangleLogos/Goup_Of_Companiens_logo_icon.svg";
import KhopakaLogoIcon from "@/assets/Home/shared/rectangleLogos/Khopaka_logo_icon.svg";
import NaylaLogoIcon from "@/assets/Home/shared/rectangleLogos/Nayla_logo_icon.svg";
import NexLogoIcon from "@/assets/Home/shared/rectangleLogos/Nex_logo_icon.svg";
import PetShopLogoIcon from "@/assets/Home/shared/rectangleLogos/Pet_Shop_logo_icon.svg";
import TKLogoIcon from "@/assets/Home/shared/rectangleLogos/TK_logo_icon.svg";

import smileIcon from "@/assets/Home/shared/rectangleLogos/smile_icon.svg";

const RectangleLogos: React.FC = () => {
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

  const secondTwoItemsStyles =
    deviceType === "mobile"
      ? { margin: "0px 151px 0px 0px" }
      : deviceType === "tablet"
      ? { margin: "0px 428px 0px 0px" }
      : { margin: "119px 0px 0px" };

  const firstTwoItemsStyles =
    deviceType === "mobile"
      ? { margin: "0px 19px 0px 0px" }
      : deviceType === "tablet"
      ? { margin: "0px 143px 0px 0px" }
      : { margin: "119px 0px 0px" };

  return (
    <ReactangleLogosSection>
      <ContentContainer>
        <SectionTitle>We`ll put a smile on your supply chain </SectionTitle>
        <ReactangleLogosContainer>
          <ReactangleLogosOneItem>
            <ReactangleLogosItemBackground></ReactangleLogosItemBackground>
            <ReactangleLogosItemForeground></ReactangleLogosItemForeground>
            <ReactangleLogosItemIcon src={PetShopLogoIcon} alt="Logo Icon" />
          </ReactangleLogosOneItem>
          {/* First Row */}
          <ReactangleLogosTwoItems styles={{ margin: "-46px 0px 0px" }}>
            <ReactangleLogosItem styles={firstTwoItemsStyles}>
              <ReactangleLogosItemBackground></ReactangleLogosItemBackground>
              <ReactangleLogosItemForeground></ReactangleLogosItemForeground>
              <ReactangleLogosItemIcon src={NexLogoIcon} alt="Logo Icon" />
            </ReactangleLogosItem>
            <ReactangleLogosItem>
              <ReactangleLogosItemBackground></ReactangleLogosItemBackground>
              <ReactangleLogosItemForeground></ReactangleLogosItemForeground>
              <ReactangleLogosItemIcon src={BBSLogoIcon} alt="Logo Icon" />
            </ReactangleLogosItem>
          </ReactangleLogosTwoItems>
          {/* Second Row With 2 Items */}
          <ReactangleLogosSecondTopTwoItems
            styles={{ margin: "-39px 0px 0px" }}
          >
            <ReactangleLogosItem styles={secondTwoItemsStyles}>
              <ReactangleLogosItemBackground></ReactangleLogosItemBackground>
              <ReactangleLogosItemForeground></ReactangleLogosItemForeground>
              <ReactangleLogosItemIcon src={NaylaLogoIcon} alt="Logo Icon" />
            </ReactangleLogosItem>
            <ReactangleLogosItem>
              <ReactangleLogosItemBackground></ReactangleLogosItemBackground>
              <ReactangleLogosItemForeground></ReactangleLogosItemForeground>
              <ReactangleLogosItemIcon src={TKLogoIcon} alt="Logo Icon" />
            </ReactangleLogosItem>
          </ReactangleLogosSecondTopTwoItems>
          {/* Third Row With 2 Items */}
          {/* Central Red Rectangle Starts */}
          <ReactangleLogosItemCentral>
            <ReactangleLogosItemCentralBackground>
              <ReactangleLogosItemCentralFlexContainer>
                <ReactangleLogosItemCentralForeground>
                  <ReactangleLogosItemCentralContentContainer>
                    <div>
                      <ReactangleLogosItemCentralText>
                        5000+
                      </ReactangleLogosItemCentralText>
                      <ReactangleLogosItemCentralText>
                        happy businesses
                      </ReactangleLogosItemCentralText>
                    </div>
                    <ReactangleLogosItemCentralSmileIcon>
                      <img
                        src={smileIcon}
                        width="137"
                        height="51"
                        alt="Smile Icon"
                      />
                    </ReactangleLogosItemCentralSmileIcon>
                  </ReactangleLogosItemCentralContentContainer>
                </ReactangleLogosItemCentralForeground>
              </ReactangleLogosItemCentralFlexContainer>
            </ReactangleLogosItemCentralBackground>
          </ReactangleLogosItemCentral>
          {/* Central Red Rectangle Ends */}
          <ReactangleLogosSecondBottomTwoItems
            styles={{ margin: "-96px 0px 0px" }}
          >
            <ReactangleLogosItem styles={secondTwoItemsStyles}>
              <ReactangleLogosItemBackground></ReactangleLogosItemBackground>
              <ReactangleLogosItemForeground></ReactangleLogosItemForeground>
              <ReactangleLogosItemIcon
                src={BurgerLobsterLogoIcon}
                alt="Logo Icon"
              />
            </ReactangleLogosItem>
            <ReactangleLogosItem>
              <ReactangleLogosItemBackground></ReactangleLogosItemBackground>
              <ReactangleLogosItemForeground></ReactangleLogosItemForeground>
              <ReactangleLogosItemIcon
                src={GroupOfCompaniensLogoIcon}
                alt="Logo Icon"
              />
            </ReactangleLogosItem>
          </ReactangleLogosSecondBottomTwoItems>
          {/* Third From End Row With 2 Items */}
          <ReactangleLogosTwoItems styles={{ margin: "-39px 0px 0px" }}>
            <ReactangleLogosItem styles={firstTwoItemsStyles}>
              <ReactangleLogosItemBackground></ReactangleLogosItemBackground>
              <ReactangleLogosItemForeground></ReactangleLogosItemForeground>
              <ReactangleLogosItemIcon src={EstehLogoIcon} alt="Logo Icon" />
            </ReactangleLogosItem>
            <ReactangleLogosItem>
              <ReactangleLogosItemBackground></ReactangleLogosItemBackground>
              <ReactangleLogosItemForeground></ReactangleLogosItemForeground>
              <ReactangleLogosItemIcon src={GongchaLogoIcon} alt="Logo Icon" />
            </ReactangleLogosItem>
          </ReactangleLogosTwoItems>
          {/* Second From End Row With 2 Items */}
          <ReactangleLogosOneItem styles={{ margin: "-46px 0px 0px" }}>
            <ReactangleLogosItemBackground></ReactangleLogosItemBackground>
            <ReactangleLogosItemForeground></ReactangleLogosItemForeground>
            <ReactangleLogosItemIcon src={KhopakaLogoIcon} alt="Logo Icon" />
          </ReactangleLogosOneItem>
          {/* First From End Row */}
        </ReactangleLogosContainer>
      </ContentContainer>
    </ReactangleLogosSection>
  );
};

export default RectangleLogos;
