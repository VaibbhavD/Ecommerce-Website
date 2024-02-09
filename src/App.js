import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Component/Pages/Layout";
import StorePage from "./Component/Pages/Store";
import About from "./Component/Pages/About";
import Login from "./Component/Login/LoginForm";
import AuthContext from "./Store/Auth-Context";
import Home from "./Component/Pages/Home";
import Contact from "./Component/Pages/ContactUs";
import ProductDetails from "./Component/Pages/ProductDetails";

function App() {
  const context = useContext(AuthContext);

  return (
    <Layout>
      <main>
        <Routes>
          {!context.isLoggedIn && <Route path="/login" element={<Login />} />}
          {context.isLoggedIn && <Route path="/" element={<Home />} />}
          {context.isLoggedIn && (
            <Route path="/Store" element={<StorePage />} />
          )}
          {context.isLoggedIn && <Route path="/About" element={<About />} />}
          {context.isLoggedIn && (
            <Route path="/Contact" element={<Contact />} />
          )}
          {context.isLoggedIn && (
            <Route path="/Store/:productId" element={<ProductDetails />} />
          )}
          {!context.isLoggedIn && <Route path="*" element={<Login />} />}
        </Routes>
      </main>
    </Layout>
  );
}

export default App;
