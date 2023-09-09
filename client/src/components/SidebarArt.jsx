import React, { useState } from 'react'
import Logo from '../assets/shield.png'

const SidebarArt = () => {

    const [openAlchemy, setOpenAlchemy] = useState(true);
    const [valuecontrastRatio, setValuecontrastRatio] = useState(1)
    return (
        <>
            <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-2 py-7 overflow-y-auto bg-black text-white border-r">

                    <a href="/" className="flex items-center pl-2.5 mb-10">
                        <img src={Logo} className="h-6 mr-3 sm:h-7" alt="Logo" />
                        <span className="self-center text-xl font-bold whitespace-nowrap text-white">PixelFusion</span>
                    </a>
                    <ul className="space-y-2 px-2 font-medium ">
                        <li className='border-t'>
                            <button type="button" className="mt-2 flex items-center w-full text-base text-white transition duration-75 rounded-lg group" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">

                                <span className="flex-1 text-left text-sm whitespace-nowrap ">Number of Images</span>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>


                            <ul id="dropdown-example" className="py-2 space-y-2">
                                <li>
                                    <ul class="grid w-full gap-1 md:grid-cols-4">
                                        <li>
                                            <input type="radio" id="img-1" name="hosting" value="1" class="hidden peer" required />
                                            <label for="img-1" class="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-yellow-400 peer-checked:text-yellow-400 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <h1 class="w-full text-sm text-center font-semibold">1</h1>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" id="img-2" name="hosting" value="2" class="hidden peer" />
                                            <label for="img-2" class="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-yellow-400 peer-checked:text-yellow-400 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <h1 class="w-full text-sm text-center font-semibold">2</h1>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" id="img-3" name="hosting" value="3" class="hidden peer" />
                                            <label for="img-3" class="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-yellow-400 peer-checked:text-yellow-400 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <h1 class="w-full text-sm text-center font-semibold">3</h1>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" id="img-4" name="hosting" value="4" class="hidden peer" />
                                            <label for="img-4" class="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-yellow-400 peer-checked:text-yellow-400 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <h1 class="w-full text-sm text-center font-semibold">4</h1>
                                            </label>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className='border-t'>
                            <div className="flex justify-between mt-3">
                                <span className="flex-1 text-left text-sm whitespace-nowrap ">Alchemy</span>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class={`sr-only ${openAlchemy ? `peer` : ``}`} onClick={() => setOpenAlchemy(!openAlchemy)} checked />
                                    <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"></div>
                                </label>
                            </div>
                            <div className={`show-info-ac mt-2 ${openAlchemy ? `block` : `hidden`}`}>
                                <button className="w-full h-auto block text-white bg-gray-800 hover:bg-gray-900 p-2 rounded" onClick={() => document.getElementById('my_modal_1').showModal()}>
                                    <ul>
                                        <li className='flex justify-between items-center'>
                                            <h1 className='text-sm'>High Resolution</h1>
                                            <h3>OFF</h3>
                                        </li>
                                        <li className='flex justify-between items-center'>
                                            <h1 className='text-sm'>Expanded Domain</h1>
                                            <h3>ON</h3>
                                        </li>
                                        <li className='flex justify-between items-center'>
                                            <h1 className='text-sm'>Contrast Boost</h1>
                                            <h3>0.5</h3>
                                        </li>
                                        <li className='flex justify-between items-center'>
                                            <h1 className='text-sm'>Resonance</h1>
                                            <h3>15</h3>
                                        </li>
                                    </ul>
                                </button>
                                <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box bg-gray-800">
                                        <h3 className="font-bold text-lg text-center">Alchemy Settings</h3>
                                        <div className="rounded bg-gray-900 p-4 mt-3">
                                            <div className='flex justify-between border-b pb-3'>
                                                <span>Expanded Domain</span>
                                                <label class="relative inline-flex items-center cursor-pointer">
                                                    <input type="checkbox" value="open" class="sr-only peer" />
                                                    <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"></div>
                                                </label>
                                            </div>
                                            <div className='mt-3'>

                                                <label for="minmax-range" class="block mb-2 text-sm font-medium text-white dark:text-white">Min-max range</label>
                                                <input id="minmax-range" type="range" step="0.5" value={valuecontrastRatio} onChange={e => setValuecontrastRatio(e.target.value)} class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />

                                            </div>
                                        </div>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>

                        </li>

                    </ul>
                </div>
            </aside>
        </>
    )
}

export default SidebarArt