import React from "react";

const ItemCart = (props) => {
  return (
    <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 rounded ">
      <div class="mr-1">
        <img class="rounded" src={props.item.imageUrl} width="70" />
      </div>
      <div class="d-flex flex-column align-items-center product-details">
        <span class="font-weight-bold">{props.item.title}</span>
      </div>
      <div class="d-flex flex-row align-items-center qty">
        <i class="fa fa-minus text-danger"></i>
        <h5 class="text-grey mt-1 mr-1 ml-1">{props.item.quantity}</h5>
        <i class="fa fa-plus text-success"></i>
      </div>
      <div>
        <h5 class="text-grey">${props.item.price}</h5>
      </div>
      <div class="d-flex align-items-center">
        <i class="fa fa-trash mb-1 text-danger"></i>
        <span
          class="close"
          className="cursur-pointer"
          onClick={() => props.RemoveCart(props.item)}
        >
          &#10005;
        </span>
      </div>
    </div>
  );
};
export default ItemCart;
