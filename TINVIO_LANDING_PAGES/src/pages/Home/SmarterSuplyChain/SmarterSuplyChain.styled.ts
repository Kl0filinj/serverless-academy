import { theme } from "@/theme";
import { SvgContainer } from "@/components/shared/styles/shearedStyles";
import styled from "styled-components";
import listsDot from "@/assets/shared/dots/lists_red_dot.svg";
import smarterStarsIcon from "@/assets/Home/shared/smarter/smarterStars.svg";
import smarterBigDostIcon from "@/assets/shared/dots/big_25_dots_group.svg";
import smarterMedDostIcon from "@/assets/shared/dots/med_17_dots_group.svg";

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
  max-width: 387px;
  margin: 24px auto;
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

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    padding: 11px 34px 12px;
  }
`;

export const SmarterDescriptionList = styled.ul`
  @media screen and (min-width: ${theme.breakPoints.sm}) {
    margin: 0px 0px 0px 50px;
  }
`;

export const SmarterDescriptionListItem = styled.li`
  font-family: "InterRegular";
  color: rgb(33, 33, 33);
  margin: 0px 0px 8px;
  padding: 0px 0px 0px 27px;
  text-align: start;
  position: relative;
  font-size: ${theme.fontSizes.mobile.sm};
  line-height: 20px;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    font-size: ${theme.fontSizes.tablet.md};
    line-height: 23px;
  }

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
  font-size: ${theme.fontSizes.mobile.sm};
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

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    width: 508px;
    height: 508px;
  }
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

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    width: 580px;
    height: 580px;
  }

  &::after {
    content: "";
    position: absolute;
    background: url(${smarterBigDostIcon});
    transform: rotate(45deg);
    width: 277px;
    height: 222px;
    left: 234px;
    top: 86px;
  }

  &::before {
    content: "";
    position: absolute;
    background: url(${smarterMedDostIcon});
    transform: rotate(45deg);
    width: 215px;
    height: 162px;
    left: 552px;
    top: 2px;

    @media screen and (min-width: ${theme.breakPoints.sm}) {
      left: 711px;
      top: 90px;
    }
  }
`;

export const SmarterPhoneOrdersImageContainer = styled(SvgContainer)`
  transform: rotate(45deg);
  width: 225px;
  height: 520px;
  right: 52%;
  top: -60px;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    width: 330px;
    height: 563px;
    right: 190px;
    top: -115px;
  }

  &::before {
    content: "";
    position: absolute;
    background: url(${smarterStarsIcon});
    width: 82px;
    height: 130px;
    left: 18px;
    top: -96px;
    z-index: -1;

    @media screen and (min-width: ${theme.breakPoints.sm}) {
      left: -64px;
      top: 40px;
    }
  }
`;

export const SmarterPhoneOrdersStarsIcon = styled(SvgContainer)`
  left: 18px;
  top: -96px;
  z-index: -1;
`;

export const SmarterPhoneChatsImageContainer = styled(SvgContainer)`
  transform: rotate(45deg);
  width: 225px;
  height: 536px;
  left: 24%;
  top: 136px;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    width: 330px;
    height: 563px;
    left: 187px;
    top: 157px;
  }
`;
