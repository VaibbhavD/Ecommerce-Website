import React from "react";
import CartButton from "./CartButton";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
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
              <NavLink
                // to={"Home"}
                class="nav-link active"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to={"/About"} class="nav-link">
                About
              </NavLink>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
      <CartButton showcart={props.showcart} />
    </nav>
  );
};
export default Header;
