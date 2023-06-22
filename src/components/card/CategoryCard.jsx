import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";

const CategoryCard = ({ product }) => {
  const { cartList, addToCart, removeFromCart } = useCart();
  const [inCart, setIncart] = useState(false);

  useEffect(() => {
    const productIncard = cartList.find((item) => item.id === product.id);

    if (productIncard) {
      setIncart(true);
    } else {
      setIncart(false);
    }
  }, [cartList, product.id]);

  return (
    <div>
      <div className=" relative w-[355px] h-[340px] bg-[#FFFFFF] border border-[#FFFFFF] rounded-[34px] shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to={`product-details/${product.id}`}>
          <img
            className=" w-[289px] h-[162px] roun-[12px] mt-[34px] object-cover flex items-center justify-center m-auto"
            src={product?.thumbnail}
            alt="productImage"
          />
        </Link>
        <div className="w-[289px] mt-[22px] flex items-center m-auto ">
          <div>
            <h5 className="truncate text-[18px] font-[600] tracking-tight dark:text-white">
              {product.title}
            </h5>

            <div className="flex items-center mt-[54px] gap-[17px]">
              <span className=" opacity-70 font-[Poppins] font-normal text-[18px] text-[#000000]">
                ${product.price}
              </span>
              <span className="font-[Poppins] font-normal text-[18px] text-[#FF4516] line-through">
                ${product.discountPercentage}
              </span>
            </div>
          </div>
        </div>

        {!inCart && (
          <div
            onClick={() => addToCart(product)}
            className=" cursor-pointer absolute top-[261px] left-[261px] w-[61px] h-[61px] bg-[#F0F0F0] rounded-full flex items-center justify-center m-auto "
          >
            <button>
              <i class="bi bi-plus-circle text-[25px] text-[#223E3F]"></i>
            </button>
          </div>
        )}

        {inCart && (
          <div
            onClick={() => removeFromCart(product)}
            className=" cursor-pointer absolute top-[261px] left-[261px] w-[61px] h-[61px] bg-[#661212] rounded-full flex items-center justify-center m-auto "
          >
            <button onClick={() => addToCart(product)}>
              <i class="bi bi-plus-circle text-[25px] text-[#223E3F]"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryCard;
