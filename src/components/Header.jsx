import React, { useState } from 'react';
import { TiThMenuOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

import SideBar from './SideBar';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className='flex justify-between items-center bg-slate-600 w-screen p-1 smallLaptop:p-3'>
                <div className='w-1/4'>
                    <img src="https://t3.ftcdn.net/jpg/03/41/82/92/360_F_341829251_nCaRNCeQmoj6cIPZTEGrgm6QmeZcEIdr.jpg" alt="logo" className='w-[100px] object-contain' />
                </div>
                <nav className='hidden desktop:flex largeDesktop:flex extraLargeDesktop:flex w-3/4'>
                    <ul className='flex justify-between w-full h-full p-4'>
                        <li>Products</li>
                        <li>Products</li>
                        <li>Products</li>
                        <li>Products</li>
                        <li>Products</li>
                    </ul>
                </nav>
                <div className='flex desktop:hidden largeDesktop:hidden extraLargeDesktop:hidden'>
                    {isOpen ? <IoClose className='text-gray-400 laptop:text-[60px] smallLaptop:text-[55px] smallMobile:text-[30px]' onClick={() => setIsOpen(!isOpen)} /> : (<TiThMenuOutline className='text-gray-400 laptop:text-[60px] smallLaptop:text-[55px] smallMobile:text-[30px]' onClick={() => setIsOpen(!isOpen)} />)}

                </div>
            </div>
            <div className={` relative w-full ${isOpen ? 'block' : 'hidden'} desktop:hidden largeDesktop:hidden extraLargeDesktop:hidden flex justify-end h-screen`}>
                <SideBar isOpen={isOpen} />
            </div>
        </div>
    );
}

export default Header;
