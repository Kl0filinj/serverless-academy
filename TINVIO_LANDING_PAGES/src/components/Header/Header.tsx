import React, { useState } from "react";
import {
  BurgerMenuBtn,
  HeaderInnerContainer,
  HeaderNav,
  HeaderNavList,
  HeaderS,
  HeaderNavContainer,
  HeaderNavLinks,
  HeaderContentContainer,
  HeaderAddictionInfo,
  BurgerMenuDotsIcon,
} from "./Header.styled";
import { AccentButton, SvgContainer } from "../shared/styles/shearedStyles";

import logo from "@/assets/shared/header/tinvio_logo.svg";
import burgerMenuIcon from "@/assets/shared/header/burger_menu_btn.svg";
import crossBurgerMenuIcon from "@/assets/shared/header/cross_burger_icon.svg";

import {
  FooterSocContainer,
  FooterSocInnerContainer,
} from "../Footer/Footer.styled";

import linkedinIcon from "@/assets/shared/footer/linkedin_footer_icon.svg";
import instagramIcon from "@/assets/shared/footer/instagram_footer_icon.svg";
import googlePlayIcon from "@/assets/shared/footer/google_play_footer_icon.svg";
import appStoreIcon from "@/assets/shared/footer/app_store_footer_icon.svg";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (): void => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <HeaderS>
      <HeaderContentContainer>
        <HeaderInnerContainer>
          <div>
            <img width="114" height="38" src={logo} alt="Logotype Icon" />
          </div>
          <BurgerMenuBtn onClick={handleMenuToggle}>
            {isMenuOpen ? (
              <img src={crossBurgerMenuIcon} alt="Burger Menu Icon" />
            ) : (
              <img src={burgerMenuIcon} alt="Cross Burger Menu Icon" />
            )}
          </BurgerMenuBtn>
          <HeaderNavContainer isMenuOpen={isMenuOpen}>
            {/* {isMenuOpen && (
              <BurgerMenuDotsIcon>
                <img src={medDotsGroupIcon} alt="Dots Icon" />
              </BurgerMenuDotsIcon>
            )} */}
            <HeaderNav>
              <HeaderNavList>
                <li>
                  <HeaderNavLinks to="/">Home</HeaderNavLinks>
                </li>
                <li>
                  <HeaderNavLinks to="/features">Features</HeaderNavLinks>
                </li>
                <li>
                  <HeaderNavLinks to="/company">Company</HeaderNavLinks>
                </li>
              </HeaderNavList>
            </HeaderNav>
            <HeaderAddictionInfo>
              <div>
                <AccentButton>Get Started</AccentButton>
              </div>
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
            </HeaderAddictionInfo>
          </HeaderNavContainer>
        </HeaderInnerContainer>
      </HeaderContentContainer>
    </HeaderS>
  );
};

export default Header;
