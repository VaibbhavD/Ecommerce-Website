import React, { useContext } from "react";
import ContextStore from "./Context";

export const GetProducts = () => {
  const context = useContext(ContextStore);
  const fetchdata = async () => {
    const res = await fetch("https://fakestoreapi.com/products/1");
    if (!res) {
      alert("Error Fetching Data");
    }
    const data = res.json();
    return data;
  };
  try {
    const data = fetchdata();
    context.UpdateProducts(data);
  } catch (error) {
    throw new Error(error);
  }
};
