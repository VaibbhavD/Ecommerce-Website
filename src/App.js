import React, { lazy, useContext, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Component/Pages/Layout";
import AuthContext from "./Store/Auth-Context";

const StorePage = lazy(() => import("./Component/Pages/Store"));
const Home = lazy(() => import("./Component/Pages/Home"));
const About = lazy(() => import("./Component/Pages/About"));
const Login = lazy(() => import("./Component/Login/LoginForm"));
const Contact = lazy(() => import("./Component/Pages/ContactUs"));
const ProductDetails = lazy(() => import("./Component/Pages/ProductDetails"));

function App() {
  const context = useContext(AuthContext);

  return (
    <Layout>
      <main>
        <Routes>
          {!context.isLoggedIn && (
            <Route
              path="/login"
              element={
                <Suspense>
                  <Login />
                </Suspense>
              }
            />
          )}
          {context.isLoggedIn && (
            <Route
              path="/"
              element={
                <Suspense fallback={<p>...Loading</p>}>
                  <Home />
                </Suspense>
              }
            />
          )}
          {context.isLoggedIn && (
            <Route
              path="/Store"
              element={
                <Suspense>
                  <StorePage />
                </Suspense>
              }
            />
          )}
          {context.isLoggedIn && (
            <Route
              path="/About"
              element={
                <Suspense>
                  <About />
                </Suspense>
              }
            />
          )}
          {context.isLoggedIn && (
            <Route
              path="/Contact"
              element={
                <Suspense>
                  <Contact />
                </Suspense>
              }
            />
          )}
          {context.isLoggedIn && (
            <Route
              path="/Store/:productId"
              element={
                <Suspense>
                  <ProductDetails />
                </Suspense>
              }
            />
          )}
          {!context.isLoggedIn && (
            <Route
              path="*"
              element={
                <Suspense>
                  <Login />
                </Suspense>
              }
            />
          )}
        </Routes>
      </main>
    </Layout>
  );
}

export default App;
