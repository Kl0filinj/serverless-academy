import { theme } from "@/theme";
import styled from "styled-components";

export const HeroTitle = styled.h1`
  font-family: "GilorySemiBold";
  font-weight: ${theme.fontWeight.semi_bold};
  font-size: ${theme.fontSizes.large_mb};
  line-height: 34px;

  color: ${theme.colors.primary};
`;

export const SectionTitle = styled.h2`
  font-family: "GilorySemiBold";
  font-size: ${theme.fontSizes.large_mb};
  line-height: 33px;

  display: flex;
  align-items: center;

  color: ${theme.colors.primary};
`;

export const SectionSubtitle = styled.p`
  font-family: "InterRegular";
  font-size: ${theme.fontSizes.small_mb};
  line-height: 1.57;

  margin: 16px;
  text-align: center;

  color: ${theme.colors.secondary};
`;

export const AccentButton = styled.button`
  padding: 14px 32px;
  margin-top: 32px;
  background-color: ${theme.colors.accent};
  border-radius: 16px;
  color: #ffffff;

  font-family: "GiloryBold";
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSizes.medium_mb};
  line-height: 20px;

  text-align: center;
`;

export const AccentWhiteButton = styled(AccentButton)`
  background-color: #ffffff;
  color: ${theme.colors.primary};
`;

export const ContentContainer = styled.div`
  max-width: ${theme.breakPoints.xs};
`;
