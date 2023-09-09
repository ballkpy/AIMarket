import React, { useState, useEffect } from 'react'
import Logo from "../assets/shield.png"
import 'flowbite'
import { FaCartShopping } from "react-icons/fa6";



const Navbar = () => {
    const [userLogin, setUserlogin] = useState(true);
    return (
        <>


            <nav className="bg-gray-900 text-white hidden md:block">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
                    <a href="/" className="flex items-center">
                        <img src={Logo} className="mr-3 w-10 h-10" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">PixelFusion</span>
                    </a>
                    <div className="flex items-center font-mitr md:order-2">
                        {userLogin ? (
                            <>

                                <a href="/my-carts" className="text-white mr-4 text-2xl"><FaCartShopping /></a>
                                <a href="/create" className="text-white hover:bg-yellow-500 bg-yellow-400 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-3 hidden md:block">สร้างภาพด้วย AI</a>
                                <a href="/dashboard" className="text-white hover:bg-yellow-500 bg-yellow-400 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-6 hidden md:block">แดสบอร์ด</a>


                                <img id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" className="w-10 h-10 rounded-full cursor-pointer object-center" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80" alt="User dropdown"></img>
                                <div id="userDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                        <div>Bonnie Green</div>
                                        <div className="font-medium truncate">name@flowbite.com</div>
                                    </div>
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <a href="/login" className="text-white hover:bg-yellow-500 ring-2 ring-yellow-400 hover:ring-yellow-500 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 hidden md:block">เข้าสู่ระบบ</a>
                                <a href="/register" className="text-white bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5  hidden md:block">สมัครสมาชิก</a>
                            </>)}


                    </div>


                </div>

            </nav>





            <nav className="bg-gray-900 text-white md:hidden">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-gray-900 md:hidden">

                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>


                    <a href="https://flowbite.com" className="flex items-center">
                        <img src={Logo} className="h-8 mr-1" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">PixelFusion</span>
                    </a>

                    <div className='flex items-center'>
                        <a href="/my-carts" className="text-white mr-4 text-2xl"><FaCartShopping /></a>

                        <img id="avatarButton-mb" type="button" data-dropdown-toggle="userDropdown-mb" data-dropdown-placement="bottom-start" className="w-10 h-10 rounded-full cursor-pointer object-center md:hidden" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80" alt="User dropdown"></img>
                        <div id="userDropdown-mb" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                <div>Bonnie Green</div>
                                <div className="font-medium truncate">name@flowbite.com</div>
                            </div>
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                </li>
                            </ul>
                            <div className="py-1">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                            </div>
                        </div>
                    </div>

                    <div className="hidden w-full" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 mt-4 rounded-lg bg-gray-900 text-white">

                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 ">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 ">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 ">About</a>
                            </li>

                            <li className='flex'>
                                <a href="/upload" className="text-white hover:bg-yellow-500 bg-yellow-400 font-medium rounded-lg text-sm px-4 py-2 mr-3 font-mitr">สร้างภาพด้วย AI</a>
                                <a href="/dashboard" className="text-white hover:bg-yellow-500 bg-yellow-400 font-medium rounded-lg text-sm px-4 py-2 font-mitr">แดสบอร์ด</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>




        </>
    )
}

export default Navbar