import React, { useContext, useEffect, useState } from "react";
import ContextStore from "../../Store/Context";
import { Link } from "react-router-dom";
import AuthContext from "../../Store/Auth-Context";

const ItemCart = (props) => {
  const context = useContext(ContextStore);
  const Auth_Context = useContext(AuthContext);

  const SubmitHandler = () => {
    let add = 0;
    context.CartItems.map((item) =>
      item.id === props.item.id
        ? ((add = 1), alert("This Item Already have in Cart!"))
        : null
    );

    if (add === 0) {
      const item = { ...props.item, Qty: "1" };
      fetch(
        "https://crudcrud.com/api/19bffb556e4d4c3180cc77d051f5deec/" +
          Auth_Context.Email,
        {
          method: "POST",
          body: JSON.stringify(item),
          headers: {
            "Content-type": "application/json",
          },
        }
      ).then((res) => {
        if (res.ok) {
          res.json().then((data) => context.AddItems(data));
          alert("Item Added To Cart");
        } else {
          alert("Error");
        }
      });
    }
  };

  return (
    <div className="card-body m-5 m-10">
      <h3 class="card-title">{props.item.title}</h3>
      <Link to={"/Store/" + props.item.id}>
        {" "}
        <img src={props.item.imageUrl} alt="..." />
      </Link>

      <h5 class="card-title">{props.item.Des}</h5>
      <p class="card-text">$.{props.item.price}</p>
      <button class="btn btn-success" onClick={SubmitHandler}>
        Add Cart
      </button>
    </div>
  );
};
export default ItemCart;
