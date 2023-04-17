import {
  AccentButton,
  ContentContainer,
  SvgContainer,
} from "@/components/shared/styles/shearedStyles";
import { theme } from "@/theme";
import styled from "styled-components";

interface FeedbackPanelFormLabelProps {
  margin?: string;
}

export const FeedbackSection = styled.section`
  position: relative;
  margin-bottom: 438px;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    transform: skewY(8deg);
    background-color: #f7f7f7;
    padding-bottom: 501px;
    margin-bottom: 80px;
    border-radius: 0px 50px 0px 0px;

    &::before {
      content: "";
      position: absolute;
      bottom: -75px;
      left: 0px;
      width: 100vw;
      height: 150px;
      transform: skewY(-8deg);
      background-color: #f7f7f7;
    }
  }

  @media screen and (min-width: ${theme.breakPoints.md}) {
    padding-bottom: 180px;
  }
`;

export const FeedbackContentContainer = styled(ContentContainer)`
  @media screen and (min-width: ${theme.breakPoints.sm}) {
    transform: skewY(-8deg);
    margin-top: 95px;
  }

  @media screen and (min-width: ${theme.breakPoints.md}) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    text-align: start;
    margin-top: 127px;
  }
`;

export const FeedbackPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(
    95.51% 95.51% at 50% 50%,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(250, 250, 250, 0.3) 100%
  );
  border-radius: 36px;
  padding: 16px;
  position: relative;
  z-index: 2;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    padding: 32px;
  }
`;

export const FeedbackPanelForm = styled.form`
  background-color: ${theme.colors.white};
  border-radius: 32px;
  padding: 40px 24px;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    padding: 48px 48px 40px;
  }
`;

export const FeedbackPanelFormCapture = styled.p`
  font-family: "GiloryBold";
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  padding: 0px;
  margin: 0px 0px 32px;
  text-align: center;
  max-width: 295px;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    font-size: ${theme.fontSizes.tablet.lg};
    line-height: 29px;
  }
`;

export const FeedbackPanelFormLabel = styled.label<FeedbackPanelFormLabelProps>`
  display: flex;
  flex-direction: column;
  font-family: "InterRegular";
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: start;
  color: ${theme.colors.secondary};
  margin-bottom: ${(p) => (p.margin ? p.margin : "16px")};
  position: relative;
`;

export const FeedbackPanelFormInput = styled.input`
  background-color: ${theme.colors.input};
  border-radius: 8px;
  border: 1px solid ${theme.colors.input};
  padding: 11px 16px;
  font-family: "InterRegular";
  font-weight: 400;
  font-size: ${theme.fontSizes.mobile.sm};
  line-height: 17px;
  color: ${theme.colors.primary};
  outline: none;
  margin: 8px 0px 0px;
  width: 295px;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    width: 329px;
  }
`;

export const FeedbackPanelFormSubmitBtn = styled(AccentButton)`
  padding: 14px 63px;
  margin: 0px auto 14px;
`;

export const FeedbakcDotsMapImageContainer = styled(SvgContainer)`
  left: -103px;
  width: 559px;
  height: 386px;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    transform: skew(-8deg) rotate(-8deg);
    width: 699px;
    height: 501px;
    left: -69px;
  }

  @media screen and (min-width: ${theme.breakPoints.md}) {
    width: 950px;
    left: -375px;
    top: 183px;
    z-index: -1;
  }
`;
