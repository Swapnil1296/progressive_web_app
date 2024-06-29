import React from 'react';

const SideBar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className=
      
      {`flex z-50 fixed flex-col gap-2 bg-gray-800 p-2 text-center w-2/3 h-full transition-transform duration-300 ease-linear transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
        } smallLaptop:w-2/4`}
    >
      <input
        type="search"
        className="text-white bg-black hover:bg-white hover:text-black rounded-full px-6 py-2 text-sm font-medium transition duration-250"
        placeholder="Search Your Next Product"
      />
      <span className="text-white bg-black hover:bg-white hover:text-black rounded-full px-6 py-2 text-sm font-medium transition duration-250">
        Wish List
      </span>
      <span className="text-white bg-black hover:bg-white hover:text-black rounded-full px-6 py-2 text-sm font-medium transition duration-250">
        Collections
      </span>
      <a
        href="#"
        className="text-white bg-black hover:bg-white hover:text-black rounded-full px-6 py-2 text-sm font-medium transition duration-250"
      >
        Wish List
      </a>
      <span className="text-white bg-black hover:bg-white hover:text-black rounded-full px-6 py-2 text-sm font-medium transition duration-250">
        Contact Us
      </span>
      <span className="text-white bg-black hover:bg-white hover:text-black rounded-full px-6 py-2 text-sm font-medium transition duration-250">
        Wish List
      </span>
    </div>
  );
};

export default SideBar;
