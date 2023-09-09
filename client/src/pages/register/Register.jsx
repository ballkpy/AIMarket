import React from "react";
import GoogleIcon from "../../assets/google.png";
import Waterfallbg from "../../assets/waterfallbg.jpeg";
import { Link } from "react-router-dom"

const Register = () => {
    return (

        <section class="flex flex-col md:flex-row h-screen items-center">

            <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <img src={Waterfallbg} alt="waterfall" class="w-full h-full object-cover" />
            </div>

            <div class="bg-black w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

                <div class="w-full h-100">


                    <h1 class="text-xl md:text-3xl font-bold leading-tight mt-12 text-white font-mitr">สมัครสมาชิก</h1>

                    <form class="mt-6" action="#" method="POST">
                        <div className="mb-4">
                            <label class="block text-gray-100 font-mitr font-extralight">ชื่อผู้ใช้งาน</label>
                            <input type="text" name="" id="" placeholder="กรอกชื่อผู้ใช้งาน" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2  border focus:border-yellow-600 focus:bg-white focus:outline-none" autofocus autocomplete required />
                        </div>

                        <div>
                            <label class="block text-gray-100 font-mitr font-extralight">อีเมล</label>
                            <input type="email" name="" id="" placeholder="กรอกอีเมลที่ใช้งาน" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-yellow-600 focus:bg-white focus:outline-none" autofocus autocomplete required />
                        </div>

                        <div class="mt-4">
                            <label class="block text-gray-100 font-mitr font-extralight">พาสเวิร์ด</label>
                            <input type="password" name="" id="" placeholder="กรอกพาสเวิร์ดที่ใช้งาน" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-yellow-600
                focus:bg-white focus:outline-none" required />
                        </div>

                        <button type="submit" class="w-full block bg-yellow-800 hover:bg-yellow-900 focus:bg-yellow-500 text-white font-normal rounded-lg font-mitr
              px-4 py-3 mt-6">สมัครสมาชิก</button>
                    </form>

                    <hr class="my-6 border-gray-500 w-full" />

                    <button type="button" class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                        <div class="flex items-center justify-center">
                            <img src={GoogleIcon} alt="google-icon" className="w-5" />
                            <span class="ml-4 font-mitr font-normal text-gray-900">
                                สมัครสมาชิกด้วย Google</span>
                        </div>
                    </button>

                    <p class="mt-8 text-white font-mitr font-light">มีรหัสอยู่แล้วใช่ไหม ? <Link to="/login" class="text-yellow-800 hover:text-yellow-900 font-normal font-mitr">เข้าสู่ระบบ</Link></p>


                </div>
            </div>

        </section>
    )
};

export default Register;
