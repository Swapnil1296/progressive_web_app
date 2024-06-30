import React, { useState, useEffect } from "react";
import { TiThMenuOutline as MenuIcon } from "react-icons/ti";
import { IoClose as CloseIcon } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import SideBar from "./SideBar";

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-white bg-gray-500 hover:bg-white hover:text-black rounded-full px-6 py-2 text-sm font-medium transition duration-250"
  >
    {children}
  </Link>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close the sidebar whenever the route changes
    setIsOpen(false);
  }, [location.pathname]); // Watch for changes in location.pathname

  return (
    <>
      <div className="flex justify-between items-center bg-slate-600 w-screen p-1 smallMobile:px-2 smallLaptop:p-5 font-serif laptop:h-16">
        <div className="w-1/4">
          <img
            src="https://t3.ftcdn.net/jpg/03/41/82/92/360_F_341829251_nCaRNCeQmoj6cIPZTEGrgm6QmeZcEIdr.jpg"
            alt="logo"
            className="w-[50px] largeDesktop:w-[100px] desktop:w-[100px]  object-contain rounded-full"
          />
        </div>
        <nav className="hidden w-2/4 desktop:flex largeDesktop:flex laptop:flex laptop:w-3/4 extraLargeDesktop:flex">
          <ul className="flex justify-between w-full h-full p-4 text-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/product-list">Products</NavLink>
            <NavLink to="/cart">My Cart</NavLink>
            <NavLink to="/wishlist">Wish List</NavLink>
            <li className="text-white bg-gray-500 hover:bg-white hover:text-black rounded-full px-6 py-2 text-sm font-medium transition duration-250">
              About us
            </li>
          </ul>
        </nav>
        <div className="flex laptop:hidden desktop:hidden largeDesktop:hidden extraLargeDesktop:hidden">
          {isOpen ? (
            <CloseIcon
              className="text-gray-400 laptop:text-[50px] smallLaptop:text-[40px] smallMobile:text-[30px]"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <MenuIcon
              className="text-gray-400 laptop:text-[50px] smallLaptop:text-[40px] smallMobile:text-[30px]"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      </div>

      <div className="relative w-full flex justify-end laptop:hidden desktop:hidden largeDesktop:hidden extraLargeDesktop:hidden">
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default Header;
