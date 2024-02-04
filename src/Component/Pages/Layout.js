import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import About from "./About";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
