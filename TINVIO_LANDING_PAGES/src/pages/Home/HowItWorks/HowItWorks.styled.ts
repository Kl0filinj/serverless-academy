import { theme } from "@/theme";
import styled from "styled-components";

interface HowItWorksStaticCardProps {
  ml?: "auto" | 0 | "0";
  mb?: string;
}

interface HowItWorksSvgContainerProps {
  styles: IstylesObject;
}

interface IstylesObject {
  [key: string]: string;
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

export const HowItWorksCardTitle = styled.h3`
  font-family: "GiloryBold";
  font-size: ${theme.fontSizes.small_mb};
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

export const HowItWorksSvgContainer = styled.div<HowItWorksSvgContainerProps>`
  position: absolute;
  ${(p) => p.styles}
`;
