import React, { useContext, useEffect, useState } from "react";
import ContextStore from "../../Store/Context";
import { Link } from "react-router-dom";
import AuthContext from "../../Store/Auth-Context";
import { CrudUrl } from "../../Store/CrudUrl";

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
      fetch(CrudUrl + Auth_Context.Email, {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-type": "application/json",
        },
      }).then((res) => {
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
    <>
      <div class="card text-black m-3">
        <a href={`/Store/${props.item.id}`}>
          <img
            src={props.item.images[0]}
            class="card-img-top"
            alt="Apple Computer"
          />
        </a>
        <div class="card-body">
          <div class="text-center">
            <h5 class="card-title">Believing is seeing</h5>
            <p class="text-muted mb-4">{props.item.title}</p>
          </div>
          <div class="d-flex justify-content-between total font-weight-bold mt-4">
            <span>Price</span>
            <span>${props.item.price}</span>
          </div>
        </div>
        <button class="btn btn-success" onClick={SubmitHandler}>
          Add Cart
        </button>
      </div>
      {/* </div> */}
    </>
  );
};
export default ItemCart;
