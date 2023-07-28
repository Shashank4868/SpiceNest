import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const SignupButton = () => {
  return (
    <NavLink
      to="/signup"
      className="px-[14px] py-[12px] rounded-md flex items-center bg-button shadow-button  text-white text-base m-3 cursor-pointer border-none hover:shadow-buttonHover transition-shadow duration-200 hover:bg-buttonHover hover:transition-colors hover:duration-200"
    >
      Sign Up
    </NavLink>
  );
};

export default SignupButton;
