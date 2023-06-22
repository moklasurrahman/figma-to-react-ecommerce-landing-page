import React from "react";
import CategoryCard from "../card/CategoryCard";
import { useEffect } from "react";
import { getproduct } from "../../services/productServices";
import { useState } from "react";

const CategorySection = () => {
  const [products, setProducts] = useState({});

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

  return (
    <div className="">
      <div className=" mt-[160px] max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <div className="top text-[#000002] flex justify-between w-full items-center">
          <div className="left">
            <h1 className=" text-[36px] font-[700] font-[Spectral]">
              Shop by Category
            </h1>
            <p className=" text-[18px] font-[400] mt-[24px]">
              Life is hard enough already. Let us make it a little easier.
            </p>
          </div>
          <div className="right">
            <div className="flex flex-1 gap-4 items-end justify-end">
              <button className="w-[18px] h-[18px] bg-[#EBEBEB] text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white rounded-full flex items-center justify-center">
                <i className="bi bi-chevron-left text-[10px]"></i>
              </button>
              <button className="w-[18px] h-[18px] bg-[#EBEBEB] text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white rounded-full flex items-center justify-center">
                <i className="bi bi-chevron-right text-[10px]"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="categoryCard mt-[66px] flex m-auto ">
          <div className="grid grid-cols-3 gap-[32px]">
            {products.products?.map((product) => (
              <CategoryCard product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
