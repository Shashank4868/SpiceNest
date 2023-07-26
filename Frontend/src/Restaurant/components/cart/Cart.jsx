import React, { useContext } from "react";

import CartContext from "../../../Shared/context/cart-context";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  return (
    <React.Fragment>
      <div>
        {cartCtx.items.length > 0 &&
          cartCtx.items.map((item) => (
            <div key={item.id} className="flex justify-between">
              <h2>{item.name}</h2>
              <h2>{item.amount}</h2>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
};

export default Cart;
