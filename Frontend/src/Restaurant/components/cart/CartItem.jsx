import React from "react";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="flex justify-between items-center border-b-2 border-b-_112D4E border-solid px-4 py-4 mx-4 my-4">
      <div>
        <h2 className="font-bold text-xl mb-1">{props.name}</h2>
        <div className="w-40 flex justify-between items-center">
          <span className="font-bold text-_112D4E">{price}</span>
          <span className="font-bold px-3 py-1 border-[1px] border-solid border-_112D4E rounded-lg text-_3F72AF">
            x {props.amount}
          </span>
        </div>
      </div>
      <div className="flex flex-row">
        <button
          onClick={props.onRemove}
          className="text-lg font-bold cursor-pointer bg- text-_112D4E w-12 text-center rounded-lg ml-4 m-1 border-[2px] border-solid border-_112D4E hover:bg-DBE2EF active:bg-DBE2EF"
        >
          −
        </button>
        <button
          onClick={props.onAdd}
          className="text-lg font-bold cursor-pointer bg- text-_112D4E w-12 text-center rounded-lg ml-4 m-1 border-[2px] border-solid border-_112D4E hover:bg-DBE2EF active:bg-DBE2EF"
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
