import React from 'react'

const FeaturedProductCard = ({product}) => {
  return (
    <div className='mt-[157px] relative'>
          <div className=" relative w-[310px] h-[370px] bg-[#FFFDFE] border-[1px] border-[ #F5F5F5] rounded-[30px] shadow dark:bg-gray-800 dark:border-gray-700" style={{boxShadow: "0px 8px 18px -7px rgba(0, 0, 0, 0.1)"}}>
          
          <div className='absolute bottom-[200px] left-0 right-0 flex items-center justify-center z-10'>
          <span className="absolute top-[23px] py-[2px] px-[7px] left-[23px] bg-[#0E4B80] bg-opacity-90 rounded-[4px] text-[#FCFCFC]">
          PRE-ORDER
          </span>
            <img
                className="w-[290px] h-[262px] rounded-[16px] overflow-hidden object-cover justify-center m-auto shadow"
                src={product.thumbnail}
                alt="productImage"
            /> 
          </div>

         <div className=' clear-both'></div>

          <div className=' font-[Poppins] mt-[200px] text-[#3B3849] flex flex-col justify-center items-center'>
            <h1 className='font-[Poppins] text-[24px] font-[600]'>{product.title}</h1>
            <span className=' mt-[10px]'><strong className='text-[24px]'>{product.category}</strong></span>
            <span className='mt-[30px] text-[18px] text-[#0E4B80] font-[600]'>${product.price} USD</span>
          </div>
    
      </div>
      <div className=' flex m-auto mt-[40px] justify-center'>
        <button className=' w-[200px] h-[54px] rounded-[42px] text-center bg-[#001439] font-[600] text-[18px] text-[#FCFCFC]'>ORDER NOW</button>
      </div>
    </div>
  )
}

export default FeaturedProductCard