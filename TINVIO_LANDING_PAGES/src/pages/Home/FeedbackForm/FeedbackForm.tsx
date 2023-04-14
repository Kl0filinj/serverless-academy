import React from "react";
import {
  FeedbackSection,
  FeedbackPanel,
  FeedbackPanelForm,
  FeedbackPanelFormCapture,
  FeedbackPanelFormLabel,
  FeedbackPanelFormInput,
  FeedbackPanelFormSubmitBtn,
} from "./FeedbackForm.styled";
import {
  ContentContainer,
  QuoteEmojiIcon,
  QuoteWithEmoji,
  SectionTitle,
  SvgContainer,
} from "@/components/shared/styles/shearedStyles";

import handsEmojiIcon from "@/assets/Home/shared/feedbackForm/hands_emoji_icon.svg";
import dotsMapImage1x from "@/assets/Home/mobile/feedbackForm/dots_map_1x.png";
import dotsMapImage2x from "@/assets/Home/mobile/feedbackForm/dots_map_2x.png";

const FeedbackForm: React.FC = () => {
  return (
    <FeedbackSection>
      <ContentContainer>
        <SectionTitle>
          Fill up the form and we`ll get in touch within a few hours
        </SectionTitle>
        <FeedbackPanel>
          <FeedbackPanelForm>
            <FeedbackPanelFormCapture>
              Hi, we`re Tinvio! And you?
            </FeedbackPanelFormCapture>
            <FeedbackPanelFormLabel>
              Name
              <FeedbackPanelFormInput
                type="text"
                placeholder="John Appleseed"
              />
            </FeedbackPanelFormLabel>
            <FeedbackPanelFormLabel>
              Business Name
              <FeedbackPanelFormInput
                type="text"
                placeholder="Burgers &Boba (Singapore)"
              />
            </FeedbackPanelFormLabel>
            <FeedbackPanelFormLabel margin="48px">
              Phone
              <FeedbackPanelFormInput type="tel" placeholder="65 9123 4567" />
            </FeedbackPanelFormLabel>
            <FeedbackPanelFormSubmitBtn type="submit">
              Submit
            </FeedbackPanelFormSubmitBtn>
            <QuoteWithEmoji>
              No spam, promise
              <QuoteEmojiIcon>
                <img src={handsEmojiIcon} alt="Hands Emoji" />
              </QuoteEmojiIcon>
            </QuoteWithEmoji>
          </FeedbackPanelForm>
        </FeedbackPanel>
      </ContentContainer>
      <SvgContainer
        styles={{ left: "-103px", width: "559px", height: "386px" }}
      >
        <img
          srcSet={`${dotsMapImage1x} 1x, ${dotsMapImage2x} 2x`}
          src={dotsMapImage1x}
          alt="Map Image"
        />
      </SvgContainer>
    </FeedbackSection>
  );
};

export default FeedbackForm;
