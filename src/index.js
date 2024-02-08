import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ContextProvider from "./Store/ContextProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Component/Pages/Layout";
import StorePage from "./Component/Pages/Store";
import About from "./Component/Pages/About";
import Home from "./Component/Pages/Home";
import Contact from "./Component/Pages/ContactUs";
import ProductDetails from "./Component/Pages/ProductDetails";
import Login from "./Component/Login/LoginForm";
import AuthContextProvider from "./Store/AuthContextProvider";
import AuthContext from "./Store/Auth-Context";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/Store",
        element: <StorePage />,
      },
      {
        path: "/Store/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
// const context = useContext(AuthContext);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <ContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </ContextProvider>
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
