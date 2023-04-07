import React from "react";
import logo from "../../assets/shared/tinvio_logo.svg";
import burgerMenu from "../../assets/shared/burger_menu_btn.svg";
import { BurgerMenuBtn, HeaderS, Logo } from "./Header.styled";

const Header: React.FC = () => {
  return (
    <>
      <HeaderS>
        <Logo>
          <img src={logo} alt="" />
        </Logo>
        <BurgerMenuBtn>
          <img src={burgerMenu} alt="" />
        </BurgerMenuBtn>
      </HeaderS>
    </>
  );
};

export default Header;
