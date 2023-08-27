import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";

import CartButton from "../../Restaurant/components/cart/CartButton";
import SignupButton from "../../Restaurant/components/signup/SignupButton";

import { AuthContext } from "../context/auth-context";
// import Button from "../UI/Button";
import LogoutButton from "../UI/LogoutButton";

const NavButtons = () => {
  const auth = useContext(AuthContext);

  const [isLoggedIn, setIsLoggedIn] = useState(auth.isLoggedIn);

  useEffect(() => {
    setIsLoggedIn(auth.isLoggedIn);
  }, [auth.isLoggedIn]);

  return (
    <div className="flex items-center flex-wrap">
      <CartButton />
      {isLoggedIn === true ? <LogoutButton /> : <SignupButton />}
    </div>
  );
};

export default NavButtons;
