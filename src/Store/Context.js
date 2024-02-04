import React from "react";

const ContextStore = React.createContext({
  CartItem: [],
  AddItems: () => {},
  RemoveItem: () => {},
});

export default ContextStore;
