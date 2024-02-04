import React from "react";

const ContextStore = React.createContext({
  CartItems: [],
  AddItems: (item) => {},
  RemoveItem: (item) => {},
  Order: () => {},
});

export default ContextStore;
