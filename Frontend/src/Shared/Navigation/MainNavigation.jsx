import React from "react";

import NavLinks from "./NavLinks";
import MainHeader from "./MainHeader";
import NavButtons from "./NavButtons";

const MainNavigation = (props) => {
  return (
    <nav className="flex bg-DBE2EF flex-row flex-wrap justify-around items-center bg w-full">
      <MainHeader />
      <NavLinks />
      <NavButtons />
    </nav>
  );
};

export default MainNavigation;
