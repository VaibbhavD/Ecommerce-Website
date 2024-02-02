import React, { useState } from "react";

const CartButton = (props) => {
  return (
    <button
      className="btn btn-secondary btn-lg active m-1"
      onClick={() => props.showcart()}
    >
      <h5>Cart</h5>
    </button>
  );
};
export default CartButton;
