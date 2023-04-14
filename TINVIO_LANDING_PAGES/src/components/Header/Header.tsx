import React from "react";
import { BurgerMenuBtn, HeaderContainer, HeaderS } from "./Header.styled";
import { ContentContainer } from "../shared/styles/shearedStyles";

import logo from "@/assets/shared/header/tinvio_logo.svg";
import burgerMenu from "@/assets/shared/header/burger_menu_btn.svg";

const Header: React.FC = () => {
  return (
    <HeaderS>
      <ContentContainer>
        <HeaderContainer>
          <div>
            <img width="114" height="38" src={logo} alt="" />
          </div>
          <BurgerMenuBtn>
            <img src={burgerMenu} alt="" />
          </BurgerMenuBtn>
        </HeaderContainer>
      </ContentContainer>
    </HeaderS>
  );
};

export default Header;
