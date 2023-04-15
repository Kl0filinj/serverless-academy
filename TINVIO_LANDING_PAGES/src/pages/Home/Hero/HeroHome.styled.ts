import styled from "styled-components";
import { theme } from "@/theme";
import {
  HeroTitle,
  QuoteEmojiIcon,
  SvgContainer,
} from "@/components/shared/styles/shearedStyles";

import smallDotsIcon from "@/assets/shared/dots/small_12_dots_group.svg";
import medDotsIcon from "@/assets/shared/dots/med_17_dots_group.svg";
import bigDotsIcon from "@/assets/shared/dots/big_28_dots_group.svg";
import heroMedDotsIcon from "@/assets/shared/dots/big_20_dots_group.svg";

export const HeroSection = styled.section`
  position: relative;
  text-align: center;
  margin-top: 140px;
  max-width: ${theme.containerWidth.xs};
  padding: 24px 21px;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    max-width: calc(${theme.containerWidth.sm} + 42px);
    margin-top: 92px;
  }
`;

export const HeroHomeTitle = styled(HeroTitle)`
  position: relative;
`;

export const HeroRedRectangle = styled.div`
  background: ${theme.colors.accent_red};
  border-radius: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 615px;
  height: 615px;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    width: 921px;
    height: 921px;
  }

  &::after {
    content: "";
    position: absolute;
    background-image: url(${smallDotsIcon});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 149px;
    height: 123px;
    left: 492px;
    top: 36px;
    transform: rotate(45deg);

    @media screen and (min-width: ${theme.breakPoints.sm}) {
      background-image: url(${medDotsIcon});
      width: 245px;
      height: 190px;
      left: 777px;
      top: 140px;
    }
  }
  &::before {
    content: "";
    position: absolute;
    background-image: url(${heroMedDotsIcon});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 277px;
    height: 210px;
    left: 358px;
    top: 428px;
    transform: rotate(45deg);

    @media screen and (min-width: ${theme.breakPoints.sm}) {
      background-image: url(${bigDotsIcon});
      width: 408px;
      height: 309px;
      left: 577px;
      top: 544px;
    }
  }
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

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    width: 999px;
    height: 999px;
    left: -621px;
    top: 374px;
  }
`;

export const HeroQuoteEmojiIcon = styled(QuoteEmojiIcon)`
  margin-top: 12px;
`;

export const SmallDotsGroupIconStyles = styled(SvgContainer)`
  transform: rotate(-45deg);
  height: 123px;
  width: 149px;
  right: -76px;
  top: 113px;
`;

export const PhoneHeroImageContainer = styled(SvgContainer)`
  height: 242px;
  width: 125px;
  right: 257px;
  top: 490px;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    height: 390px;
    width: 199px;
    right: 435px;
    top: 590px;
  }
`;

export const PcHeroImageContainer = styled(SvgContainer)`
  height: 311px;
  width: 465px;
  right: -193px;
  top: 372px;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    height: 543px;
    width: 811px;
    right: -363px;
    top: 336px;
  }
`;
