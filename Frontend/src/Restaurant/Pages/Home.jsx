import React from "react";

import Middle from "../components/Middle";
import FruitsScroll from "../components/FruitsScroll";
import AllDishesOption from "../components/AllDishesOption";

const HomePage = () => {
  return (
    <React.Fragment>
      <Middle />
      <FruitsScroll />
      <AllDishesOption />
    </React.Fragment>
  );
};

export default HomePage;
