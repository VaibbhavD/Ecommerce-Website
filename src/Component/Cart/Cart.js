import React, { useContext, useState, useEffect } from "react";
import ItemCart from "./ItemCart";
import Modal from "../UI/Modal";
import ContextStore from "../../Store/Context";
import AuthContext from "../../Store/Auth-Context";

const Cart = (props) => {
  const context = useContext(ContextStore);
  const Auth_Context = useContext(AuthContext);
  const [cart, setcart] = useState([]);

  useEffect(() => {
    fetch(
      "https://crudcrud.com/api/19bffb556e4d4c3180cc77d051f5deec/" +
        Auth_Context.Email
    )
      .then((res) => res.json())
      .then((data) => (setcart(data), context.AddItems(data)));
  }, []);

  console.log(Auth_Context.Email);
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
            {cart.map((item) => (
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
