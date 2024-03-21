import React, { useContext, useState } from "react";
import ContextStore from "../../Store/Context";

const CartButton = () => {
  const context = useContext(ContextStore);

  return (
    <button
      class="btn btn-outline-light"
      type="submit"
      onClick={() => context.enableShowCart()}
    >
      <i class="bi-cart-empty me-1"></i>
      Cart
      <span class="badge bg-light text-black ms-1 rounded-pill">
        {" "}
        {context.CartItems.length}
      </span>
    </button>
  );
};
export default CartButton;
