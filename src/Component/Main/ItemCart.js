import React from "react";
import { Button } from "react-bootstrap";

const ItemCart = (props) => {
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content"></div>
        <div class="card-body m-5">
          <img
            src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
            alt="..."
          />

          <h5 class="card-title">Album 4</h5>
          <p class="card-text">S$.12.99</p>
          <Button class="btn btn-success">Buy</Button>
        </div>
      </div>
    </div>
  );
};
export default ItemCart;
