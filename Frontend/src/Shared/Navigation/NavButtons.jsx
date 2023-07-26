import React from "react";

import Button from "../../Shared/UI/Button";
import CartButton from "../../Restaurant/components/cart/CartButton";

const NavButtons = () => {
  return (
    <div className="flex">
      <CartButton />
      <Button title="Sign Up" />
    </div>
  );
};

export default NavButtons;
