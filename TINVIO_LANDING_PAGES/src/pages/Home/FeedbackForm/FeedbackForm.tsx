import React from "react";
import {
  FeedbackSection,
  FeedbackPanel,
  FeedbackPanelForm,
  FeedbackPanelFormCapture,
  FeedbackPanelFormLabel,
  FeedbackPanelFormInput,
  FeedbackPanelFormSubmitBtn,
  FeedbakcDotsMapImageContainer,
  FeedbackContentContainer,
} from "./FeedbackForm.styled";
import {
  QuoteEmojiIcon,
  QuoteWithEmoji,
  SectionTitle,
} from "@/components/shared/styles/shearedStyles";

import handsEmojiIcon from "@/assets/Home/shared/feedbackForm/hands_emoji_icon.svg";
import mobile_dotsMapImage1x from "@/assets/Home/mobile/feedbackForm/dots_map_1x.png";
import mobile_dotsMapImage2x from "@/assets/Home/mobile/feedbackForm/dots_map_2x.png";
import tablet_dotsMapImage1x from "@/assets/Home/tablet/feedbackForm/dots_map_1x.png";
import tablet_dotsMapImage2x from "@/assets/Home/tablet/feedbackForm/dots_map_2x.png";

const FeedbackForm: React.FC = () => {
  return (
    <FeedbackSection>
      <FeedbackContentContainer>
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
      </FeedbackContentContainer>
      <FeedbakcDotsMapImageContainer>
        <picture>
          <source
            srcSet={`${mobile_dotsMapImage1x} 1x, ${mobile_dotsMapImage2x} 2x`}
            media="(max-width: 767px)"
            type="image/png"
          />
          <source
            srcSet={`${tablet_dotsMapImage1x} 1x, ${tablet_dotsMapImage2x} 2x`}
            media="(min-width: 768px)"
            type="image/png"
          />
          {/* <source
              srcSet="./images/desktop/team_desktop/ihor.jpg 1x, ./images/desktop/team_desktop/ihor_2x.jpg 2x"
              media="(min-width: 1200px)"
              type="image/png"
            /> */}
          <img src={mobile_dotsMapImage1x} alt="Dots Map Image" />
        </picture>
      </FeedbakcDotsMapImageContainer>
    </FeedbackSection>
  );
};

export default FeedbackForm;
