import React from "react";

const AuthContext = React.createContext({
  token: null,
  Email: "",
  isLoggedIn: false,
  Login: (token) => {},
  Logout: () => {},
});
export default AuthContext;
