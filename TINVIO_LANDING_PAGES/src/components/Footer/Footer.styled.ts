import { theme } from "@/theme";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FlexContainer } from "../shared/styles/shearedStyles";

export const FooterS = styled.footer`
  padding: 40px 66px 8px;
`;

export const FooterContainer = styled(FlexContainer)`
  flex-direction: column;

  @media screen and (min-width: ${theme.breakPoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
  }
`;

export const FooterNavLinks = styled(NavLink)`
  font-family: "GiloryRegular";
  font-weight: 400;
  font-size: ${theme.fontSizes.mobile.sm};
  line-height: 1.9;

  text-align: center;

  color: ${theme.colors.primary};

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    font-size: ${theme.fontSizes.tablet.md};
    line-height: 27px;
  }
`;

export const FooterNav = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0px 0px 48px;
  gap: 16px;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    flex-direction: row;
    gap: 56px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: ${theme.breakPoints.md}) {
    margin: 0px 0px 0px 40px;
  }
`;

export const FooterLogoNavContainer = styled(FlexContainer)`
  flex-direction: column;

  @media screen and (min-width: ${theme.breakPoints.md}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const FooterSocContainer = styled(FlexContainer)`
  @media screen and (min-width: ${theme.breakPoints.sm}) {
    flex-direction: row;
    align-items: baseline;
    gap: 32px;
  }
`;

export const FooterSocInnerContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  gap: 16px;
`;

export const FooterPrivacyInfoContainer = styled(FlexContainer)`
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    flex-direction: row;
  }
  @media screen and (min-width: ${theme.breakPoints.md}) {
    justify-content: start;
  }
`;

export const FooterPrivacyInfo = styled.p`
  font-family: "InterMedium";
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: ${theme.colors.placeholder};
  margin: 0px 8px 0px 0px;
`;

export const FooterPrivacyLink = styled.a`
  color: ${theme.colors.placeholder};
`;

export const FooterPrivacyTermsContainer = styled.div`
  display: flex;
`;
