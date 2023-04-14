import React from "react";
import {
  ReactangleLogosSection,
  ReactangleLogosContainer,
  ReactangleLogosItem,
  ReactangleLogosItemBackground,
  ReactangleLogosItemForeground,
  ReactangleLogosItemIcon,
  ReactangleLogosMultipleItems,
  ReactangleLogosItemCentral,
  ReactangleLogosItemCentralBackground,
  ReactangleLogosItemCentralForeground,
  ReactangleLogosItemCentralFlexContainer,
  ReactangleLogosItemCentralText,
  ReactangleLogosItemCentralSmileIcon,
  ReactangleLogosItemCentralContentContainer,
} from "./RectangleLogos.styled";
import {
  ContentContainer,
  SectionTitle,
  SvgContainer,
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
  return (
    <ReactangleLogosSection>
      <ContentContainer>
        <SectionTitle>We`ll put a smile on your supply chain </SectionTitle>
        <ReactangleLogosContainer>
          <ReactangleLogosItem>
            <ReactangleLogosItemBackground></ReactangleLogosItemBackground>
            <ReactangleLogosItemForeground></ReactangleLogosItemForeground>
            <ReactangleLogosItemIcon src={PetShopLogoIcon} alt="Logo Icon" />
          </ReactangleLogosItem>
          {/* First Row */}
          <ReactangleLogosMultipleItems styles={{ margin: "-46px 0px 0px" }}>
            <ReactangleLogosItem styles={{ margin: "0px 19px 0px 0px" }}>
              <ReactangleLogosItemBackground></ReactangleLogosItemBackground>
              <ReactangleLogosItemForeground></ReactangleLogosItemForeground>
              <ReactangleLogosItemIcon src={NexLogoIcon} alt="Logo Icon" />
            </ReactangleLogosItem>
            <ReactangleLogosItem>
              <ReactangleLogosItemBackground></ReactangleLogosItemBackground>
              <ReactangleLogosItemForeground></ReactangleLogosItemForeground>
              <ReactangleLogosItemIcon src={BBSLogoIcon} alt="Logo Icon" />
            </ReactangleLogosItem>
          </ReactangleLogosMultipleItems>
          {/* Second Row With 2 Items */}
          <ReactangleLogosMultipleItems styles={{ margin: "-39px 0px 0px" }}>
            <ReactangleLogosItem styles={{ margin: "0px 151px 0px 0px" }}>
              <ReactangleLogosItemBackground></ReactangleLogosItemBackground>
              <ReactangleLogosItemForeground></ReactangleLogosItemForeground>
              <ReactangleLogosItemIcon src={NaylaLogoIcon} alt="Logo Icon" />
            </ReactangleLogosItem>
            <ReactangleLogosItem>
              <ReactangleLogosItemBackground></ReactangleLogosItemBackground>
              <ReactangleLogosItemForeground></ReactangleLogosItemForeground>
              <ReactangleLogosItemIcon src={TKLogoIcon} alt="Logo Icon" />
            </ReactangleLogosItem>
          </ReactangleLogosMultipleItems>
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
          <ReactangleLogosMultipleItems styles={{ margin: "-96px 0px 0px" }}>
            <ReactangleLogosItem styles={{ margin: "0px 151px 0px 0px" }}>
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
          </ReactangleLogosMultipleItems>
          {/* Third From End Row With 2 Items */}
          <ReactangleLogosMultipleItems styles={{ margin: "-39px 0px 0px" }}>
            <ReactangleLogosItem styles={{ margin: "0px 19px 0px 0px" }}>
              <ReactangleLogosItemBackground></ReactangleLogosItemBackground>
              <ReactangleLogosItemForeground></ReactangleLogosItemForeground>
              <ReactangleLogosItemIcon src={EstehLogoIcon} alt="Logo Icon" />
            </ReactangleLogosItem>
            <ReactangleLogosItem>
              <ReactangleLogosItemBackground></ReactangleLogosItemBackground>
              <ReactangleLogosItemForeground></ReactangleLogosItemForeground>
              <ReactangleLogosItemIcon src={GongchaLogoIcon} alt="Logo Icon" />
            </ReactangleLogosItem>
          </ReactangleLogosMultipleItems>
          {/* Second From End Row With 2 Items */}
          <ReactangleLogosItem styles={{ margin: "-46px 0px 0px" }}>
            <ReactangleLogosItemBackground></ReactangleLogosItemBackground>
            <ReactangleLogosItemForeground></ReactangleLogosItemForeground>
            <ReactangleLogosItemIcon src={KhopakaLogoIcon} alt="Logo Icon" />
          </ReactangleLogosItem>
          {/* First From End Row */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </ReactangleLogosContainer>
      </ContentContainer>
    </ReactangleLogosSection>
  );
};

export default RectangleLogos;
