import { theme } from "@/theme";
import styled, { keyframes } from "styled-components";
import medDotsGroupIcon from "@/assets/shared/dots/med_17_dots_group.svg";

interface ReactangleLogosItemProps {
  styles?: {
    [key: string]: string;
  };
}

export const ReactangleLogosSection = styled.section`
  margin-bottom: 124px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    background: url(${medDotsGroupIcon});
    width: 231px;
    height: 175px;
    top: -67px;
    left: 281px;
    z-index: -1;

    @media screen and (min-width: ${theme.breakPoints.sm}) {
      width: 240px;
      height: 184px;
      top: -67px;
      left: 531px;
    }

    @media screen and (min-width: ${theme.breakPoints.md}) {
      left: 1133px;
    }
  }
`;

export const ReactangleLogosContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    flex-direction: row;
  }

  @media screen and (min-width: ${theme.breakPoints.md}) {
    justify-content: center;
    padding-top: 25px;
  }
`;

export const ReactangleLogosItem = styled.div<ReactangleLogosItemProps>`
  width: 107px;
  height: 107px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ${(p) => p.styles}

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    width: 156px;
    height: 156px;
  }

  @media screen and (min-width: ${theme.breakPoints.md}) {
    width: 169px;
    height: 169px;
  }
`;

export const ReactangleLogosTopOneItem = styled(ReactangleLogosItem)`
  @media screen and (min-width: ${theme.breakPoints.md}) {
    /* margin: 0px -268px 0px 0px; */
    margin: 0px -268px 0px 0px;
  }
`;

export const ReactangleLogosBottomOneItem = styled(ReactangleLogosItem)`
  margin: -46px 0px 0px;

  @media screen and (min-width: ${theme.breakPoints.md}) {
    margin: 0px 0px 0px -268px;
  }
`;

export const ReactangleLogosTopTwoItems = styled.div`
  display: flex;
  margin: -46px 0px 0px;

  @media screen and (min-width: ${theme.breakPoints.md}) {
    flex-direction: column-reverse;
    margin: 0px;
  }
`;
export const ReactangleLogosBottomTwoItems = styled.div`
  display: flex;
  margin: -39px 0px 0px;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    margin: -12px 0px 0px;
  }

  @media screen and (min-width: ${theme.breakPoints.md}) {
    flex-direction: column-reverse;
  }
`;

export const ReactangleLogosSecondTopTwoItems = styled.div`
  display: flex;
  margin: -39px 0px 0px;

  @media screen and (min-width: ${theme.breakPoints.md}) {
    flex-direction: column-reverse;
    margin: 0px -84px 0px 0px;
  }
`;

export const ReactangleLogosSecondBottomTwoItems = styled.div`
  display: flex;
  margin: -96px 0px 0px;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    margin: -214px 0px 0px;
  }

  @media screen and (min-width: ${theme.breakPoints.md}) {
    flex-direction: column-reverse;
    margin: 0px 0px 0px -84px;
  }
`;

export const ReactangleLogosItemBackground = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 76px;
  height: 74px;
  background: radial-gradient(
    95.51% 95.51% at 50% 50%,
    rgba(246, 245, 245, 0.5) 0%,
    rgba(250, 250, 250, 0.5) 100%
  );
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    width: 111px;
    height: 108px;
    border-radius: 14.8359px;
  }

  @media screen and (min-width: ${theme.breakPoints.md}) {
    width: 121px;
    height: 118px;
  }
`;

export const ReactangleLogosItemForeground = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 57px;
  height: 57px;
  background: radial-gradient(
    95.51% 95.51% at 50% 50%,
    rgba(218, 218, 218, 0.8) 0%,
    rgba(250, 250, 250, 0.8) 100%
  );
  border-radius: 5px;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    width: 83px;
    height: 83px;
    border-radius: 11.9999px;
  }

  @media screen and (min-width: ${theme.breakPoints.md}) {
    width: 90px;
    height: 90px;
  }
`;

export const ReactangleLogosItemIcon = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0.5638);

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    transform: translate(-50%, -50%) scale(1.3);
  }
`;

export const ReactangleLogosItemCentral = styled.div`
  width: 344px;
  height: 344px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -96px 0px 0px;
  transform: rotate(45deg);
  position: relative;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    width: 491px;
    height: 491px;
    margin: -226px 0px 0px;
  }

  @media screen and (min-width: ${theme.breakPoints.md}) {
    width: 462px;
    height: 462px;
    margin: 0px 20px;
  }
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.1);
    opacity: 0;
  }
`;

export const ReactangleLogosItemCentralBackground = styled.div`
  position: absolute;
  width: 215px;
  height: 215px;
  background: rgba(251, 36, 43, 0.4);
  border-radius: 17.7451px;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    width: 308px;
    height: 308px;
    border-radius: 25.3502px;
  }

  @media screen and (min-width: ${theme.breakPoints.md}) {
    width: 292px;
    height: 292px;
    border-radius: 24.0543px;
  }

  &::after,
  &::before {
    content: "";
    position: absolute;
    border: 50px solid rgba(251, 36, 43, 0.3);
    left: -20px;
    opacity: 0;
    right: -20px;
    top: -20px;
    bottom: -20px;
    border-radius: 17.7451px;
    animation: 2.25s cubic-bezier(0.215, 0.61, 0.355, 1) 0s infinite normal none
      running ${pulseAnimation};

    @media screen and (min-width: ${theme.breakPoints.sm}) {
      border-width: 70px;
    }

    /* @media screen and (min-width: ${theme.breakPoints.md}) {
      border-width: 70px;
    } */
  }
`;

export const ReactangleLogosItemCentralFlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ReactangleLogosItemCentralForeground = styled.div`
  width: 182px;
  height: 182px;
  background: rgb(251, 36, 43);
  border-radius: 17.7451px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    width: 259px;
    height: 259px;
    border-radius: 25.3502px;
  }

  @media screen and (min-width: ${theme.breakPoints.md}) {
    width: 246px;
    height: 246px;
    border-radius: 24.0543px;
  }
`;

export const ReactangleLogosItemCentralContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotate(-45deg);
`;

export const ReactangleLogosItemCentralText = styled.p`
  font-family: "GiloryBold";
  font-weight: 600;
  font-size: 20.2659px;
  line-height: 25px;
  color: ${theme.colors.white};

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    font-size: 28px;
    line-height: 34px;
  }
`;

export const ReactangleLogosItemCentralSmileIcon = styled.div`
  margin-top: 13px;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    margin-top: 17px;
  }
`;
