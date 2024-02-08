import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Fragment } from "react";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};
export default Layout;
