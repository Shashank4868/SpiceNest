import React, { useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import CartContext from "../../../Shared/context/cart-context";
import { AuthContext } from "../../../Shared/context/auth-context";

import Button from "../../../Shared/UI/Button";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const auth = useContext(AuthContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const cartLength = cartCtx.items.length;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  return (
    <React.Fragment>
      <ul className="rounded-lg list-none m-0 p-0 max-h-80 overflow-auto">
        {cartCtx.items.length > 0 &&
          cartCtx.items.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
          ))}
      </ul>
      <div className="flex justify-between items-center  px-4 py-4 mx-4 my-4 font-bold text-2xl mb-4 mt-4">
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className="flex justify-between">
        <Button onClick={props.onClose}>CLOSE</Button>
        <div className="flex flex-row ">
          {cartLength !== 0 ? (
            <Button onClick={cartCtx.clearCart}>CLEAR</Button>
          ) : (
            <Button disabled>CLEAR</Button>
          )}
          {cartLength ? (
            // <Button onClick={orderCartItemsHandler}>ORDER</Button>
            <Link to={`/checkout/${auth.userId}`}>
              <Button onClick={props.onClose}>Order</Button>
            </Link>
          ) : (
            <Button disabled>ORDER</Button>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;
