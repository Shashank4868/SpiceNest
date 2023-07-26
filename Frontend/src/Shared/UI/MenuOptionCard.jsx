import React from "react";

const MenuOptionCard = (props) => {
  const classes = props.className ? props.className : "";
  return (
    <button
      onClick={() => {
        props.onClick(props.category);
      }}
      className={` ${classes} ${
        props.selected ? "bg-button text-button" : "bg-white text-white"
      } w-[8vw] h-[18vh] rounded-md flex flex-col items-center justify-evenly  shadow-button   text-base m-3 cursor-pointer border-none hover:shadow-buttonHover transition-shadow duration-200 hover:bg-buttonHover hover:transition-colors hover:duration-200`}
    >
      <div
        className={` ${
          props.selected ? "bg-white" : "bg-button"
        } rounded-full p-2`}
        style={props.selected ? { color: "#164c8f" } : { color: "white" }}
      >
        {props.image}
      </div>
      <div className="text-black font-medium">{props.title}</div>
    </button>
  );
};

export default MenuOptionCard;
