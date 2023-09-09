import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import bgHero from '../assets/bg-hero.jpg';
import bgheroSc from '../assets/bgheroSc.jpg'
import bgheroTH from '../assets/bgheroTH.jpg'
import { initFlowbite } from 'flowbite';

const Home = () => {

    const [userLogin, setUserLogin] = useState(false)

    useEffect(() => {
        initFlowbite()
    }, [])
    return (

        <div className='bg-gray-900 h-screen'>
            <Navbar />
            <div className='h-3/6 w-full flex justify-center items-center bg-yellow-700 flex-col'
                style={{ backgroundImage: `url(${bgHero}), url(${bgheroTH}), url(${bgheroSc})`, backgroundPosition: `right bottom, left top, center`, backgroundSize: `contain, contain, contain`, backgroundRepeat: `no-repeat, no-repeat, no-repeat` }}>

                <h1 className='text-[2.5rem] text-center leading-snug font-mitr font-semibold mb-3 text-white drop-shadow-[0_10px_10px_rgba(0,0,0,1)]'>ปลดล็อคความคิดสร้างสรรค์ของคุณด้วยรูปภาพ<br />ที่สร้างจากเอไอ และอีกมากมาย</h1>
                <Searchbar />
            </div>
            <div className='bg-yellow-400 w-full flex justify-center items-center py-5'>
                <h1 className='font-mitr font-normal text-2xl mr-3'>ทดสร้างรูปภาพด้วยเอไอฟรี 10 ภาพ</h1>
                <a className='py-2.5 px-5 text-sm font-normal font-mitr font-normal text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-yellow-500' href={userLogin ? `/create` : `/login`}>เริ่มต้นใช้งาน</a>
            </div>

        </div>
    );
}

export default Home