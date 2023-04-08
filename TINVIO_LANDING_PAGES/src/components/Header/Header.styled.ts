import styled from "styled-components";

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

export const HeaderContainer = styled.div`
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
