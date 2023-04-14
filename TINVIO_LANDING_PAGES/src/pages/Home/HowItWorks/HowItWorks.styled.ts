import {
  SkewedInnerContainer,
  SvgContainer,
} from "@/components/shared/styles/shearedStyles";
import medDotsGroupIcon from "@/assets/shared/dots/med_14_dots_group.svg";
import bigDotsGroupIcon from "@/assets/shared/dots/big_20_dots_group.svg";
import { theme } from "@/theme";
import styled from "styled-components";

interface HowItWorksStaticCardProps {
  ml?: "auto" | 0 | "0";
  mb?: string;
}

export const HowItWorksSection = styled.section`
  text-align: center;
  background: rgb(247, 247, 247);
  z-index: 1;
  transform: skewY(-8deg);
  transform-origin: right bottom;
  border-radius: 50px 0px 0px 50px;
  margin: 395px 0px 0px;
  padding-bottom: 140px;
`;

export const HowItWorksInnerContainer = styled.div`
  top: 33px;
  transform: skewY(8deg);
  max-width: 100%;
  padding: 0px 16px;
  margin: 0px auto;
  position: relative;
`;

export const HowItWorksContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const PlayIcon = styled.span`
  margin-right: 8px;
`;

export const HowItWorksStaticCard = styled.div<HowItWorksStaticCardProps>`
  width: 166px;
  height: 67px;
  margin-left: ${(p) => p.ml};
  margin-bottom: ${(p) => p.mb}px;
  background: #ffffff;
  border-radius: 11.6px;
  box-shadow: rgba(33, 33, 33, 0.1) 4px 7px 20px 0px;
  transform: matrix(0.99, 0.14, -0.14, 0.99, 0, 0);

  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4px 10px;
`;

export const HowItWorksSeparator = styled.div`
  margin-top: 100px;
`;

export const HowItWorksSkewdInnerContainer = styled(SkewedInnerContainer)`
  &::after {
    content: "";
    position: absolute;
    background-image: url(${medDotsGroupIcon});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 199px;
    height: 150px;
    left: -122px;
    top: 330px;
    z-index: -1;
  }

  &::before {
    content: "";
    position: absolute;
    background-image: url(${bigDotsGroupIcon});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 226px;
    width: 299px;
    left: 240px;
    top: 573px;
    z-index: -1;
  }
`;

export const HowItWorksCardTitle = styled.h3`
  font-family: "GiloryBold";
  font-size: ${theme.fontSizes.mobile.sm};
  padding: 0px 0px 5px;
  line-height: 18px;

  color: ${theme.colors.primary};
`;

export const HowItWorksCardSubtitle = styled.p`
  font-family: "InterRegular";
  font-size: 9px;
  line-height: 11px;

  color: ${theme.colors.secondary};
`;

export const HowItWorksChatsCardStars = styled(SvgContainer)`
  transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
  height: 42px;
  width: 40px;
  left: 95px;
  top: -32px;

  & > img {
    width: 33px;
    height: 25px;
  }
`;

export const HowItWorksChatsCardIcon = styled(SvgContainer)`
  transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
  left: 135px;
  top: -25px;

  & > img {
    width: 68px;
    height: 68px;
  }
`;

export const HowItWorksFirstRedArrow = styled(SvgContainer)`
  transform: rotate(1deg);
  left: 168px;
  top: 15px;
  z-index: -1;
  & > img {
    width: 100px;
    height: 91px;
  }
`;

export const HowItWorksOrdersCardStars = styled(SvgContainer)`
  transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
  height: 32px;
  width: 60px;
  left: 100px;
  top: -43px;

  & > img {
    width: 48px;
    height: 26px;
  }
`;

export const HowItWorksOrdersCardIcon = styled(SvgContainer)`
  transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
  left: -25px;
  bottom: -42px;

  & > img {
    width: 68px;
    height: 68px;
  }
`;

export const HowItWorksSecondRedArrow = styled(SvgContainer)`
  transform: rotate(-9deg);
  height: 85px;
  width: 100px;
  left: -100px;
  top: 32px;
  z-index: -1;

  & > img {
    width: 100px;
    height: 91px;
  }
`;

export const HowItWorksPaymentsCardStars = styled(SvgContainer)`
  transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
  height: 59px;
  width: 40px;
  left: 167px;
  top: -9px;

  & > img {
    width: 29px;
    height: 35px;
  }
`;

export const HowItWorksPaymentsCardSecondStars = styled(SvgContainer)`
  transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
  height: 36px;
  width: 40px;
  left: 37px;
  top: -44px;

  & > img {
    width: 30px;
    height: 21px;
  }
`;

export const HowItWorksPaymentsCardIcon = styled(SvgContainer)`
  transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
  left: -24px;
  top: -28px;

  & > img {
    width: 68px;
    height: 68px;
  }
`;
