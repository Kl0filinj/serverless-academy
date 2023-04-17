import { FlexContainer } from "@/components/shared/styles/shearedStyles";
import React from "react";
import PrevArrow from "react-slick";
import NextArrow from "react-slick";
import styled from "styled-components";

interface CustomArrowsProps {
  onPrevClick: () => void;
  onNextClick: () => void;
}

const CustomArrow = styled.div``;

const CustomArrows: React.FC<CustomArrowsProps> = ({
  onPrevClick,
  onNextClick,
}) => (
  <FlexContainer>
    <CustomArrow onClick={onPrevClick}>
      <PrevArrow />
    </CustomArrow>
    <CustomArrow onClick={onNextClick}>
      <NextArrow />
    </CustomArrow>
  </FlexContainer>
);

export default CustomArrows;
