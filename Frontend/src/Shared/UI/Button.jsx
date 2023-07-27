import React from "react";

const Button = (props) => {
  const classes = props.className ? props.className : "";
  const disabled = props.disabled ? "opacity-50 cursor-not-allowed" : " ";
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={` ${classes} ${disabled} px-[14px] py-[12px] rounded-md flex items-center bg-button shadow-button  text-white text-base m-3 cursor-pointer border-none hover:shadow-buttonHover transition-shadow duration-200 hover:bg-buttonHover hover:transition-colors hover:duration-200`}
    >
      {props.title} {props.children}
    </button>
  );
};

export default Button;
