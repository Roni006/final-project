import { Link, NavLink } from 'react-router'
// import {  } from 'react-router'
import user from '../assets/user.svg';
import cart from '../assets/cart.svg';
import { CgMenuRight } from "react-icons/cg";


import { IoIosArrowDown } from "react-icons/io";
// import logo from "../../assets/images/logo.png";
import { LuSearch } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
// import { Link } from "react-router";
const Navbar = () => {
    return (
        <>
            <nav className='border-b border-[rgba(0,0,0,0.25)]'>
                <div className='bg-[#000000]'>
                    <div className="container">
                        <div className="flex items-center py-3">
                            <div className=" w-[80%] text-end">
                                <p className="text-[#ffffff] text-[14px] font-poppins leading-[21px] ">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                                    <Link to="/shop" className="font-semibold leading-6 underline">Shop Now</Link></p>
                            </div>
                            <div className="w-[20%] text-end">
                                <div className='flex justify-end gap-[9px] items-center'>
                                    <div class="relative w-22">
                                        <select class="appearance-none w-full px-3 outline-0 font-popins text-[14px] leading-[21px] text-[#FAFAFA] font-normal cursor-pointer">
                                            <option className='text-black'>English</option>
                                            <option className='text-black'>Bangla</option>
                                        </select>
                                        <span class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                                            <IoIosArrowDown className='text-[18px] text-[#FAFAFA] mt-1' />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="py-6  flex items-center">
                        <div className="w-[10%]">
                            <div className="logo">
                                <Link to="/">
                                    {/* <img src={logo} alt="logo" /> */}
                                    <h1 className='font-medium text-3xl text-[#DB4444]'>FootPath</h1>
                                </Link>
                            </div>
                        </div>
                        <div className="w-[60%]">
                            <ul className="menus flex justify-center gap-10">
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            isActive ? "text-[#DB4444]" : ""
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li> 
                                <li>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) =>
                                            isActive ? "text-[#DB4444]" : ""
                                        }
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/shop"
                                        className={({ isActive }) =>
                                            isActive ? "text-[#DB4444]" : ""
                                        }
                                    >
                                        Shop
                                    </NavLink>
                                </li>  
                                <li>
                                    <NavLink
                                        to="/contact"
                                        className={({ isActive }) =>
                                            isActive ? "text-[#DB4444]" : ""
                                        }
                                    >
                                        Contact
                                    </NavLink>
                                </li> 
                                {/* <li><Link to='signup' >Sign Up</Link></li> */}
                            </ul>
                        </div>
                        <div className="w-[30%] flex items-center justify-end gap-6">
                            <div className="W-[243px] relative">
                                <input className="outline-0 bg-[#F5F5F5] py-2.5 ps-4 pe-10 w-full text-[12px] leading-[18px rounded-sm font-poppins" type='text' placeholder="What are you looking for ?" />
                                <LuSearch for="search" className="absolute top-[50%] translate-y-[-50%] right-4 cursor-pointer" />

                            </div>
                            <div className="flex justify-center items-center gap-4">
                                <div className="w-8 h-8 hover:hover:bg-[#DB4444] flex justify-center items-center rounded-full cursor-pointer group">
                                    <Link to="/login">
                                        <LuUser className="text-[18px] text-[#000000] group-hover:text-white duration-200 " />
                                    </Link>
                                </div>
                                <div className="w-8 h-8 hover:hover:bg-[#DB4444] duration-200 flex justify-center items-center rounded-full  group">
                                    <Link to="wishlist">
                                        <IoMdHeartEmpty className="text-[18px] text-[#000000] group-hover:text-white duration-200 cursor-pointer " />
                                    </Link>
                                </div>

                                <div className="w-8 h-8 hover:hover:bg-[#DB4444] flex justify-center items-center rounded-full cursor-pointer group">
                                    <Link to='cart'>
                                        <IoCartOutline className="text-[18px] text-[#000000] group-hover:text-white duration-200 " />
                                    </Link>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar