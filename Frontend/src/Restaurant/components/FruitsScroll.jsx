import React, { useContext } from "react";

import Card from "../../Shared/UI/Card";
import { CgArrowLeftO, CgArrowRightO } from "react-icons/cg";
import CartContext from "../../Shared/context/cart-context";

const FruitsScroll = (props) => {
  const cartCtx = useContext(CartContext);
  const Fruits = props.AllMenuItems.filter(
    (item) => item.category === "fruits"
  );

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft -= 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft += 500;
  };

  const addToCartHandler = ({ id, title, price }) => {
    cartCtx.addItem({
      id: id,
      name: title,
      price: price,
      amount: 1,
    });
  };

  return (
    <React.Fragment>
      <div className="flex justify-between rounded-lg m-4 underline items-center h-16">
        <span className="text-2xl ml-2 font-medium">
          Our Fresh & healthy Fruits
        </span>
        <div className="flex flex-row mr-8 justify-between">
          <CgArrowLeftO
            size={30}
            onClick={slideLeft}
            className="cursor-pointer opacity-50 hover:opacity-100"
          />
          <CgArrowRightO
            size={30}
            onClick={slideRight}
            className="cursor-pointer opacity-50 hover:opacity-100"
          />
        </div>
      </div>
      <div className="relative bg-DBE2EF flex items-center rounded-xl w-full m-auto max-w-[95vw]">
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {Fruits.map((fruit) => (
            <Card
              className="w-[14rem] h-64 bg-grey inline-block p-0 cursor-pointer hover:opacity-90 rounded-xl overflow-hidden shadow-card items-center m-4 "
              key={fruit.id}
              id={fruit.id}
              title={fruit.title}
              description={fruit.description}
              price={fruit.price}
              image={fruit.image}
              cartIcon={true}
              onClick={addToCartHandler}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default FruitsScroll;
