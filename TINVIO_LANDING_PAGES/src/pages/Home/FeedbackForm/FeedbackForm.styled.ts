import { AccentButton } from "@/components/shared/styles/shearedStyles";
import { theme } from "@/theme";
import styled from "styled-components";

interface FeedbackPanelFormLabelProps {
  margin?: string;
}

export const FeedbackSection = styled.section`
  position: relative;
  margin-bottom: 438px;
`;

export const FeedbackPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(
    95.51% 95.51% at 50% 50%,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(250, 250, 250, 0.3) 100%
  );
  border-radius: 36px;
  padding: 16px;
  position: relative;
  z-index: 2;
`;

export const FeedbackPanelForm = styled.form`
  background-color: ${theme.colors.white};
  border-radius: 32px;
  padding: 40px 24px;
`;

export const FeedbackPanelFormCapture = styled.p`
  font-family: "GiloryBold";
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  padding: 0px;
  margin: 0px 0px 32px;
  text-align: center;
  max-width: 295px;
`;

export const FeedbackPanelFormLabel = styled.label<FeedbackPanelFormLabelProps>`
  display: flex;
  flex-direction: column;
  font-family: "InterRegular";
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: start;
  color: ${theme.colors.secondary};
  margin-bottom: ${(p) => (p.margin ? p.margin : "16px")};
  position: relative;
`;

export const FeedbackPanelFormInput = styled.input`
  background-color: ${theme.colors.input};
  border-radius: 8px;
  border: 1px solid ${theme.colors.input};
  padding: 11px 16px;
  font-family: "InterRegular";
  font-weight: 400;
  font-size: ${theme.fontSizes.small_mb};
  line-height: 17px;
  color: ${theme.colors.primary};
  outline: none;
  margin: 8px 0px 0px;
  width: 295px;
`;

export const FeedbackPanelFormSubmitBtn = styled(AccentButton)`
  padding: 14px 63px;
  margin: 0px auto 14px;
`;
