import {
  FlexContainer,
  SkewedInnerContainer,
  SkewedSection,
  SvgContainer,
} from "@/components/shared/styles/shearedStyles";
import medDotsGroupIcon from "@/assets/shared/dots/med_14_dots_group.svg";
import bigDotsGroupIcon from "@/assets/shared/dots/big_20_dots_group.svg";
import { theme } from "@/theme";
import styled from "styled-components";

interface HowItWorksStaticCardProps {
  ml?: string;
  mb?: string;
}

export const HowItWorksSection = styled(SkewedSection)`
  @media screen and (min-width: ${theme.breakPoints.sm}) {
    margin: 639px 0px 0px;
  }

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    margin: 248px 0px 0px;
  }
`;

export const HowItWorksInnerContainer = styled.div`
  top: 33px;
  transform: skewY(8deg);
  max-width: 100%;
  padding: 0px 16px;
  margin: 0px auto;
  position: relative;
`;

export const HowItWorksContentContainer = styled(FlexContainer)`
  flex-direction: column;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const PlayIcon = styled.span`
  margin-right: 8px;
`;

export const HowItWorksStaticCard = styled.div<HowItWorksStaticCardProps>`
  width: 166px;
  height: 67px;
  margin-left: ${(p) => p.ml};
  margin-bottom: ${(p) => p.mb}px;
  background: ${theme.colors.white};
  border-radius: 11.6px;
  box-shadow: rgba(33, 33, 33, 0.1) 4px 7px 20px 0px;
  transform: matrix(0.99, 0.14, -0.14, 0.99, 0, 0);

  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4px 10px;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    padding: 10px 24px;
    width: 252px;
    height: 101px;
  }
`;

export const HowItWorksSeparator = styled.div`
  margin-top: 100px;
  @media screen and (min-width: ${theme.breakPoints.md}) {
    order: -1;
  }
`;

export const HowItWorksSkewdInnerContainer = styled(SkewedInnerContainer)`
  &::after {
    content: "";
    position: absolute;
    background-image: url(${medDotsGroupIcon});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 199px;
    height: 150px;
    left: -122px;
    top: 330px;
    z-index: -1;

    @media screen and (min-width: ${theme.breakPoints.sm}) {
      background-image: url(${bigDotsGroupIcon});
      top: 237px;
    }

    @media screen and (min-width: ${theme.breakPoints.md}) {
      top: 437px;
      left: 800px;
    }
  }

  &::before {
    content: "";
    position: absolute;
    background-image: url(${bigDotsGroupIcon});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 226px;
    width: 299px;
    left: 240px;
    top: 573px;
    z-index: -1;

    @media screen and (min-width: ${theme.breakPoints.sm}) {
      left: 440px;
      top: 493px;
    }

    @media screen and (min-width: ${theme.breakPoints.md}) {
      top: 537px;
      left: 10px;
    }
  }
`;

export const HowItWorksCardTitle = styled.p`
  font-family: "GiloryBold";
  font-size: ${theme.fontSizes.mobile.sm};
  padding: 0px 0px 5px;
  line-height: 18px;

  color: ${theme.colors.primary};

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    font-size: 19px;
    line-height: 24px;
  }
`;

export const HowItWorksCardSubtitle = styled.p`
  font-family: "InterRegular";
  font-size: 9px;
  line-height: 11px;

  color: ${theme.colors.secondary};

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    font-size: 11px;
    line-height: 13px;
  }
`;

export const HowItWorksChatsCardStars = styled(SvgContainer)`
  transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
  height: 42px;
  width: 40px;
  left: 95px;
  top: -32px;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    width: 62px;
    height: 51px;
    left: 154px;
    top: -57px;
  }

  & > img {
    width: 33px;
    height: 25px;

    @media screen and (min-width: ${theme.breakPoints.sm}) {
      width: 62px;
      height: 51px;
    }
  }
`;

export const HowItWorksChatsCardIcon = styled(SvgContainer)`
  transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
  left: 135px;
  top: -25px;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    left: 212px;
    top: -31px;
  }

  /* @media screen and (min-width: ${theme.breakPoints.sm}) {
    left: 212px;
    top: -31px;
  } */

  & > img {
    width: 68px;
    height: 68px;

    @media screen and (min-width: ${theme.breakPoints.sm}) {
      width: 81px;
      height: 81px;
    }

    @media screen and (min-width: ${theme.breakPoints.md}) {
      width: 92px;
      height: 92px;
    }
  }
`;

export const HowItWorksFirstRedArrow = styled(SvgContainer)`
  transform: rotate(1deg);
  left: 168px;
  top: 15px;
  z-index: -1;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    left: 257px;
    top: 32px;
  }

  & > img {
    width: 100px;
    height: 91px;

    @media screen and (min-width: ${theme.breakPoints.sm}) {
      width: 124px;
    }
  }
`;

export const HowItWorksOrdersCardStars = styled(SvgContainer)`
  transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
  height: 32px;
  width: 60px;
  left: 100px;
  top: -43px;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    height: 59px;
    width: 91px;
    left: 160px;
    top: -68px;
  }

  & > img {
    width: 48px;
    height: 26px;

    @media screen and (min-width: ${theme.breakPoints.sm}) {
      height: 59px;
      width: 91px;
    }
  }
`;

export const HowItWorksOrdersCardIcon = styled(SvgContainer)`
  transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
  left: -25px;
  bottom: -42px;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    left: -25px;
    bottom: -42px;
  }

  & > img {
    width: 68px;
    height: 68px;

    @media screen and (min-width: ${theme.breakPoints.sm}) {
      width: 81px;
      height: 81px;
    }

    @media screen and (min-width: ${theme.breakPoints.md}) {
      width: 92px;
      height: 92px;
    }
  }
`;

export const HowItWorksSecondRedArrow = styled(SvgContainer)`
  transform: rotate(-9deg);
  height: 85px;
  width: 100px;
  left: -100px;
  top: 32px;
  z-index: -1;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    width: 124px;
    left: -122px;
    top: 62px;
  }

  & > img {
    width: 100px;
    height: 91px;

    @media screen and (min-width: ${theme.breakPoints.sm}) {
      width: 124px;
      height: 85px;
    }
  }
`;

export const HowItWorksPaymentsCardStars = styled(SvgContainer)`
  transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
  height: 59px;
  width: 40px;
  left: 167px;
  top: -9px;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    height: 68px;
    width: 69px;
    left: 276px;
  }

  & > img {
    width: 29px;
    height: 35px;

    @media screen and (min-width: ${theme.breakPoints.sm}) {
      height: 68px;
      width: 69px;
    }
  }
`;

export const HowItWorksPaymentsCardSecondStars = styled(SvgContainer)`
  transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
  height: 36px;
  width: 40px;
  left: 37px;
  top: -44px;

  @media screen and (min-width: ${theme.breakPoints.sm}) {
    height: 47px;
    width: 75px;
    top: -56px;
  }

  & > img {
    width: 30px;
    height: 21px;

    @media screen and (min-width: ${theme.breakPoints.sm}) {
      height: 47px;
      width: 75px;
    }
  }
`;

export const HowItWorksPaymentsCardIcon = styled(SvgContainer)`
  transform: matrix(0.98, -0.18, 0.18, 0.98, 0, 0);
  left: -24px;
  top: -28px;

  & > img {
    width: 68px;
    height: 68px;

    @media screen and (min-width: ${theme.breakPoints.sm}) {
      width: 81px;
      height: 81px;
    }

    @media screen and (min-width: ${theme.breakPoints.md}) {
      width: 92px;
      height: 92px;
    }
  }
`;
