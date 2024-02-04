import React, { useContext, useState } from "react";
import ItemCart from "./ItemCart";
import Modal from "../UI/Modal";
import ContextStore from "../../Store/Context";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = (props) => {
  const context = useContext(ContextStore);

  const order = () => {
    alert("Your Purchase Order Successfully !");
    context.Order();
  };

  return (
    <Modal showcart={props.showcart}>
      <div class=" mt-2 mb-2">
        <div class="d-flex justify-content-center row w-100">
          <div class="col-md-8">
            <div class="p-2">
              <h4>Shopping cart</h4>
            </div>
            {context.CartItems.map((item) => (
              <ItemCart item={item} />
            ))}
            <div class="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded gap-3 ">
              <button
                class="btn btn-warning btn-block btn-lg ml-2 pay-button"
                type="button"
                onClick={order}
              >
                Proceed to Pay
              </button>
              <button
                class="btn btn-warning btn-block btn-lg  pay-button"
                type="button"
                onClick={() => props.showcart()}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default Cart;
