import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import ItemCart from "./ItemCart";
import ContextStore from "../../Store/Context";

const Main = () => {
  const context = useContext(ContextStore);
  const Products = context.Products;

  return (
    <Container>
      <div class="container text-center mt-5">
        <div class="row g-2">
          <div class="col-6">
            <ItemCart item={Products[0]} />
          </div>
          <div class="col-6">
            <ItemCart item={Products[1]} />
          </div>
          <div class="col-6">
            <ItemCart item={Products[2]} />
          </div>
          <div class="col-6">
            <ItemCart item={Products[3]} />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Main;
