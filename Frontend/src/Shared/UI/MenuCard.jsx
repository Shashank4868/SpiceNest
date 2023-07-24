import React from "react";

import { MdAddShoppingCart } from "react-icons/md";

const Menucard = (props) => {
  const classes = props.className ? props.className : "";
  return (
    <div className={`${classes} bg-grey rounded-xl w-64 h-72 shadow-card m-8`}>
      <img
        src={props.image}
        alt={props.title}
        className="h-full rounded-t-xl w-full max-h-36 bg-contain bg-no-repeat bg-center mb-4"
      />
      <div className="flex flex-row items-center justify-around">
        <div className="flex flex-col items-center ">
          <h2 className="text-lg mb-1 mt-1 font-medium">{props.title}</h2>
          <p className="text-l mb-2">{props.description}</p>
          <p className="text-[1rem] font-bold ">${props.price}</p>
        </div>
        <div className="rounded-full bg-buttonHover m-4 w-12 h-12 relative hover:scale-110 duration-200 ease-in-out cursor-pointer">
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
