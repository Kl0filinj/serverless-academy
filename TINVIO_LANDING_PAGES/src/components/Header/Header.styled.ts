import { theme } from "@/theme";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ContentContainer } from "../shared/styles/shearedStyles";

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

export const HeaderNavContainer = styled.div<HeaderNavContainerProps>`
  display: ${(p) => (p.isMenuOpen ? "block" : "none")};
  background-color: ${theme.colors.white};
  margin-top: 92px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  /* transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1); */
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
