import React, { useContext, useEffect, useState } from "react";
import ContextStore from "./Context";
import AuthContext from "./Auth-Context";

const Products = [
  {
    title: "Album 1",
    Des: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    id: "a1",
  },
  {
    title: "Album 2",
    Des: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    id: "a2",
  },
  {
    title: "Album 3",
    Des: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    id: "a3",
  },
  {
    title: "Album 4",
    Des: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    id: "a4",
  },
];

const ContextProvider = (props) => {
  const [Items, setItems] = useState([]);
  const Auth_Context = useContext(AuthContext);

  const AddItems = (item) => {
    setItems(item);
  };

  const RemoveItem = (item) => {
    const temp = Items.filter((it) => it.id !== item.id);
    setItems(temp);
  };

  const Order = () => {
    setItems([]);
  };

  useEffect(() => {
    fetch(
      "https://crudcrud.com/api/19bffb556e4d4c3180cc77d051f5deec/" +
        Auth_Context.Email
    )
      .then((res) => res.json())
      .then((data) => context.AddItems(data));
  }, [Auth_Context.Login]);

  const context = {
    Products: Products,
    CartItems: Items,
    AddItems: AddItems,
    RemoveItem: RemoveItem,
    Order: Order,
  };

  return (
    <ContextStore.Provider value={context}>
      {props.children}
    </ContextStore.Provider>
  );
};
export default ContextProvider;
