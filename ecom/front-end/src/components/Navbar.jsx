import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { LuSearch, LuUser, LuX } from "react-icons/lu";
import { IoIosArrowDown, IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
    const dispatch = useDispatch();
    const loggedinUser = useSelector((state) => state.auth.user);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // State for Language Dropdown
    const [language, setLanguage] = useState("English");
    const logOut = async () => {
        dispatch(logOutReducer());
        let res = await axios.post(
            `${import.meta.env.VITE_API}/auth/logout`,
            {},
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );

        console.log(res);
    };
    return (
        <nav className='border-b border-[rgba(0,0,0,0.25)] relative bg-white'>
            {/* Top Bar */}
            <div className='bg-[#000000]'>
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center py-2 md:py-3 gap-2">
                        <div className="w-full md:w-[80%] text-center md:text-end">
                            <p className="text-[#ffffff] text-[11px] md:text-[14px] font-poppins">
                                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                                <Link to="/shop" className="font-semibold underline ml-2">Shop Now</Link>
                            </p>
                        </div>

                        {/* RESTORED: Language Dropdown Functionality */}
                        <div className="hidden md:block md:w-[20%] text-end">
                            <div className='flex justify-end gap-[9px] items-center'>
                                <div className="relative">
                                    <select
                                        value={language}
                                        onChange={(e) => setLanguage(e.target.value)}
                                        className="appearance-none bg-transparent border-none outline-0 font-poppins text-[14px] leading-[21px] text-[#FAFAFA] font-normal cursor-pointer pr-5"
                                    >
                                        <option className='text-black' value="English">English</option>
                                        <option className='text-black' value="Bangla">Bangla</option>
                                    </select>
                                    <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2">
                                        <IoIosArrowDown className='text-[16px] text-[#FAFAFA]' />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="container mx-auto px-4">
                <div className="py-4 flex items-center justify-between gap-4">

                    {/* LOGO */}
                    <div className="flex-shrink-0">
                        <Link to="/">
                            <h1 className='font-medium text-2xl md:text-3xl text-[#DB4444]'>FootPath</h1>
                        </Link>
                    </div>

                    {/* DESKTOP NAV */}
                    <div className="hidden lg:block">
                        <ul className="flex justify-center gap-8 xl:gap-10 font-poppins">
                            <li className='font-medium'><NavLink to="/" className={({ isActive }) => isActive ? "text-[#DB4444] border-b border-[#DB4444]" : "hover:text-[#DB4444] duration-300"}>Home</NavLink></li>
                            <li className='font-medium'><NavLink to="/about" className={({ isActive }) => isActive ? "text-[#DB4444] border-b border-[#DB4444]" : "hover:text-[#DB4444] duration-300"}>About</NavLink></li>
                            <li className='font-medium'><NavLink to="/shop" className={({ isActive }) => isActive ? "text-[#DB4444] border-b border-[#DB4444]" : "hover:text-[#DB4444] duration-300"}>Shop</NavLink></li>
                            <li className='font-medium'><NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#DB4444] border-b border-[#DB4444]" : "hover:text-[#DB4444] duration-300"}>Contact</NavLink></li>
                        </ul>
                    </div>

                    {/* RIGHT SIDE: Search, Icons, Hamburger */}
                    <div className="flex items-center gap-2 md:gap-3 lg:gap-5">

                        {/* SEARCH (Desktop Only) */}
                        <div className="hidden lg:relative lg:block">
                            <input
                                className="bg-[#F5F5F5] py-2 px-4 pr-10 w-[240px] text-[13px] rounded-sm font-poppins outline-none"
                                type='text'
                                placeholder="What are you looking for?"
                            />
                            <LuSearch className="absolute top-1/2 -translate-y-1/2 right-3 text-lg cursor-pointer" />
                        </div>

                        {/* ICONS (Compact Hover Circles) */}
                        <div className="flex items-center gap-1">
                            <Link to="/wishlist" className="w-8 h-8 hover:bg-[#DB4444] flex justify-center items-center rounded-full transition-all group">
                                <IoMdHeartEmpty className="text-[20px] text-black group-hover:text-white" />
                            </Link>

                            <Link to="/cart" className="w-8 h-8 hover:bg-[#DB4444] flex justify-center items-center rounded-full transition-all group">
                                <IoCartOutline className="text-[20px] text-black group-hover:text-white" />
                            </Link>

                            {
                                loggedinUser ? (
                                    <div className='relative group'>
                                        <img
                                            className='w-[30px] h-[30px] rounded-full cursor-pointer'
                                            src={loggedinUser.image}
                                            alt={loggedinUser.name} />

                                        <ul className='absolute top-[30px] lef-0 hidden bg-white z-1000 group-hover:block w-[150px] py-2 px-3'>
                                            <Link>
                                                <li className='font-medium hover:text-[#DB4444] duration-300 pb-[5px] '>
                                                    Profile
                                                </li>
                                            </Link>
                                            <Link
                                                onClick={logOut}
                                                className='font-medium hover:text-[#DB4444] duration-300'>
                                                Log Out
                                            </Link>
                                        </ul>
                                    </div>
                                )


                                    : (
                                        <Link to="/login" className="w-8 h-8 hover:bg-[#DB4444] flex justify-center items-center rounded-full transition-all group">
                                            <LuUser className="text-[20px] text-black group-hover:text-white" />
                                        </Link>
                                    )
                            }


                        </div>

                        {/* HAMBURGER (Right Side) */}
                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-3xl text-black cursor-pointer focus:outline-none ml-1"
                            >
                                {isMenuOpen ? <LuX /> : <CgMenuRight />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU DROPDOWN */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 z-50 shadow-lg">
                    <div className="px-6 py-8">
                        <ul className="flex flex-col gap-6 font-poppins text-lg font-medium">
                            <li onClick={() => setIsMenuOpen(false)}><NavLink to="/">Home</NavLink></li>
                            <li onClick={() => setIsMenuOpen(false)}><NavLink to="/about">About</NavLink></li>
                            <li onClick={() => setIsMenuOpen(false)}><NavLink to="/shop">Shop</NavLink></li>
                            <li onClick={() => setIsMenuOpen(false)}><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;