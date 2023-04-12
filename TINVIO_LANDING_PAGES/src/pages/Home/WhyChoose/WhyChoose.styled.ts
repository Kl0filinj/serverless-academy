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
  margin-top: 130px;
  margin-bottom: 130px;
  padding-top: 82px;
  padding-bottom: 176px;
`;

export const WhyChooseSectionTitle = styled(SectionTitle)`
  color: ${theme.colors.white};
  margin-bottom: 32px;
`;
