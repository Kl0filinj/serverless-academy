import {
  SectionTitle,
  SkewedSection,
} from "@/components/shared/styles/shearedStyles";
import { theme } from "@/theme";
import styled from "styled-components";

interface IPaginationDot {
  active?: boolean;
}

export const WhyChooseSection = styled(SkewedSection)`
  background-color: rgb(54, 54, 54);
`;

export const WhyChooseSectionTitle = styled(SectionTitle)`
  color: ${theme.colors.white};
`;
