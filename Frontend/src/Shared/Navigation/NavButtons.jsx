import React from "react";

import { LuShoppingCart } from "react-icons/lu";

import Button from "../../Shared/UI/Button";
import Modal from "../Modal/Modal";

const NavButtons = () => {
  const [showCart, setShowCart] = React.useState(false);

  const showCartHandler = () => {
    console.log("show cart");
    setShowCart(true);
  };

  return (
    <div className="flex">
      {showCart && <Modal  />}
      <Button title="Cart" onClick={showCartHandler}>
        <LuShoppingCart className="ml-2" size={20} />
      </Button>
      <Button title="Sign Up" />
    </div>
  );
};

export default NavButtons;
