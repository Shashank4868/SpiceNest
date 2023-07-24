import React from "react";

const MenuOptionCard = (props) => {
  const classes = props.className ? props.className : "";
  return (
    <button
      onClick={() => {
        props.onClick(props.category);
      }}
      className={` ${classes} w-[8vw] h-[18vh] rounded-md flex flex-col items-center justify-evenly bg-white shadow-button  text-white text-base m-3 cursor-pointer border-none hover:shadow-buttonHover transition-shadow duration-200 hover:bg-buttonHover hover:transition-colors hover:duration-200`}
    >
      <div className="rounded-full bg-button p-2" style={{ color: "white" }}>
        {props.image}
      </div>
      <div className="text-black font-medium">{props.title}</div>
    </button>
  );
};

export default MenuOptionCard;
