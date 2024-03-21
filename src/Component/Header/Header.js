import React, { useContext, useState } from "react";
import CartButton from "./CartButton";
import { NavLink, useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import AuthContext from "../../Store/Auth-Context";
import ContextStore from "../../Store/Context";

const Header = (props) => {
  const [Cartbtn, setCartbtn] = useState(false);
  const contextstore = useContext(ContextStore);

  const context = useContext(AuthContext);
  const Navigate = useNavigate();

  return (
    <>
      {contextstore.Showcart && <Cart />}
      <nav class="navbar navbar-expand-lg bg-dark p-3 " data-bs-theme="dark">
        <div class="container-fluid text-white">
          <h3>EcommerCe</h3>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-white">qwjhb</span>
          </button>
          <div
            class="collapse text-white navbar-collapse d-flex flex-row-reverse"
            id="navbarNav"
          >
            <ul class="navbar-nav  ">
              {context.isLoggedIn && Cartbtn && <CartButton />}
              {context.isLoggedIn && (
                <>
                  <li class="nav-item">
                    <NavLink to={"/"} className="nav-link " aria-current="page">
                      Home
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink
                      to={"/Store"}
                      class="nav-link"
                      className={({ isActive }) =>
                        isActive ? setCartbtn(true) : setCartbtn(false)
                      }
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
                  <li class="nav-item">
                    <button
                      className="nav-link"
                      onClick={() => {
                        context.Logout();
                        Navigate("/login");
                        alert("Log Out Successfull !");
                      }}
                    >
                      LogOut
                    </button>
                  </li>
                </>
              )}
              {!context.isLoggedIn && (
                <li class="nav-item">
                  <NavLink to={"/login"} className="nav-link">
                    Login & SignUp
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
