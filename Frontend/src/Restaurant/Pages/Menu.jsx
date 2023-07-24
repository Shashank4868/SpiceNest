import React from "react";

import MainNavigation from "../../Shared/Navigation/MainNavigation";
import AllDishesOption from "../components/AllDishesOption";

const MenuPage = () => {
  return (
    <React.Fragment>
      <MainNavigation />
      <AllDishesOption />
    </React.Fragment>
  );
};

export default MenuPage;
