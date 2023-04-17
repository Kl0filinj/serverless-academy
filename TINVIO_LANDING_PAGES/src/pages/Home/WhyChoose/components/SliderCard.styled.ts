import {
  FlexContainer,
  SvgContainer,
} from "@/components/shared/styles/shearedStyles";
import { theme } from "@/theme";
import styled from "styled-components";

export const SliderCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 10px 25px;
  padding-top: 25px;
  background-color: ${theme.colors.white};
  border-radius: 32px;
  min-height: 550px;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    padding-top: 36px;
  }

  @media screen and (min-width: ${theme.breakPoints.md}) {
    max-width: 1032px;
    min-height: 377px;
  }
`;

export const SliderCardTextContainer = styled.div`
  flex-grow: 1;
  text-align: center;
  margin-right: 16px;
  padding: 20px 16px 20px 24px;
  border-radius: 0px 20px 20px 0px;
  background-color: #f1f1f1;

  @media screen and (min-width: ${theme.breakPoints.md}) {
    flex-grow: unset;
    max-width: 731px;
    margin-left: 24px;
    border-radius: 20px;
  }
`;

export const SliderCardText = styled.p`
  font-size: ${theme.fontSizes.mobile.md};
  line-height: 1.44;
  /* or 144% */

  text-align: start;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    font-size: ${theme.fontSizes.tablet.md};
    line-height: 23px;
  }

  @media screen and (min-width: ${theme.breakPoints.md}) {
    max-width: 620px;
    font-size: ${theme.fontSizes.desktop.xs};
    line-height: 24px;
  }
`;

export const SliderCardLogoIconContainer = styled.div`
  flex-grow: 1;
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 20px 16px 20px 24px;

  @media screen and (min-width: ${theme.breakPoints.md}) {
    position: static;
    flex-grow: unset;
  }
`;

export const SliderCardImage = styled(FlexContainer)`
  @media screen and (min-width: ${theme.breakPoints.md}) {
    position: absolute;
    right: 1px;
    top: 1%;
  }
`;

export const SliderQuotesContainer = styled(SvgContainer)`
  top: 27%;
  left: 90%;

  @media screen and (min-width: ${theme.breakPoints.md}) {
    top: 30%;
    left: 60%;
  }
`;
