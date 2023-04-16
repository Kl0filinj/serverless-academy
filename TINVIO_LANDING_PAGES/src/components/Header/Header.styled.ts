import { theme } from "@/theme";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  AccentButton,
  ContentContainer,
  FlexContainer,
  SvgContainer,
} from "../shared/styles/shearedStyles";
import medDotsGroupIcon from "@/assets/shared/dots/med_17_dots_group.svg";
import bigDotsGroupIcon from "@/assets/shared/dots/big_25_dots_group.svg";
import { FooterSocContainer } from "../Footer/Footer.styled";

interface HeaderNavContainerProps {
  isMenuOpen?: boolean;
}

interface HeaderScrolledElementsProps {
  isScrolled?: boolean;
}

export const HeaderS = styled.header<HeaderScrolledElementsProps>`
  padding: 24px 21px;
  margin: 0 auto;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 999;
  background-color: ${(p) =>
    p.isScrolled ? "rgba(255, 255, 255, 0.9)" : "transparent"};
  backdrop-filter: ${(p) => (p.isScrolled ? "blur(24px)" : "none")};
  transition: background-color 250ms cubic-bezier(0.215, 0.61, 0.355, 1),
    filter 250ms cubic-bezier(0.215, 0.61, 0.355, 1);
`;

export const HeaderInnerContainer = styled(FlexContainer)`
  justify-content: space-between;
`;

export const BurgerMenuBtn = styled.button`
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;

  @media screen and (min-width: ${theme.breakPoints.md}) {
    display: none;
  }
`;

export const HeaderNav = styled.nav`
  margin: 231px 0px 0px;
  position: relative;

  @media screen and (min-width: ${theme.breakPoints.md}) {
    margin: 0;
  }
`;

export const HeaderNavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 48px;
  color: ${theme.colors.primary};
  padding: 0px;

  @media screen and (min-width: ${theme.breakPoints.md}) {
    flex-direction: row;
  }
`;

export const HeaderAddictionInfo = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    display: flex;
  }
`;

export const HeaderNavContainer = styled.div<HeaderNavContainerProps>`
  display: ${(p) => (p.isMenuOpen ? "block" : "none")};
  background-color: ${theme.colors.white};
  margin-top: 92px;
  overflow-y: scroll;
  padding-bottom: 92px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    display: ${(p) => (p.isMenuOpen ? "flex" : "none")};
    justify-content: space-evenly;
    flex-direction: column;
  }

  @media screen and (min-width: ${theme.breakPoints.md}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: none;
    margin: 0;
    overflow-y: auto;
    padding: 0;
    position: static;
    width: auto;
    height: auto;
    max-width: 65%;
    width: 100%;
    justify-content: space-between;
    background-color: transparent;
  }

  &::after {
    content: "";
    position: absolute;
    background-image: url(${medDotsGroupIcon});
    bottom: 98px;
    right: 14px;
    width: 153px;
    height: 187px;

    @media screen and (min-width: ${theme.breakPoints.sm}) {
      background-image: url(${bigDotsGroupIcon});
      width: 359px;
      height: 273px;
      bottom: 276px;
      right: -137px;
    }

    @media screen and (min-width: ${theme.breakPoints.md}) {
      display: none;
    }
  }
`;

export const HeaderNavLinks = styled(NavLink)`
  font-family: "GiloryRegular";
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: ${theme.colors.primary};

  &.active {
    color: ${theme.colors.accent};
  }
`;

export const HeaderContentContainer = styled(ContentContainer)`
  @media screen and (min-width: ${theme.breakPoints.sm}) {
    max-width: ${theme.breakPoints.sm};
  }

  @media screen and (min-width: ${theme.breakPoints.md}) {
    max-width: ${theme.breakPoints.md};
  }
`;

export const BurgerMenuDotsIcon = styled(SvgContainer)`
  bottom: 98px;
  right: -60px;
`;

export const HeaderSocContainer = styled(FooterSocContainer)`
  @media screen and (min-width: ${theme.breakPoints.md}) {
    display: none;
  }
`;

export const HeaderAccentButton = styled(
  AccentButton
)<HeaderScrolledElementsProps>`
  @media screen and (min-width: ${theme.breakPoints.md}) {
    margin: 0;

    background-color: ${(p) => (p.isScrolled ? "" : `${theme.colors.white}`)};
    color: ${(p) => (p.isScrolled ? "" : `${theme.colors.primary}`)};
    transition: background-color 250ms cubic-bezier(0.215, 0.61, 0.355, 1),
      color 250ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;
