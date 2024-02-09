import React, { useState } from "react";
import AuthContext from "./Auth-Context";

const AuthContextProvider = (props) => {
  const InitialToken = localStorage.getItem("token");
  const InitialEmail = localStorage.getItem("email");
  const [token, settoekn] = useState(InitialToken);
  const [email, setemail] = useState(InitialEmail);

  const isLoggedIn = !!token;

  const Login = (token, Email) => {
    localStorage.setItem("token", token);
    let EMail = Email.replaceAll(".", "");
    EMail = EMail.replaceAll("@", "");
    setemail(EMail);
    localStorage.setItem("email", EMail);
    settoekn(token);
  };

  const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    settoekn(null);
  };

  const context = {
    token: token,
    Email: email,
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
