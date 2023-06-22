import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleproduct } from "../../services/productServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Rating } from "./Rating";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../../context/cartContext";

const ProductDetail = () => {
  const { cartList, addToCart, removeFromCart } = useCart();
  const [inCart, setIncart] = useState(false);
  const [product, setProduct] = useState({});

  console.log(product);

  const { id } = useParams();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getSingleproduct(id);
        setProduct(data);
      } catch (error) {
        toast.error(error.message, {
          closeButton: true,
          position: "top-center",
        });
      }
    }
    fetchProducts();
  }, [id]);

  useEffect(() => {
    const productIncard = cartList.find((item) => item.id === product.id);

    if (productIncard) {
      setIncart(true);
    } else {
      setIncart(false);
    }
  }, [cartList, product.id]);

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-[90%] xl:w-full mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="z-10 lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={product.thumbnail}
          />

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>

            <div className="flex mb-4">
              <span className="flex items-center">
                <Rating rating={product?.rating} />
                <span className=" bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  {product.rating}
                </span>
              </span>

              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                <Link to="" className="text-gray-500 cursor-pointer">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </Link>
                <Link to="" className="ml-2 text-gray-500 cursor-pointer">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </Link>
                <Link to="" className="ml-2 text-gray-500 cursor-pointer">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </Link>
              </span>
            </div>

            <p className="leading-relaxed">{product.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <span className=" bg-blue-100 text-blue-800 text-xs mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {product.category}
              </span>
              <span className=" bg-blue-100 text-blue-800 text-xs mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                Stock: {product.stock}
              </span>
              <span className=" bg-blue-100 text-blue-800 text-xs mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                Brand: {product.brand}
              </span>
            </div>

            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product.price}
              </span>

              {!inCart && (
                <button
                  onClick={() => addToCart(product)}
                  className="flex ml-auto text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                >
                  Add To Cart{" "}
                  <AddIcon style={{ fontSize: "20px", marginLeft: "3px" }} />
                </button>
              )}

              {inCart && (
                <button
                  onClick={() => removeFromCart(product)}
                  className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                >
                  Remove To Cart{" "}
                  <DeleteIcon style={{ fontSize: "20px", marginLeft: "3px" }} />
                </button>
              )}
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
