import React, { useState } from "react";
import CartButton from "./CartButton";
import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";

const Header = (props) => {
  const [enable, setenable] = useState(false);

  const showcart = () => {
    setenable((prev) => !prev);
  };

  return (
    <>
      {enable && <Cart showcart={showcart} />}
      <nav class="navbar navbar-expand-lg bg-dark " data-bs-theme="dark">
        <div class="container-fluid ">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse d-flex flex-row-reverse "
            id="navbarNav"
          >
            <ul class="navbar-nav  ">
              <li class="nav-item">
                <NavLink to={"/"} className="nav-link " aria-current="page">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to={"/Store"}
                  className="nav-link "
                  aria-current="page"
                >
                  Store
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to={"About"} className="nav-link">
                  About
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to={"/Contact"} className="nav-link">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <CartButton showcart={showcart} />
      </nav>
    </>
  );
};
export default Header;
