import React from "react";
import img1 from "../../assets/testimoback.svg";
import img2 from "../../assets/persone.svg";
import imoje from "../../assets/icon/emoji.svg";

const Testimonial = () => {
  return (
    <section>
      <div className="mt-[103px] relative flex gap-[82px] items-center">
        <div className="left relative w-[666px] h-[598px] bg-[#CEF0FF]">
          <div className=" flex inset-5 m-auto absolute top-[34px] left-[198px]">
            <img
              src={img1}
              className=" w-[440px] h-[530px] z-10 flex m-auto justify-center absolute"
              alt=""
            />
            <img src={img2} alt="" className=" z-20 w-[440px] h-[530px]" />
          </div>
        </div>

        <div className="right">
          <div>
            <div className="flex gap-[5px]">
              <h3 className="text-[20px] font-[600]">Justin Pierre</h3>
              <img src={imoje} className="w-[36px] h-[36px]" alt="" />
            </div>
            <span className="font-[400] text-[14px] mt-[1px] text-[#7E7E7E]">
              Products Seller
            </span>
            <p className="font-[500px] text-[20px] mt-[40px] italic w-[463px] text-[#000000]">
              “In 2 years, my business went from just me and my Shop site to 40
              employees, my own fulfillment center and over 22 million dollars
              in revenue.”
            </p>
          </div>

          <div className="flex gap-4 mt-[52px]">
            <button className="w-[37.5px] h-[37.5px] bg-[#EBEBEB] text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white rounded-full flex items-center justify-center">
              <i className="bi bi-chevron-left text-[20px]"></i>
            </button>
            <button className="w-[37.5px] h-[37.5px] bg-[#EBEBEB] text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white rounded-full flex items-center justify-center">
              <i className="bi bi-chevron-right text-[20px]"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
