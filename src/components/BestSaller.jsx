import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import Title from "./Title";

const BestSaller = () => {
  const { products } = useContext(ShopContext);
  const [bestSaller, setBestSaller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => {
      return item.bestseller === true;
    });

    setBestSaller(bestProduct.slice(0, 10));
  }, []);

  return (
    <div className="max-w-screen-2xl my-10 px-5 mx-auto">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SALLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati,
          at! Rem laudantium ea ratione repudiandae.
        </p>
      </div>
      {/* rendering product */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSaller.map((item, idx) => (
          <ProductItem
            key={idx}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSaller;
