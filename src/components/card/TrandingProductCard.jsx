const TrandingProductCard = ({product}) => {
  

  return (
    
    <div className="">
    <div style={{
      background: "linear-gradient(234.3deg, #C0D4FE 16.99%, #ECF1FD 91.97%)",
      border: "1px solid #EDEDED", 
      boxShadow: "5px 13px 18px -5px rgba(128, 128, 128, 0.1)", 
      backdropFilter: "blur(4.5px)"}}

     className=" mt-[104px] relative flex w-[250px] h-[160px] rounded-[25px]">
        <div className='pl-[30px] pt-[20px] pr-[90px] flex flex-col'>
          <h1 className=' text-[#171717] text-[22px] font-[600] font-[Poppins]'>Seven Zero <p></p> Five</h1>
          <span className=' text-[#475E68] mt-[4px] font-[600] text-[16px]'>Starting</span>
          <span className=' text-[#FF4516] mt-[14px] font-[600] text-[16px]'>$10.00</span>
        </div>
        <div className=' absolute top-[-50px] right-0'><img src={product.thumbnail} alt="" className='w-[72px] h-[180px] object-cover'/></div>
    </div>
    </div>
  )
}

export default TrandingProductCard