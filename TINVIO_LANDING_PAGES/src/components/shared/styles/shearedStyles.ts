import { theme } from "@/theme";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface SvgContainerProps {
  styles?: IstylesObject;
  isBgUrl?: boolean;
}

interface IstylesObject {
  [key: string]: string;
}

export const HeroTitle = styled.h1`
  font-family: "GilorySemiBold";
  font-weight: ${theme.fontWeight.semi_bold};
  font-size: ${theme.fontSizes.mobile.lg};
  line-height: 34px;

  color: ${theme.colors.primary};

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    font-size: ${theme.fontSizes.tablet.xl};
    line-height: 39px;
    margin: 0px auto 16px;
    max-width: 333px;
  }

  @media screen and (min-width: ${theme.breakPoints.md}) {
    font-size: ${theme.fontSizes.desktop.md};
    text-align: start;
    line-height: 49px;
    margin: 0px 0px 16px;
    /* max-width: 333px; */
  }
`;

export const SectionTitle = styled.h2`
  font-family: "GilorySemiBold";
  font-size: ${theme.fontSizes.mobile.lg};
  line-height: 33px;

  color: ${theme.colors.primary};

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    font-size: ${theme.fontSizes.tablet.xl};
    line-height: 39px;
  }
`;

export const SectionSubtitle = styled.p`
  font-family: "InterRegular";
  font-size: ${theme.fontSizes.mobile.sm};
  line-height: 1.57;

  margin: 16px 16px 0px;
  text-align: center;

  color: ${theme.colors.secondary};

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    font-size: ${theme.fontSizes.tablet.md};
    line-height: 24px;
  }

  @media screen and (min-width: ${theme.breakPoints.md}) {
    font-size: ${theme.fontSizes.desktop["2xs"]};
    line-height: 24px;
    /* max-width: 334px; */
    text-align: start;
    margin: 0px;
    max-width: 334px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AccentButton = styled.button`
  padding: 14px 32px;
  margin-top: 32px;
  background-color: ${theme.colors.accent};
  border-radius: 16px;
  color: #ffffff;

  font-family: "GiloryBold";
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSizes.mobile.md};
  line-height: 20px;

  text-align: center;
  z-index: 100;
`;

export const AccentLinkButton = styled(NavLink)`
  display: inline-block;
  width: 180px;
  padding: 14px 0;
  margin: 32px auto 0;
  background-color: ${theme.colors.accent};
  border-radius: 16px;
  color: #ffffff;

  font-family: "GiloryBold";
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSizes.mobile.md};
  line-height: 20px;

  text-align: center;
  text-decoration: none;
  z-index: 100;
`;

export const AccentWhiteButton = styled(AccentButton)`
  background-color: #ffffff;
  color: ${theme.colors.primary};
`;

export const ContentContainer = styled.div`
  max-width: ${theme.breakPoints.xs};
  margin: 0 auto;
  @media screen and (min-width: ${theme.breakPoints.sm}) {
    max-width: 490px;
  }

  @media screen and (min-width: ${theme.breakPoints.md}) {
    max-width: 950px;
  }
`;

export const SvgContainer = styled.div<SvgContainerProps>`
  position: absolute;
  ${(p) => p.styles}
`;

export const SkewedSection = styled.section`
  text-align: center;
  background: rgb(247, 247, 247);
  z-index: 1;
  transform: skewY(-8deg);
  transform-origin: right bottom;
  border-radius: 50px 0px 0px 50px;
  margin: 395px 0px 0px;
  padding-bottom: 140px;
`;

export const SkewedInnerContainer = styled.div`
  top: 33px;
  transform: skewY(8deg);
  max-width: 100%;
  margin: 0px auto;
  position: relative;
`;

export const QuoteWithEmoji = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "GiloryRegular";
  font-weight: 400;
  font-size: ${theme.fontSizes.mobile.sm};
  line-height: 17px;
  color: ${theme.colors.secondary};
`;

export const QuoteEmojiIcon = styled.div`
  margin-left: 8px;
`;
