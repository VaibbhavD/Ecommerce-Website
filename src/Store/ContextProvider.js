import React, { useState } from "react";
import ContextStore from "./Context";

const ContextProvider = (props) => {
  const [Items, setItems] = useState([]);

  const AddItems = (item) => {
    setItems((prev) => [...prev, { ...item }]);
  };

  const RemoveItem = (item) => {
    const temp = Items.filter((it) => it.id !== item.id);
    setItems(temp);
  };

  const Order = () => {
    setItems([]);
  };

  const context = {
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
