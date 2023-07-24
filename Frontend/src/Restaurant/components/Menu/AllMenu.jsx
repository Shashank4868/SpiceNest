import React from "react";

import { AllMenu as AllMenuItems } from "../../../Shared/Dishes/AllMenu";

import Menucard from "../../../Shared/UI/MenuCard";

const AllMenu = (props) => {
  var displayMenu;
  props.category === "All"
    ? (displayMenu = AllMenuItems)
    : (displayMenu = AllMenuItems.filter(
        (item) => item.category === props.category
      ));
  return (
    <div className="m-8 bg-DBE2EF rounded-xl">
      <div className="m-8 bg-DBE2EF flex flex-wrap justify-center rounded-xl">
        {displayMenu.map((item) => (
          <Menucard
            key={item.title}
            image={item.image}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AllMenu;
