import React, { useRef } from "react";
import FeaturedProductCard from "./../card/FeaturedProductCard";
import { getproduct } from "../../services/productServices";
import { useEffect } from "react";
import { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedProduct = () => {
  const [products, setProducts] = useState({});

  const sliderRef = useRef(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getproduct();
        setProducts(data);
      } catch (error) {
        console.log(error(error.message));
      }
    }
    fetchProducts();
  }, []);

  const carouselProperties = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    autoplay: true,
  };

  return (
    <section className="overflow-hidden">
      <div className="all mt-[190px] max-w-screen-xl flex flex-col flex-wrap items-center justify-between mx-auto">
        <div className="cat mt-[46px] flex justify-between w-full">
          <div className="flex-1"></div>
          <h1 className="text-[36px] font-[700] font-[Spectral] w-[361px] text-center leading-[46px]">
            Featured Product For Pre-Order
          </h1>
          <div className="flex flex-1 gap-4 items-end justify-end">
            <div className="flex gap-[13px]">
              <span className=" font-[500] text-[16px] ">
                Discover Our Products
              </span>
              <i class="bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="cardsec mt-[65px]">
        <div className="all flex gap-[80.83px] items-center ml-[197.83px] mr-[25px]">
          <div className="left flex-1">
            <div className="flex gap-4">
              <button
                onClick={() => sliderRef.current.slickPrev()}
                className="w-[37.5px] h-[37.5px] bg-[#EBEBEB] text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white rounded-full flex items-center justify-center"
              >
                <i className="bi bi-chevron-left text-[20px]"></i>
              </button>
              <button
                onClick={() => sliderRef.current.slickNext()}
                className="w-[37.5px] h-[37.5px] bg-[#EBEBEB] text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white rounded-full flex items-center justify-center"
              >
                <i className="bi bi-chevron-right text-[20px]"></i>
              </button>
            </div>
          </div>

          <div className="right flex-2 justify-start items-start">
            <div className="car flex gap-[54px]">
              <Slider ref={sliderRef} {...carouselProperties}>
                {products.products?.map((product) => (
                  <FeaturedProductCard key={product.id} product={product} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
