import { theme } from "@/theme";
import styled from "styled-components";

export const FooterS = styled.footer`
  padding: 40px 66px 8px;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterNavLinks = styled.a`
  font-family: "GiloryRegular";
  font-weight: 400;
  font-size: ${theme.fontSizes.small_mb};
  line-height: 1.9;

  text-align: center;

  color: ${theme.colors.primary};
`;

export const FooterNav = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0px 0px 48px;
  gap: 16px;
`;

export const FooterSocContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FooterSocInnerContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  gap: 16px;
`;

export const FooterPrivacyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
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
  /* justify-content: center;
  align-items: center; */
`;
