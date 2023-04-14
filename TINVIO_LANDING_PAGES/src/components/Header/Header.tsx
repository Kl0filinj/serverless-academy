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
} from "./Header.styled";
import { SvgContainer } from "../shared/styles/shearedStyles";

import logo from "@/assets/shared/header/tinvio_logo.svg";
import burgerMenuIcon from "@/assets/shared/header/burger_menu_btn.svg";
import crossBurgerMenuIcon from "@/assets/shared/header/cross_burger_icon.svg";
import medDotsGroupIcon from "@/assets/shared/dots/med_17_dots_group.svg";

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
            {isMenuOpen && (
              <SvgContainer styles={{ bottom: "98px", right: "-60px" }}>
                <img src={medDotsGroupIcon} alt="Dots Icon" />
              </SvgContainer>
            )}
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
          </HeaderNavContainer>
        </HeaderInnerContainer>
      </HeaderContentContainer>
    </HeaderS>
  );
};

export default Header;
