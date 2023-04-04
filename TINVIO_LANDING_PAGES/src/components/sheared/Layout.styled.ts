import styled from "styled-components";
import { ITheme, theme } from "../../theme";

interface ILayoutProps {
  size?: keyof ITheme["breakPoints"];
}

export const Container = styled.div`
  width: 100%;
  max-width: ${theme.breakPoints.xs};
  margin: 0 auto;
  padding: 0 21px;
`;
