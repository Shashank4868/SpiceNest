import React from "react";

import { LuShoppingCart } from "react-icons/lu";

const Card = (props) => {
  // rounded-xl overflow-hidden shadow-card flex flex-col items-center m-4
  const classes = props.className ? props.className : "";
  return (
    <div className={` ${classes} `}>
      <img
        src={props.image}
        alt={props.title}
        className="h-full w-full max-h-36 bg-contain bg-no-repeat bg-center"
      />
      <div className="flex flex-row items-center justify-center">
        <div className=" p-[15px] flex flex-col items-start leading-[0.5rem]">
          <h2 className="text-xl mb-2">{props.title}</h2>
          <p className="text-l mb-4">{props.description}</p>
          <p className="text-[1rem] font-bold ">${props.price}</p>
        </div>
        {props.cartIcon && (
          <LuShoppingCart
            style={{ color: "3F72AF" }}
            size={40}
            className="hover:scale-110 duration-300 ease-in-out opacity-1"
            onClick={() => {
              props.onClick({
                id: props.id,
                title: props.title,
                price: props.price,
              });
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
