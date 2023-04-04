import React from "react";
import { BurgerMenuBtn, HeaderS, Logo } from "./Header.styled";

const Header: React.FC = () => {
  return (
    <>
      <HeaderS>
        <Logo>
          <svg width="116px" height="42px" display="inline-block">
            <use href="../../assets/mobile/header/tinvio_logo.svg" />
          </svg>
        </Logo>
        <BurgerMenuBtn>add</BurgerMenuBtn>
      </HeaderS>
    </>
  );
};

export default Header;
