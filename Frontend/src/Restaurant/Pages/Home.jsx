import React from "react";

import Middle from "../components/Middle";
import FruitsScroll from "../components/FruitsScroll";
import AllDishesOption from "../components/AllDishesOption";
import Footer from "../components/footer/Footer";

import { AllMenu } from "../../Shared/dishes/AllMenu";

const HomePage = () => {
  return (
    <React.Fragment>
      <Middle AllMenuItems={AllMenu} />
      <FruitsScroll AllMenuItems={AllMenu} />
      <AllDishesOption AllMenu={AllMenu} />

      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
