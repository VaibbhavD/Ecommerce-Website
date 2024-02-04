import React, { useContext } from "react";
import ContextStore from "../../Store/Context";

const ItemCart = (props) => {
  const context = useContext(ContextStore);

  const SubmitHandler = () => {
    let add = 0;
    context.CartItems.map((item) =>
      item.id === props.item.id
        ? ((add = 1), alert("This Item Already have in Cart!"))
        : null
    );

    if (add === 0) {
      context.AddItems({ ...props.item, Qty: "1" });
    }
  };

  return (
    <div className="card-body m-5 m-10">
      <h3 class="card-title">{props.item.title}</h3>
      <img src={props.item.imageUrl} alt="..." />

      <h5 class="card-title">{props.item.Des}</h5>
      <p class="card-text">$.{props.item.price}</p>
      <button class="btn btn-success" onClick={SubmitHandler}>
        Buy
      </button>
    </div>
  );
};
export default ItemCart;
