import React, { useContext } from "react";

import { AllMenu as AllMenuItems } from "../../../Shared/dishes/AllMenu";
import CartContext from "../../../Shared/context/cart-context";

import Menucard from "../../../Shared/UI/MenuCard";

const AllMenu = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = ({ id, title, price }) => {
    console.log("add to cart", price);
    console.log(title);
    cartCtx.addItem({
      id: id,
      title: title,
      price: price,
      amount: 1,
    });
  };

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
            onClick={addToCartHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default AllMenu;
