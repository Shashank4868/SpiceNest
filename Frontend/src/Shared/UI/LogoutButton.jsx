import React, { useState, useContext } from "react";
import { FcManager } from "react-icons/fc";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import { AuthContext } from "../context/auth-context";

const LogoutButton = () => {
  const auth = useContext(AuthContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevDropDown) => !prevDropDown);
  };

  const handleLogout = (event) => {
    event.preventDefault();
    auth.logout();
    // alert("Logged out!");
  };
  return (
    <div className="flex flex-col items-center">
      <button onClick={toggleDropdown} className="relative inline-block">
        <FcManager
          style={{ color: "white" }}
          className=" bg-button rounded-xl"
          size={44}
        />
      </button>

      {isDropdownOpen && (
        <div
          className={`max-h-0 flex overflow-hidden text-white transition-max-h duration-200 ease-in-out opacity-0 absolute r-0 ${
            isDropdownOpen
              ? "max-h-[10vh] flex flex-col overflow-visible h-full opacity-100 mt-[8vh] bg-buttonHover rounded-xl p-2 shadow"
              : ""
          }`}
        >
          <Link to="/orders">Orders</Link>
          <hr className="border-white" />
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default LogoutButton;
