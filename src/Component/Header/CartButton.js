import React, { useContext, useState } from "react";
import ContextStore from "../../Store/Context";

const CartButton = (props) => {
  const context = useContext(ContextStore);

  return (
    <button
      className="btn btn-secondary btn-lg active m-1"
      onClick={() => props.showcart()}
    >
      <h5>Cart{context.CartItems.length}</h5>
    </button>
  );
};
export default CartButton;
