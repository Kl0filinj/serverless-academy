import { theme } from "@/theme";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ContentContainer, SvgContainer } from "../shared/styles/shearedStyles";
import medDotsGroupIcon from "@/assets/shared/dots/med_17_dots_group.svg";
import bigDotsGroupIcon from "@/assets/shared/dots/big_25_dots_group.svg";

interface HeaderNavContainerProps {
  isMenuOpen?: boolean;
}

export const HeaderS = styled.header`
  padding: 24px 21px;
  margin: 0 auto;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(24px);
`;

export const HeaderInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BurgerMenuBtn = styled.button`
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
`;

export const HeaderNav = styled.nav`
  margin: 231px 0px 0px;
  position: relative;
`;

export const HeaderNavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 48px;
  color: ${theme.colors.primary};
  padding: 0px;
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
`;

export const BurgerMenuDotsIcon = styled(SvgContainer)`
  bottom: 98px;
  right: -60px;
`;
