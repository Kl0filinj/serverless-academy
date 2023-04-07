import { Outlet } from "react-router";
import Header from "../Header/Header";
import React from "react";
import { Container } from "./Layout.styled";

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default Layout;
