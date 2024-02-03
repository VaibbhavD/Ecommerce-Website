import React from "react";
import { Button, Container } from "react-bootstrap";
import ItemCart from "./ItemCart";

const Products = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Main = () => {
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
