import { theme } from "@/theme";
import styled from "styled-components";
import listsDot from "@/assets/shared/dots/lists_red_dot.svg";

interface ISmarterOptionButton {
  isActive: boolean;
}

export const SmarterSection = styled.section`
  padding-top: 140px;
  margin-bottom: 270px;
`;

export const SmarterOptionsGroup = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 24px 0;
`;

export const SmarterOptionButton = styled.button<ISmarterOptionButton>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 11px 24px 12px;
  gap: 10px;
  border: ${(p) => (p.isActive ? `1px solid ${theme.colors.primary}` : "none")};

  background: ${theme.colors.background_grey};
  border-radius: 8px;
`;

export const SmarterDescriptionListItem = styled.li`
  font-family: "InterRegular";
  color: rgb(33, 33, 33);
  margin: 0px 0px 8px;
  padding: 0px 0px 0px 27px;
  text-align: start;
  position: relative;
  font-size: ${theme.fontSizes.small_mb};
  line-height: 20px;

  &::before {
    content: "";
    position: absolute;
    background: url(${listsDot});
    width: 14px;
    height: 14px;
    left: 0px;
    top: 4px;
  }
`;

export const SmarterDescription = styled.p`
  font-family: "InterRegular";
  font-size: ${theme.fontSizes.small_mb};
  line-height: 1.43;

  color: ${theme.colors.primary};
`;

export const SmarterRedRectangle = styled.div`
  background: ${theme.colors.accent_red};
  border-radius: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 395px;
  height: 395px;
`;

export const SmarterRedBgRectangle = styled.div`
  position: relative;
  background: ${theme.colors.accent_bg_red};
  border-radius: 72px;
  transform: rotate(-45deg) translateX(-71%);
  display: flex;
  align-items: center;
  justify-content: center;
  top: -120px;
  left: 50%;
  width: 451px;
  height: 451px;
  margin-top: 57px;
`;
