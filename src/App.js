import React, { useState } from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Main from "./Component/Main/main";
import Footer from "./Component/Footer/Footer";
import Cart from "./Component/Cart/Cart";

function App() {
  const [enable, setenable] = useState(false);

  const showcart = () => {
    setenable((prev) => !prev);
  };

  return (
    <>
      <Header showcart={showcart} />
      {enable && <Cart showcart={showcart} />}
      <Main />
      <Footer />
    </>
  );
}

export default App;
