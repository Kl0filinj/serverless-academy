export interface ITheme {
  colors: {
    primary: string;
    accent: string;
    secondary: string;
  };
  fontSizes: {
    large_mb: string;
    small_mb: string;
    medium_mb: string;
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
    xl2: string;
  };
}

export const theme: ITheme = {
  colors: {
    primary: "#212121",
    accent: "#FF474D",
    secondary: "#5C5C5C",
  },
  fontSizes: {
    large_mb: "28px",
    small_mb: "14px",
    medium_mb: "16px",
    // text_mb: "1.5rem",
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
    xl2: "1920px",
  },
};
