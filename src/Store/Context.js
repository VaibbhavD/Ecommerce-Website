import React from "react";

const ContextStore = React.createContext({
  Products: [],
  CartItems: [],
  AddItems: (item) => {},
  RemoveItem: (item) => {},
  Order: () => {},
});

export default ContextStore;
