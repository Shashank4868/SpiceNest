import React, { useContext } from "react";

import { AllMenu as AllMenuItems } from "../../../Shared/dishes/AllMenu";
import CartContext from "../../../Shared/context/cart-context";

import Menucard from "../../../Shared/UI/MenuCard";

const AllMenu = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = ({ id, title, price }) => {
    cartCtx.addItem({
      id: id,
      name: title,
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
  if (displayMenu.length !== 0) {
    return (
      <div className="m-8 bg-DBE2EF rounded-xl">
        <div className="m-8 bg-DBE2EF flex flex-wrap justify-center rounded-xl">
          {displayMenu.map((item) => (
            <Menucard
              key={item.id}
              id={item.id}
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
  }
  return <div className="text-center p-8 text-red">No Items Found!</div>;
};

export default AllMenu;
