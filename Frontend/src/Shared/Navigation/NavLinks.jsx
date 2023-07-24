import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <ul className="[&>*]:px-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/menu">Menu</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/aboutus">About Us</NavLink>
      <NavLink to="/contactus">Contact Us</NavLink>
    </ul>
  );
};

export default NavLinks;
