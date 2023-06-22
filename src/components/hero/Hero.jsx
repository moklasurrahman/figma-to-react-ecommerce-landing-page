import React from 'react'
import img from "../../assets/base.svg"
import img2 from "../../assets/base 2.svg"


import './hero.scss'
import HeroSlider from './HeroSlider';

const Hero = () => {
  return (
    <section >
       <div className='relative'>
        <img src={img} alt="" className=' absolute top-0 left-0 object-cover h-auto w-full'/>
      
        <div className=' relative max-w-screen-xl xl:max-w-screen-xl flex justify-center items-center flex-col m-auto'>
        <img src={img2} alt="" className=' absolute top-0 left-0' />

        {/* slider start */}
            <HeroSlider/>
        {/* slider End*/}


        <div className='flex gap-[45px] items-center pl-[50px] absolute top-[530px] left-[580px]'>
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