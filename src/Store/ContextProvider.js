import React, { useContext, useEffect, useState } from "react";
import ContextStore from "./Context";

const ContextProvider = (props) => {
  const [Items, setItems] = useState([]);
  const [showcart, setshowcart] = useState(false);
  const [Products, SetProducts] = useState([]);

  const AddItems = (item) => {
    setItems((prev) => [...prev, item]);
  };

  const RemoveItem = (item) => {
    const temp = Items.filter((it) => it.id !== item.id);
    setItems(temp);
  };

  const Order = () => {
    setItems([]);
  };

  const ShowCart = () => {
    setshowcart((prev) => !prev);
  };

  const UpdateCart = (item) => {
    if (item) {
      setItems(item);
    }
  };

  const updateProducts = (data) => {
    if (data) {
      SetProducts(data);
    }
  };

  useEffect(async () => {
    const fetchdata = async () => {
      const res = await fetch("https://dummyjson.com/products");
      if (!res) {
        alert("Error Fetching Data");
      }
      const data = res.json();
      return data;
    };
    try {
      const data = await fetchdata();
      // console.log(data.products);
      SetProducts(data.products);
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  const context = {
    Products: Products,
    CartItems: Items,
    AddItems: AddItems,
    RemoveItem: RemoveItem,
    UpdateCart,
    UpdateCart,
    Order: Order,
    Showcart: showcart,
    enableShowCart: ShowCart,
    UpdateProducts: updateProducts,
  };

  return (
    <ContextStore.Provider value={context}>
      {props.children}
    </ContextStore.Provider>
  );
};
export default ContextProvider;
