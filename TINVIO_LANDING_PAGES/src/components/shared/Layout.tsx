import { Outlet } from "react-router";
import React from "react";
import { Container } from "./Layout.styled";
import Header from "../Header/Header";

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default Layout;
