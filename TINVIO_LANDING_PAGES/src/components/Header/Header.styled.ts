import styled from "styled-components";
import { theme } from "../../theme";

export const HeaderS = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${theme.breakPoints.xs};
  padding: 24px 21px;
  margin: 0 auto;
`;

export const Logo = styled.div``;

export const BurgerMenuBtn = styled.button`
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
`;
