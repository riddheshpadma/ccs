import React from 'react'
import { TbSmartHome } from "react-icons/tb";
import { BiCategory } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { FaServicestack } from "react-icons/fa6";
import { FaBlog } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

export const BottomNavbar = () => {
  return (
    <div className='fixed lg:hidden md:w-fit bottom-0 left-0 right-0 sm:-right-0 p-4 text-black z-20'>
      <div className='flex justify-center items-center backdrop-blur-lg rounded-xl   '>
        <ul className='flex justify-center items-center'>
          <a href="#home"><li className='py-4 px-4 rounded-xl hover:text-white hover:bg-black'><TbSmartHome size={24} /></li></a>
          <a href="#services"><li className='py-4 px-4 rounded-xl hover:text-white hover:bg-black'><FaServicestack size={24} /></li></a>
          <a href="#aboutus"><li className='py-4 px-4 rounded-xl hover:text-white hover:bg-black'><GoPerson size={28} /></li></a>
          <a href="#technologies"><li className='py-4 px-4 rounded-xl hover:text-white hover:bg-black'><BiCategory size={24} /></li></a>
          <a href="#blogs"><li className='py-4 px-4 rounded-xl hover:text-white hover:bg-black'><FaBlog size={28} /></li></a>
          <a href="#contact"><li className='py-4 px-4 rounded-xl hover:text-white hover:bg-black'><TfiEmail size={24} /></li></a>
        </ul>
      </div>
    </div>
  )
}
