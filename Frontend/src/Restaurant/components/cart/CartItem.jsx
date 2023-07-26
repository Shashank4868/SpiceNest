import React from "react";

const CartItem = (props) => {
  return (
    <div className="flex flex-row justify-between items-center w-[90vw] m-auto">
      <div className="flex flex-row justify-center items-center">
        <div className="bg-button text-button w-8 h-8 rounded-full flex items-center justify-center">
          {props.image}
        </div>
        <div className="ml-2 text-black font-medium">{props.title}</div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="text-black font-medium">{props.quantity}</div>
        <div className="text-black font-medium ml-2">x</div>
        <div className="text-black font-medium ml-2">{props.price}</div>
      </div>
    </div>
  );
};

export default CartItem;
