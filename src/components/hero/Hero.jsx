import React from 'react'
import Navbar from '../navbar/Navbar'
import img from "../../assets/base.svg"
import img2 from "../../assets/base 2.svg"
import img3 from '../../assets/image-removebg-preview (49) 2.svg'
import img4 from '../../assets/image-removebg-preview (50) 1.svg'
import img5 from '../../assets/image 54.svg'

import './hero.scss'

const Hero = () => {
  return (
    <section >
       <div className='relative'>
        <img src={img} alt="" className=' absolute top-0 left-0 object-cover h-auto w-full'/>
        <img src={img2} alt="" className=' absolute top-0 left-0' />
      
        <div className=' pt-0'>
            <Navbar/>
        </div>

        <div className=' relative max-w-screen-xl xl:max-w-screen-xl flex justify-center items-center flex-col m-auto'>
    
        {/* slider start */}
        <div className='slider relative flex items-center justify-between gap-0 w-full pt-[80px] px-[100px]'> 
        <div className="left flex flex-1 flex-col justify-start items-start text-start">
            <span className='font-[Spectral] text-[12px] font-[500]'>100% QUALITY, 100% SATISFACTION</span>
            <h1 className='mt-[14px] font-[Spectral] text-[64px] font-[800] leading-[74px]'> Where the world comes to shop.</h1>
            <p className='mt-[26px] text-[18px] font-[400] font-[Poppins]'>Life is hard enough already. Let us make it a little easier, Vision of Snipshop for a better outlook.</p>
            <button className='mt-[76px] w-[145px] h-[44px] bg-[#2B2B2B] rounded-[42px] text-[12px] font-[600] text-[#FFFFFF]'>SHOP NOW</button>
        </div> 

        <div className=' absolute top-[400px] left-[500px]'>
            <p className=' text-[#262626] font-[500] text-[14px]'>Start From</p>
            <span className=' text-[#2A2A2A] font-[600] text-[30px]'>110.00$</span>
        </div>


        <div className="senter flex-1">
            <div className="img">
                <img src={img3} alt="" className='w-[390] h-[390] rounded-[300px] border-[20px] border-[#2062FF]  border-opacity-[40%]	'/> 
            </div>
        </div>

        <div className="right flex flex-col flex-2 gap-[26px] text-[#3F444B]">
            <div className='flex gap-[15px] flex-col items-center'>
                <img src={img4} alt="" className='w-[130px] h-[130px] rounded-[65px] '/>
                <span className='text-[8px] font-[600]'>Fuji 14mm Lens</span>
            </div>

            <div className='flex gap-[15px] flex-col items-center'>
                <img src={img5} alt="" className='w-[130px] h-[130px] rounded-[65px] '/>
                <span className='text-[8px] font-[600]'>Camera Stand</span>
            </div>
            

            <button className='w-[34.5px] h-[34.5px] bg-[#000002] rounded-full text-[#FFFFFF] flex justify-center items-center m-auto'><i class="bi bi-chevron-down text-xl"></i></button>
        </div>
        </div>{/* slider End*/}


        <div className='flex gap-[45px] items-center pl-[50px] absolute top-[545px] left-[580px]'>
            <button className=' text-[14px] font-[400] text-[#1D65FF]'>PREV</button>
                <div className='flex items-center gap-[19px]'> 
                    <span className='w-[8px] h-[8px] bg-[#1D65FF] rounded opacity-60 '></span> 
                    <span className='w-[8px] h-[8px] bg-[#1D65FF] rounded opacity-60 '></span> 
                    <span className='w-[8px] h-[8px] bg-[#1D65FF] rounded opacity-100 '></span> 
                    <span className='w-[8px] h-[8px] bg-[#1D65FF] rounded opacity-60 '></span> 

                   
                </div>
            <button className=' text-[14px] font-[400] text-[#1D65FF]'>NEXT</button>
        </div>



       </div>


       </div>
    </section>
  )
}

export default Hero