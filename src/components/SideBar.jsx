import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`flex z-50 fixed flex-col gap-2 bg-gray-800 p-2 text-center w-2/3 h-full transition-transform duration-300 ease-linear transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } smallLaptop:w-2/4`}
    >
      <input
        type="search"
        className="text-white bg-black hover:bg-white hover:text-black rounded-full px-6 py-2 text-sm font-medium transition duration-250"
        placeholder="Search Your Next Product"
      />
      <NavLink
        to="/"
        className="text-white bg-black hover:bg-white hover:text-black rounded-full px-6 py-2 text-sm font-medium transition duration-250"
      >
        Home
      </NavLink>
      <NavLink
        to="/product-list"
        className="text-white bg-black hover:bg-white hover:text-black rounded-full px-6 py-2 text-sm font-medium transition duration-250"
      >
        Products
      </NavLink>
      <NavLink
        to="/cart"
        className="text-white bg-black hover:bg-white hover:text-black rounded-full px-6 py-2 text-sm font-medium transition duration-250"
      >
        My Cart
      </NavLink>
      <NavLink
        to="/wishlist"
        className="text-white bg-black hover:bg-white hover:text-black rounded-full px-6 py-2 text-sm font-medium transition duration-250"
      >
        Wishlist
      </NavLink>
      <NavLink
        to="/contact-us"
        className="text-white bg-black hover:bg-white hover:text-black rounded-full px-6 py-2 text-sm font-medium transition duration-250"
      >
        Contact Us
      </NavLink>
    </div>
  );
};

export default SideBar;
