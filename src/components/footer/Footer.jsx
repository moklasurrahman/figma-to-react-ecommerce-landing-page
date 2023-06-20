import React from 'react'
import img from '../../assets/Vector 2.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section>
        <div className='bg-[#232347] mt-[103px] relative'>
        
        <img src={img} className='w-[1440px] h-[473px] opacity-50' alt="" />

    <div className='flex justify-center items-center m-auto absolute inset-0 left-0 right-0 w-full max-w-screen-xl flex-wrap mx-auto '>


    <div className="w-full flex m-auto justify-center items-center inset-0">
      <div className="grid grid-cols-2 justify-between w-full md:grid-cols-4 m-auto items-start xl:flex ">
        <div>
            <h2 className="mb-[30px] text-[22px] font-[700] text-white dark:text-white">Shop</h2>
            <ul className="text-[#FFFFFF] dark:text-gray-400 font-[400] text-16px">
                <li className="mb-[10px]">
                    <Link href="#" className=" hover:underline">Gift cards</Link>
                </li>
                <li className="mb-[10px]">
                    <Link href="#" className="hover:underline">SnipShop blog</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-[30px] text-[22px] font-[700] text-[white] dark:text-white">Help center</h2>
            <ul className="text-[#FFFFFF] dark:text-gray-400 font-[400] text-16px">
                <li className="mb-[10px]">
                    <Link href="#" className="hover:underline">Forums</Link>
                </li>
                <li className="mb-[10px]">
                    <Link href="#" className="hover:underline">Tearms</Link>
                </li>
                <li className="mb-[10px]">
                    <Link href="#" className="hover:underline">Affiliates</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-[30px] text-[22px] font-[700] text-white dark:text-white">About</h2>
            <ul className="text-[#FFFFFF] dark:text-gray-400 font-[400] text-16px">
                <li className="mb-[10px]">
                    <Link href="#" className="hover:underline">SnipShop, Inc.</Link>
                </li>
                <li className="mb-[10px]">
                    <Link href="#" className="hover:underline">Policies</Link>
                </li>
                <li className="mb-[10px]">
                    <Link href="#" className="hover:underline">Investors</Link>
                </li>
                <li className="mb-[10px]">
                    <Link href="#" className="hover:underline">Careers</Link>
                </li>
                <li className="mb-[10px]">
                    <Link href="#" className="hover:underline">Press</Link>
                </li>
                <li className="mb-[10px]">
                    <Link href="#" className="hover:underline">Impact</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-[30px] text-[22px] font-[700] text-white dark:text-white">Help</h2>
            <ul className="text-[#FFFFFF] dark:text-gray-400 font-[400] text-16px">
                <li className="mb-[10px]">
                    <Link href="#" className="hover:underline">Help center</Link>
                </li>
                <li className="mb-[10px]">
                    <Link href="#" className="hover:underline">Trust and safety</Link>
                </li>
                <li className="mb-[10px]">
                    <Link href="#" className="hover:underline">Privacy settings</Link>
                </li>
            </ul>
        </div>
    </div>

    </div>
        </div>
        </div>



<div className="px-4 py-6 bg-[#232347] dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2021-2023 SnipShop.com
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <span className="">Terms of use</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <span className="">Privacy</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <span className="">Interest-based ads</span>
            </Link>
    
        </div> 
      </div>
    </section>
  )
}

export default Footer