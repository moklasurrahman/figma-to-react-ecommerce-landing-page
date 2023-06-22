import React, { useState } from "react";
import logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import Navbar from './../navbar/Navbar';

const Topbar = () => {
  const { cartList } = useCart();

  const [navbar, setNavbar] = useState(false);

  return (
    <section className="bg-[#1E66FF] w-[1440px]">
      <div className=" h-[78px] w-[1280px] flex flex-wrap items-center justify-between mx-auto">
        <div className=" cursor-pointer">
          <Link to="/">
            <img src={logo} alt="" className="w-[92px] h-[28px]" />
          </Link>
        </div>
        <div className="flex justify-end w-[593px] h-[28px] bg-[#F1F1F1] rounded-[16px]">
          <input
            type="text"
            className=" text-[#BEBEBE] pl-[20px] text-[10px] font-[500] w-[593px] bg-transparent outline-none"
            placeholder="Search SnipShop.com"
          />
          <button className="bg-[#4DC3F7] w-[64px] rounded-[16px]">
            <i className="bi bi-search text-[#FFFFFF]"></i>
          </button>
        </div>

        <div className="flex gap-[15px] text-[#FFFFFF] ">
          <div className="flex items-center gap-2 cursor-pointer">
            <i className="bi bi-person text-[16px]"></i>{" "}
            <span className=" text-[10px] font-[500]">Account</span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <i className="bi bi-heart text-[16px]"></i>
            <span className=" text-[10px] font-[500]">My items</span>
          </div>

          <Link to="/cart">
            <div className="mr-5 cursor-pointer relative">
              <i className="bi bi-bag text-[16px]"></i>
              <span className="absolute inline-flex items-center justify-center w-[8px] h-[8px] text-[9px] p-2 text-black bg-[#FFC221] rounded-full -top-[5px] -right-[14px]">
                {cartList.length}
              </span>
            </div>
          </Link>

          {
            navbar ? <div onClick={()=> setNavbar(!navbar)} className=" cursor-pointer text-red-600">
            <i className="bi bi-justify"></i>
          </div> :  <div onClick={()=> setNavbar(!navbar)} className=" cursor-pointer">
            <i className="bi bi-justify"></i>
          </div>
          }




        </div>
      </div>

      <div className=" absolute top-[90px] left-[206px] right-[206px]">
        {
          navbar && <Navbar/>
        }
        
      </div>


    </section>
  );
};

export default Topbar;
