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
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
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
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Home
                </a>
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
            </ul>
          </div>
        </div>
        <CartButton showcart={showcart} />
      </nav>
    </>
  );
};
export default Header;
