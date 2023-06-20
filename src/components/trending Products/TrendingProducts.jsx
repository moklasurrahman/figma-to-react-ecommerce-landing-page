import { useState } from 'react';
import TrandingProductCard from './../card/TrandingProductCard';
import { useEffect } from 'react';
import { getproduct } from './../../services/productServices';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TrendingProducts = () => {

  const [products, setProducts] = useState({});


  useEffect(() => {
      async function fetchProducts(){
       try{
         const data = await getproduct()
              setProducts(data)
       }
       catch(error){
         console.log(error(error.message)) ;
       }
       
      }
      fetchProducts()
     }, []);


     const carouselProperties = {
      dots: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: false,

      responsive: [
        {
          breakpoint: 426,
          settings: {
            slidesToShow: 1,
            centerMode: false,
          },
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 5,
            centerMode: false,
          },
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 5,
            centerMode: false,
            slidesToScroll: 2,
          },
        },
      ],
     
    }





  
  return (
    <section className="mt-[227px] text-[#000002] overflow-hidden">

      <div className="relative max-w-screen-xl m-auto flex flex-col justify-center items-center">
        <div className="title text-[#000002] flex flex-col justify-center items-center">
          <h1 className=" font-[700] text-[36px] font-[Spectral]  ">Shop Our Trending Products</h1>
          <p className="mt-[24px] font-[400] text-[18px]">Life is hard enough already. Let us make it a little easier.</p>
        </div>

        <div className="cat mt-[46px] flex justify-between w-full">
          <div className="flex-1"></div>
          <ul className="flex flex-1 gap-[18px] items-center justify-center text-[12px] font-[500]">
            <li className=" hover:underline underline-offset-2 decoration-3">Fashion</li>
            <li className=" hover:underline underline-offset-2 decoration-3">Technology</li>
            <li className=" hover:underline underline-offset-2 decoration-3"> Interiors</li>
            <li className=" hover:underline underline-offset-2 decoration-3">Food & Drink</li>
          </ul>

          <div className="flex flex-1 gap-4 items-end justify-end">
            <button className="w-[18px] h-[18px] bg-[#EBEBEB] text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white rounded-full flex items-center justify-center"><i className="bi bi-chevron-left text-[10px]"></i></button>
            <button className="w-[18px] h-[18px] bg-[#EBEBEB] text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white rounded-full flex items-center justify-center"><i className="bi bi-chevron-right text-[10px]"></i></button>
          </div>

        </div>


       <div className="absolute top-[176px] left-[140px]">
          <div className="card w-full flex gap-5">
            <Slider {...carouselProperties}>
            {
              products.products?.map((product)=>(
                <TrandingProductCard key={product.id} product={product}/>
              ))
            }
            </Slider>
           </div>

       </div>

       <div className="clear-both	"></div>

      <div className="mt-[276px]"></div>
      </div>
  
    </section>
  );
};

export default TrendingProducts;
