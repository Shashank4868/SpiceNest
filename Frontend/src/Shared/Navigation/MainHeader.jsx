import React from "react";

import { NavLink } from "react-router-dom";

import RestaurantImg from "../../Shared/Assets/Restaurant.svg";

const MainHeader = () => {
  return (
    <NavLink to="/">
      <img src={RestaurantImg} alt="logo" className="w-24 h-24" />
    </NavLink>
  );
};

export default MainHeader;
