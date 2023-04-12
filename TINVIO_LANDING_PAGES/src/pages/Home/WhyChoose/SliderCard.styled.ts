import { theme } from "@/theme";
import styled from "styled-components";

export const SliderCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 10px 25px;
  background-color: ${theme.colors.white};
  border-radius: 32px;
  min-height: 550px;
`;

export const SliderCardImageContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding-top: 25px;
`;

export const SliderCardTextContainer = styled.div`
  flex-grow: 1;
  text-align: center;
  margin-right: 16px;
  padding: 20px 16px 20px 24px;
  border-radius: 0px 20px 20px 0px;
  background-color: #f1f1f1;
`;

export const SliderCardText = styled.p`
  font-size: ${theme.fontSizes.medium_mb};
  line-height: 1.44;
  /* or 144% */

  text-align: start;
`;

export const SliderCardLogoIconContainer = styled.div`
  flex-grow: 1;
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 20px 16px 20px 24px;
`;
