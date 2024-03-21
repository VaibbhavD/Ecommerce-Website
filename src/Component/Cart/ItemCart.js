import React, { useContext } from "react";
import ContextStore from "../../Store/Context";
import AuthContext from "../../Store/Auth-Context";

const ItemCart = (props) => {
  const context = useContext(ContextStore);
  const Auth_Context = useContext(AuthContext);

  const RemoveCart = () => {
    context.RemoveItem(props.item);

    fetch(
      "https://crudcrud.com/api/88ee8aeaa55d45dfaeb35766ed617c6d/" +
        Auth_Context.Email +
        "/" +
        props.item._id,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          alert("Cart Item Delete SuccessFully !");
        }
      })
      .then((res) => console.log(res));
  };

  return (
    <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt--4 rounded">
      <div class="mr-1">
        <img class="rounded" src={props.item.images[0]} width="70" />
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
        {/* <h5 class="text-grey">{}</h5> */}
        <input
          type="number"
          placeholder={props.item.Qty}
          min={props.item.Qty}
          max={5}
          step={1}
        />
      </div>
      <div>
        <h5 class="text-grey">${props.item.price}</h5>
      </div>
      <div class="d-flex align-items-center">
        <i class="fa fa-trash mb-1 text-danger"></i>
        <span class="close" className="cursur-pointer" onClick={RemoveCart}>
          &#10005;
        </span>
      </div>
    </div>
  );
};
export default ItemCart;
