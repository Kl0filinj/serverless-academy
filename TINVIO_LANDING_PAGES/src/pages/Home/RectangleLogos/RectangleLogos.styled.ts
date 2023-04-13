import { theme } from "@/theme";
import styled, { keyframes } from "styled-components";

interface ReactangleLogosItemProps {
  styles?: {
    [key: string]: string;
  };
}

export const ReactangleLogosSection = styled.section`
  margin-bottom: 124px;
  position: relative;
`;

export const ReactangleLogosContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReactangleLogosItem = styled.div<ReactangleLogosItemProps>`
  width: 107px;
  height: 107px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ${(p) => p.styles}
`;

export const ReactangleLogosMultipleItems = styled.div<ReactangleLogosItemProps>`
  display: flex;
  ${(p) => p.styles}
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
`;

export const ReactangleLogosItemIcon = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0.5638);
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
  }

  /* &::after {
    animation-delay: 1s;
  } */
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
`;

export const ReactangleLogosItemCentralSmileIcon = styled.div`
  margin-top: 13px;
`;
