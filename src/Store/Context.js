import React from "react";

const ContextStore = React.createContext({
  Products: [],
  CartItems: [],
  Showcart: false,
  AddItems: (item) => {},
  RemoveItem: (item) => {},
  Order: () => {},
  UpdateCart: () => {},
  enableShowCart: () => {},
  UpdateProducts: () => {},
});

export default ContextStore;
