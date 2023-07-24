import React from "react";

import MainNavigation from "../../Shared/Navigation/MainNavigation";
import Middle from "../components/Middle";
import FruitsScroll from "../components/FruitsScroll";
import AllDishesOption from "../components/AllDishesOption";

const HomePage = () => {
  return (
    <React.Fragment>
      <MainNavigation />
      <Middle />
      <FruitsScroll />
      <AllDishesOption />
    </React.Fragment>
  );
};

export default HomePage;
