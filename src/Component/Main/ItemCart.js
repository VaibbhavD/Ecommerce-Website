import React from "react";
import { Button } from "react-bootstrap";

const ItemCart = (props) => {
  return (
    <div class="card-body m-5">
      <img src={props.item.imageUrl} alt="..." />

      <h5 class="card-title">Album 2</h5>
      <p class="card-text">$.{props.item.price}</p>
      <a href="#" class="btn btn-success">
        Buy
      </a>
    </div>
  );
};
export default ItemCart;
