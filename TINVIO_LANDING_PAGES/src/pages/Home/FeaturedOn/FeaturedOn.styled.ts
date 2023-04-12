import { SectionTitle } from "@/components/shared/styles/shearedStyles";
import { theme } from "@/theme";
import styled from "styled-components";

export const FeaturedSection = styled.section`
  position: relative;
  background: radial-gradient(
    129.72% 141.01% at 50% 50%,
    rgb(247, 247, 247) 0%,
    rgb(250, 250, 250) 100%
  );
  border-radius: 0px 40px 40px 0px; ;
`;

export const FeaturedTitle = styled(SectionTitle)`
  padding-top: 48px;
  padding-bottom: 24px;
  /* margin-bottom: 32px; */
`;

export const FeaturedLogoList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 20px;
`;

export const FeaturedLogoListItem = styled.li`
  margin-bottom: 48px;
`;

export const FeatureSeparatorLine = styled.div`
  width: 253px;
  height: 1px;
  margin: 0 auto 32px auto;
  background-color: rgb(210, 210, 210);
`;
