import React, { useContext, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import ItemCart from "./ItemCart";
import ContextStore from "../../Store/Context";
import { GetProducts } from "../../Store/ProductsApi";

const Main = () => {
  const context = useContext(ContextStore);
  const Products = context.Products;

  return (
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-5 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {Products.map((product) => (
            <ItemCart item={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Main;
