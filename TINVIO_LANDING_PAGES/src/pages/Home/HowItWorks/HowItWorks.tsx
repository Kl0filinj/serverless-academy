import React from "react";
import { HowItWorksSection } from "./HowItWorks.styled";
import {
  SectionSubtitle,
  SectionTitle,
} from "../../../components/shared/styles/shearedStyles";

const HowItWorks: React.FC = () => {
  return (
    <HowItWorksSection>
      <SectionTitle>Check out how it works </SectionTitle>
      <SectionSubtitle>
        It`s easy! Exchange messages, create or confirm orders, send invoices,
        and collect payments across your supply chain — all within one
        dashboard.
      </SectionSubtitle>
    </HowItWorksSection>
  );
};

export default HowItWorks;
