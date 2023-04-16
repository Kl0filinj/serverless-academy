import React, { useEffect, useState } from "react";
import {
  BurgerMenuBtn,
  HeaderNav,
  HeaderNavList,
  HeaderS,
  HeaderNavContainer,
  HeaderNavLinks,
  HeaderContentContainer,
  HeaderAddictionInfo,
  HeaderInnerContainer,
  HeaderSocContainer,
  HeaderAccentButton,
} from "./Header.styled";
import { AccentButton } from "../shared/styles/shearedStyles";

import logo from "@/assets/shared/header/tinvio_logo.svg";
import burgerMenuIcon from "@/assets/shared/header/burger_menu_btn.svg";
import crossBurgerMenuIcon from "@/assets/shared/header/cross_burger_icon.svg";

import { FooterSocInnerContainer } from "../Footer/Footer.styled";

import linkedinIcon from "@/assets/shared/footer/linkedin_footer_icon.svg";
import instagramIcon from "@/assets/shared/footer/instagram_footer_icon.svg";
import googlePlayIcon from "@/assets/shared/footer/google_play_footer_icon.svg";
import appStoreIcon from "@/assets/shared/footer/app_store_footer_icon.svg";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset > 20);
    };
  }, []);

  const handleMenuToggle = (): void => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <HeaderS isScrolled={isScrolled}>
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
                <HeaderAccentButton isScrolled={isScrolled}>
                  Get Started
                </HeaderAccentButton>
              </div>
              <HeaderSocContainer>
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
              </HeaderSocContainer>
            </HeaderAddictionInfo>
          </HeaderNavContainer>
        </HeaderInnerContainer>
      </HeaderContentContainer>
    </HeaderS>
  );
};

export default Header;
