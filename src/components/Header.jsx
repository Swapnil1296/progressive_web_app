import React, { useState } from 'react';
import { TiThMenuOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

import SideBar from "./SideBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  console.log(isOpen);

  return (
    <div>
      <div
        className="
      flex justify-between items-center bg-slate-600 w-screen p-1 smallLaptop:p-5 font-serif "
      >
        <div className="w-1/4">
          <img
            src="https://t3.ftcdn.net/jpg/03/41/82/92/360_F_341829251_nCaRNCeQmoj6cIPZTEGrgm6QmeZcEIdr.jpg"
            alt="logo"
            className="w-[50px] largeDesktop:w-[100px] desktop:w-[100px]  object-contain rounded-full"
          />
        </div>
        <nav className="hidden w-2/4 desktop:flex largeDesktop:flex laptop:flex  laptop:w-3/4 extraLargeDesktop:flex ">
          <ul className="flex justify-between w-full h-full p-4 text-center ">
            <li className="text-white bg-gray-500 hover:bg-white hover:text-black rounded-full px-6 py-2 text-sm font-medium transition duration-250 ">
              Home
            </li>
            <li className="text-white bg-gray-500 hover:bg-white hover:text-black rounded-full px-6 py-2 text-sm font-medium transition duration-250 ">
              Products
            </li>
            <li className="text-white bg-gray-500 hover:bg-white hover:text-black rounded-full px-6 py-2 text-sm font-medium transition duration-250 ">
              My cart
            </li>
            <li className="text-white bg-gray-500 hover:bg-white hover:text-black rounded-full px-6 py-2 text-sm font-medium transition duration-250 ">
              Wish List
            </li>
            <li className="text-white bg-gray-500 hover:bg-white hover:text-black rounded-full px-6 py-2 text-sm font-medium transition duration-250 ">
              About us
            </li>
          </ul>
        </nav>
        {/* <div>
          <CgProfile className="text-[45px] smallMobile:text-[25px] mobile:text-[25px] text-cyan-200 hover:bg-white hover:text-black rounded-full" />
        </div> */}
        <div className="flex laptop:hidden desktop:hidden largeDesktop:hidden extraLargeDesktop:hidden">
          {isOpen ? (
            <IoClose
              className="text-gray-400 laptop:text-[50px] smallLaptop:text-[40px] smallMobile:text-[30px]"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <TiThMenuOutline
              className="text-gray-400 laptop:text-[50px] smallLaptop:text-[40px] smallMobile:text-[30px]"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      </div>

      <div className="relative w-full flex justify-end  laptop:hidden desktop:hidden largeDesktop:hidden extraLargeDesktop:hidden">
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default Header;
