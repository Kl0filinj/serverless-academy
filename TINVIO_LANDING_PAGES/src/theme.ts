import { createGlobalStyle } from "styled-components";
import GiloryRegular from "./assets/fonts/Gilroy-Regular.ttf";
import GilorySemiBold from "./assets/fonts/Gilroy-Semibold.ttf";
import GiloryBold from "./assets/fonts/Gilroy-Bold.ttf";

import InterRegular from "./assets/fonts/Inter-Regular.ttf";
import InterMedium from "./assets/fonts/Inter-Medium.ttf";
export interface ITheme {
  colors: {
    primary: string;
    accent: string;
    secondary: string;
    placeholder: string;
    input: string;
    accent_red: string;
    accent_bg_red: string;
    background_grey: string;
    white: string;
  };
  fontSizes: {
    mobile: {
      lg: string;
      sm: string;
      md: string;
    };
    tablet: {
      xl: string;
      lg: string;
      sm: string;
      md: string;
      xs: string;
    };
    desktop: {
      xl: string;
      lg: string;
      sm: string;
      md: string;
      xs: string;
      "2xs": string;
    };
  };
  fontWeight: {
    medium: number;
    bold: number;
    semi_bold: number;
    normal: number;
  };
  breakPoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
  };
  containerWidth: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
  };
}

export const theme: ITheme = {
  colors: {
    primary: "#212121",
    accent: "#ff474d",
    secondary: "#5C5C5C",
    placeholder: "#bdbdbd",
    input: "#f3f4f5",
    accent_red: "#fb242b",
    accent_bg_red: "rgba(251, 36, 43, 0.6)",
    background_grey: "#f3f4f5",
    white: "#ffffff",
  },
  fontSizes: {
    mobile: {
      lg: "28px",
      sm: "14px",
      md: "16px",
    },
    tablet: {
      xl: "32px",
      lg: "24px",
      md: "16px",
      sm: "14px",
      xs: "12px",
    },
    desktop: {
      xl: "44px",
      lg: "36px",
      md: "32px",
      sm: "20px",
      xs: "18px",
      "2xs": "16px",
    },
  },
  fontWeight: {
    medium: 500,
    bold: 700,
    semi_bold: 600,
    normal: 400,
  },
  breakPoints: {
    xs: "375px",
    sm: "768px",
    md: "1024px",
    lg: "1280px",
    xl: "1440px",
    "2xl": "1920px",
  },
  containerWidth: {
    xs: "375px",
    sm: "490px",
    md: "950px",
    lg: "",
    xl: "",
    "2xl": "",
  },
};

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GiloryRegular';
    src: url(${GiloryRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }
    @font-face {
    font-family: 'GilorySemiBold';
    src: url(${GilorySemiBold}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }
    @font-face {
    font-family: 'GiloryBold';
    src: url(${GiloryBold}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }

    @font-face {
    font-family: 'InterRegular';
    src: url(${InterRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }
    @font-face {
    font-family: 'InterMedium';
    src: url(${InterMedium}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }

  body {
    overflow-x: hidden;
  }

  section {
    text-align: center;
    padding: 24px 21px;
    margin: 0 auto;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
}

`;
