import React from "react";
import bgimg from "../../assets/Backgroung-populer.svg";
import logos from "../../assets/Logos.svg";
import bg2 from "../../assets/Background-social.svg";
import personImg from "../../assets/image 49.svg";
import img51 from "../../assets/image 51.svg";
import img52 from "../../assets/image 52.svg";
import img53 from "../../assets/sunglass.svg";

import icon1 from "../../assets/icon/face.svg";
import icon2 from "../../assets/icon/insta.svg";
import icon3 from "../../assets/icon/twite.svg";

const Feature = () => {
  return (
    <section className="bg-[#F4FCFF] h-[1818px] mt-[100px]">
      <div className="allContent max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <div className="top mt-[158px] flex items-center justify-center  gap-[108px]">
          <div className="left relative  w-[718px] h-[718px]">
            <img src={bgimg} className=" w-[718px] h-[718px]" alt="" />

            <div className=" absolute inset-0  m-auto left-0 right-0 flex items-center justify-center z-10">
              <img src={logos} className="w-[635px] h-[424px]" alt="" />
            </div>
          </div>

          <div className="right">
            <h1 className="font-[700] text-[36px]">
              Explore Most Popular Brands
            </h1>
            <p className="font-[400] text-[18px] mt-[25px]">
              Life is hard enough already. Let us <br /> make it a little
              easier.
            </p>
            <span className="mt-[65px] font-[500] text-[16px] flex gap-[12px]">
              See All <i class="bi bi-arrow-right"></i>
            </span>
          </div>
        </div>

        {/* //------------------------------------------------------------------- */}
        <div className="bottom mt-[212px]">
          <div className="flex items-center justify-center">
            <div className="left">
              <h1 className="font-[700] text-[36px]">
                Sell Easily on Socialmedia
              </h1>
              <p className="font-[400] text-[18px] mt-[25px]">
                Life is hard enough already. Let us make it a little easier.
              </p>
              <span className="mt-[65px] font-[500] text-[16px] flex gap-[12px]">
                See All <i class="bi bi-arrow-right"></i>
              </span>
            </div>

            <div className="right">
              <div className="left relative  w-[718px] h-[718px]">
                <img src={bg2} className=" w-[718px] h-[718px]" alt="" />

                <div className=" absolute  m-auto top-[100px] left-[155px] right-[0px] flex items-center justify-center z-10">
                  <img src={personImg} className="w-[418px] h-[403px]" alt="" />

                  <div className=" absolute top-[300px] left-[-30px]">
                    <div className="card flex gap-[20px]">
                      <div className=" relative">
                        <img
                          className="w-[139px] h-[166px]"
                          src={img53}
                          alt=""
                        />

                        <div className=" absolute top-[15px] left-[15px] flex flex-col justify-between gap-[91px]">
                          <img
                            className="w-[21px] h-[21px] z-10"
                            src={icon1}
                            alt=""
                          />
                          <span className=" text-12px">$12.00</span>
                        </div>
                        <div></div>
                      </div>

                      <div className=" relative">
                        <img
                          className="w-[139px] h-[166px]"
                          src={img51}
                          alt=""
                        />
                        <div className=" absolute top-[15px] left-[15px] flex flex-col justify-between gap-[91px]">
                          <img
                            className="w-[21px] h-[21px] z-10"
                            src={icon2}
                            alt=""
                          />
                          <span className=" text-12px">$35.00</span>
                        </div>
                      </div>

                      <div className=" relative">
                        <img
                          className="w-[139px] h-[166px]"
                          src={img52}
                          alt=""
                        />
                        <div className=" absolute top-[15px] left-[15px] flex flex-col justify-between gap-[91px]">
                          <img
                            className="w-[21px] h-[21px] z-10"
                            src={icon3}
                            alt=""
                          />
                          <span className=" text-12px">$22.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
