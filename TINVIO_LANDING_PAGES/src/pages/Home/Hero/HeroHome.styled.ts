import styled from "styled-components";
import { theme } from "../../../theme";
import dots from "../../../assets/shared/small_dots_group.svg";

export const HeroSection = styled.section`
  position: relative;
  /* overflow: hidden; */
  text-align: center;
  margin-top: 78px;
  max-width: ${theme.breakPoints.xs};
  padding: 24px 21px;
  margin: 0 auto;
`;

export const HeroRedRectangle = styled.div`
  background: ${theme.colors.accent_red};
  border-radius: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 615px;
  height: 615px;
`;

export const HeroRedBgRectangle = styled.div`
  position: absolute;
  overflow-x: hidden;
  left: -371px;
  top: 364px;
  background: ${theme.colors.accent_bg_red};
  border-radius: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-45deg);
  width: 658px;
  height: 669px;
  z-index: -1;
`;

export const SmalDots = styled.div`
  position: absolute;
  right: -76px;
  top: 113px;
  width: 149px;
  height: 123px;
  transform: rotate(-45deg);
  background-image: url(${dots});
`;

export const UnderButtonText = styled.span`
  display: flex;
  justify-content: center;
  font-family: "GiloryRegular";
  font-size: ${theme.fontSizes.small_mb};
  line-height: 17px;
  text-align: center;
  margin-top: 12px;

  color: ${theme.colors.secondary};
`;
