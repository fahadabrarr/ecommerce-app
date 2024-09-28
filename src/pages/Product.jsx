import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState("");
  const [image, setImage] = useState("");
  const [size, setSize] = useState();

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        console.log(item.image);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [productId]);
  return productData ? (
    <div className="max-w-screen-2xl px-5 mx-auto mt-10">
      {/* product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          {/* product image */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-around gap-3 sm:justify-normal sm:w-[18.7%] w-full items-center">
            {productData.image.map((item, idx) => {
              return (
                <img
                  src={item}
                  alt=""
                  key={idx}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  onClick={() => setImage(item)}
                />
              );
            })}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" className="w-full h-full sm:pb-3" />
          </div>
        </div>

        {/* product info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" />
            <p className="pl-2"> (10))</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p className="">Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, idx) => {
                return (
                  <button
                    className={`border py-2 px-3 bg-gray-100 ${
                      item === size ? "border-orange-400" : ""
                    }`}
                    key={idx}
                    onClick={() => setSize(item)}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1 ">
            <p className="">100% Original product</p>
            <p className="">Cash on delivary is available on this product</p>
            <p className=""> Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
