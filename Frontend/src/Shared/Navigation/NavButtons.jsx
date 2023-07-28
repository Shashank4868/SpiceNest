import React from "react";

import CartButton from "../../Restaurant/components/cart/CartButton";
import SignupButton from "../../Restaurant/components/signup/SignupButton";

const NavButtons = () => {
  return (
    <div className="flex">
      <CartButton />
      <SignupButton />
    </div>
  );
};

export default NavButtons;
