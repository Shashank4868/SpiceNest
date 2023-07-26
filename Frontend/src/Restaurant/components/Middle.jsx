import React from "react";

import Card from "../../Shared/UI/Card";
import Button from "../../Shared/UI/Button";
import { AllMenu as AllMenuItems } from "../../Shared/dishes/AllMenu";

const Middle = () => {
  const FAST_FOOD = AllMenuItems.filter(
    (item) => item.category === "fast-food"
  );
  return (
    <main className="flex flex-row flex-wrap">
      <div className="w-[47%] m-auto mt-[5%] inline-table">
        <span className=" text-7xl leading-[6rem] font-sans font-bold">
          The Finest Cuisine Available in <b className="text-_3F72AF">Ranchi</b>
        </span>
        <br />
        <br />
        <br />
        <p className="text-[18px] mt-[5%]">
          Welcome to "Flavorsome Delights" – a culinary haven that tantalizes
          your taste buds with a diverse array of delectable cuisines from
          around the world. Our restaurant is a gastronomic paradise, offering a
          unique dining experience where you can explore an extensive menu
          featuring a fusion of flavors, aromas, and textures.
        </p>
        <Button title="Order Now.." />
      </div>
      <div className="w-[45%] flex flex-wrap m-auto justify-around">
        {FAST_FOOD.map((food) => (
          <Card
            className="w-[220px] h-60 inline-block p-0 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-xl overflow-hidden shadow-card items-center m-4"
            key={food.id}
            title={food.title}
            price={food.price}
            image={food.image}
          />
        ))}
      </div>
    </main>
  );
};

export default Middle;
