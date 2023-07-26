import React, { useState } from "react";

import { LuShoppingCart } from "react-icons/lu";

import Modal from "../../../Shared/modal/Modal";
import Button from "../../../Shared/UI/Button";
import Cart from "./Cart";

const CartButton = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    console.log("show cart");
    setShowCart((prevShowCart) => !prevShowCart);
  };

  return (
    <React.Fragment>
      {/* Render Cart elements inside of Modal as children */}
      {showCart && (
        <Modal>
          <Cart />
        </Modal>
      )}
      <Button title="Cart" onClick={showCartHandler}>
        <LuShoppingCart className="ml-2" size={20} />
      </Button>
    </React.Fragment>
  );
};

export default CartButton;
