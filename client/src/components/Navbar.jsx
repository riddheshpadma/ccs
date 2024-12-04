import React from 'react'
import { FaResearchgate } from "react-icons/fa";
import Brand from "../assets/img/Brand.png"


export const Navbar = () => {
    return (
        <div className='text-black z-20'>
            <nav className='fixed top-0 right-0 left-0'>
                <div className='flex justify-between items-center p-4'>
                    <div className='flex justify-between items-center p-2 space-x-10'>
                        <div className='flex justify-center items-center p-2 rounded-full backdrop-blur-sm'>
                            <img src={Brand} alt="" className='w-16 md:w-32' />
                        </div>
                        <div className='relative backdrop-blur-lg  rounded-md  '>
                            <div className=''>
                                <ul className='hidden lg:flex justify-around items-center'>
                                    <a href="#home">
                                        <li className='py-3 px-6 text-sm hover:text-[#d40808] transform ease-in-out duration-500 '>Home</li>
                                    </a>
                                    <a href="#services">
                                        <li className='py-3 px-6 text-sm hover:text-[#d40808] transform ease-in-out duration-500'>Services</li>
                                    </a>
                                    <a href="#aboutus">
                                        <li className='py-3 px-6 text-sm hover:text-[#d40808] transform ease-in-out duration-500'>About Us</li>
                                    </a>
                                    <a href="#technologies">
                                        <li className='py-3 px-6 text-sm hover:text-[#d40808] transform ease-in-out duration-500'>Technologies</li>
                                    </a>
                                    <a href="#blogs">
                                        <li className='py-3 px-6 text-sm hover:text-[#d40808] transform ease-in-out duration-500'>Blogs</li>
                                    </a>
                                    <a href="#contact">
                                        <li className='py-3 px-6 text-sm hover:text-[#d40808] transform ease-in-out duration-500'>Contact</li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center p-2  rounded-md backdrop-blur-sm'>
                        <div className='w-5 h-5 rounded-full bg-white'></div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar