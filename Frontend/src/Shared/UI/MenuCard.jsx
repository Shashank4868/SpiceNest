import React from "react";

import { MdAddShoppingCart } from "react-icons/md";

const Menucard = (props) => {
  const classes = props.className ? props.className : "";
  return (
    <div
      className={`${classes} bg-grey rounded-xl w-64 h-[16.5rem] shadow-card m-8`}
    >
      <img
        src={props.image}
        alt={props.title}
        className="h-full rounded-xl w-full max-h-36 bg-contain bg-no-repeat bg-center mb-4 hover:scale-105 ease-in-out duration-200"
      />
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col items-center ">
          <h2 className="text-md mb-1 mt-1 font-bold">{props.title}</h2>
          <p className="text-sm mb-2">{props.description}</p>
          <p className="text-[1rem] font-bold ">${props.price}</p>
        </div>
        <div
          onClick={() => {
            props.onClick({
              id: props.id,
              title: props.title,
              price: props.price,
            });
          }}
          className="rounded-full bg-buttonHover m-2 w-20 h-12 relative hover:scale-105 duration-50 cursor-pointer"
        >
          <MdAddShoppingCart
            size={30}
            style={{ color: "white" }}
            className="block m-auto absolute inset-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Menucard;
