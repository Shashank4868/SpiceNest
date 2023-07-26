import React from "react";

const CartContext = React.createContext({
  items: [], // array of items in cart
  totalAmount: 0, // total amount of all items in cart
  addItem: (item) => {}, // item = itemId, itemPrice, itemTitle, itemQuantity
  removeItem: (id) => {}, // id = itemId
  clearCart: () => {},
});

export default CartContext;
