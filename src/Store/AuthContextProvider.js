import React, { useState } from "react";
import AuthContext from "./Auth-Context";

const AuthContextProvider = (props) => {
  const InitialToken = localStorage.getItem("token");
  const [token, settoekn] = useState(InitialToken);

  const isLoggedIn = !!token;

  const Login = (token) => {
    localStorage.setItem("token", token);
    settoekn(token);
  };

  const Logout = () => {
    localStorage.removeItem("token");
    settoekn(null);
  };

  const context = {
    token: token,
    isLoggedIn: isLoggedIn,
    Login: Login,
    Logout: Logout,
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
