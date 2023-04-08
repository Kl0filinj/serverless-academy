import React from "react";
import logo from "../../assets/shared/tinvio_logo.svg";
import burgerMenu from "../../assets/shared/burger_menu_btn.svg";
import { BurgerMenuBtn, HeaderContainer, HeaderS } from "./Header.styled";
import { ContentContainer } from "../shared/styles/shearedStyles";

const Header: React.FC = () => {
  return (
    <>
      <HeaderS>
        <ContentContainer>
          <HeaderContainer>
            <div>
              <img src={logo} alt="" />
            </div>
            <BurgerMenuBtn>
              <img src={burgerMenu} alt="" />
            </BurgerMenuBtn>
          </HeaderContainer>
        </ContentContainer>
      </HeaderS>
    </>
  );
};

export default Header;
