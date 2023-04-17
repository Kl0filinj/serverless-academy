import React from "react";
import { ContentContainer } from "../shared/styles/shearedStyles";
import {
  FooterS,
  FooterContainer,
  FooterNavLinks,
  FooterNav,
  FooterSocContainer,
  FooterSocInnerContainer,
  FooterPrivacyInfoContainer,
  FooterPrivacyInfo,
  FooterPrivacyLink,
  FooterPrivacyTermsContainer,
  FooterLogoNavContainer,
} from "./Footer.styled";

import logo from "@/assets/shared/header/tinvio_logo.svg";
import linkedinIcon from "@/assets/shared/footer/linkedin_footer_icon.svg";
import instagramIcon from "@/assets/shared/footer/instagram_footer_icon.svg";
import googlePlayIcon from "@/assets/shared/footer/google_play_footer_icon.svg";
import appStoreIcon from "@/assets/shared/footer/app_store_footer_icon.svg";

const Footer: React.FC = () => {
  return (
    <FooterS>
      <ContentContainer>
        <FooterContainer>
          <FooterLogoNavContainer>
            <div>
              <img src={logo} alt="Logo" />
            </div>
            <FooterNav>
              <li>
                <FooterNavLinks to="/">Home</FooterNavLinks>
              </li>
              <li>
                <FooterNavLinks to="/feature">Features</FooterNavLinks>
              </li>
              <li>
                <FooterNavLinks to="/company">Company</FooterNavLinks>
              </li>
            </FooterNav>
          </FooterLogoNavContainer>
          <FooterSocContainer>
            <FooterSocInnerContainer>
              <div>
                <img src={linkedinIcon} alt="Linkedin Icon" />
              </div>
              <div>
                <img src={instagramIcon} alt="Instagram Icon" />
              </div>
            </FooterSocInnerContainer>
            <FooterSocInnerContainer>
              <div>
                <img src={googlePlayIcon} alt="Google Play Icon" />
              </div>
              <div>
                <img src={appStoreIcon} alt="App Store Icon" />
              </div>
            </FooterSocInnerContainer>
          </FooterSocContainer>
        </FooterContainer>
        <FooterPrivacyInfoContainer>
          <div>
            <FooterPrivacyInfo>
              <FooterPrivacyLink href="#">
                © Tinvio™ 2020. All Rights Reserved
              </FooterPrivacyLink>
            </FooterPrivacyInfo>
          </div>
          <FooterPrivacyTermsContainer>
            <FooterPrivacyInfo>
              <FooterPrivacyLink href="#">Privacy Policy</FooterPrivacyLink>
            </FooterPrivacyInfo>
            <FooterPrivacyInfo>|</FooterPrivacyInfo>
            <FooterPrivacyInfo>
              <FooterPrivacyLink href="#">Terms of Service</FooterPrivacyLink>
            </FooterPrivacyInfo>
          </FooterPrivacyTermsContainer>
        </FooterPrivacyInfoContainer>
      </ContentContainer>
    </FooterS>
  );
};

export default Footer;
