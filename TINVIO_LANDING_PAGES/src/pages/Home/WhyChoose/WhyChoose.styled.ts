import {
  SectionTitle,
  SkewedInnerContainer,
  SkewedSection,
} from "@/components/shared/styles/shearedStyles";
import { theme } from "@/theme";
import styled from "styled-components";
import starsGroupIcon from "@/assets/Home/shared/whyChoose/stars_group.svg";
import bigDotsGroupIcon from "@/assets/shared/dots/big_25_dots_group.svg";

export const WhyChooseSection = styled(SkewedSection)`
  background-color: rgb(54, 54, 54);
  margin-top: 130px;
  margin-bottom: 130px;
  padding-top: 82px;
  padding-bottom: 176px;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    margin-bottom: 180px;
  }

  &::after {
    content: "";
    position: absolute;
    background: url(${starsGroupIcon});
    height: 213.57px;
    width: 353.4px;
    top: -214px;
    left: 61px;

    @media screen and (min-width: ${theme.breakPoints.sm}) {
      left: 409px;
    }
  }
`;

export const WhyChooseSectionTitle = styled(SectionTitle)`
  color: ${theme.colors.white};
  margin-bottom: 32px;
`;

export const WhyCooseSkewedInnerContainer = styled(SkewedInnerContainer)`
  &::before {
    content: "";
    position: absolute;
    background: url(${bigDotsGroupIcon});
    width: 358px;
    height: 311.21px;
    top: 694px;
    left: -73px;
  }
`;
