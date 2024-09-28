import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItem, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const itemId in cartItem) {
      const itemSizes = cartItem[itemId];

      for (const size in itemSizes) {
        if (itemSizes[size] > 0) {
          tempData.push({
            _id: itemId,
            size: size,
            quantity: itemSizes[size],
          });
        }
      }
    }

    setCartData(tempData);
  }, [cartItem]);

  return (
    <div className="pt-14 max-w-screen-2xl px-5">
      <div className="text-2xl mb-3 ">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div className="">
        {cartData.map((item, idx) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              className="py-4 border-b  text-gray-400 grid grid-cols-[4fr_.5fr_.5fr] sm:grid-cols-[4fr_2fr_.5fr] items-center gap-4"
              key={idx}
            >
              <div className="flex items-start gap-6">
                <img
                  src={productData.image[0]}
                  alt=""
                  className="w-16 sm:w-20"
                />
                <div className="text-sm sm:text-lg font-medium">
                  <p className="text-xs sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p className="">
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                className="border max-w-20 px-1 sm:px-2 py-1"
                type="number"
                min={1}
                defaultValue={item.quantity}
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
              />
              <img
                src={assets.bin_icon}
                alt=""
                className="w-4 sm:w-5 cursor-pointer"
                onClick={() => updateQuantity(item._id, item.size, 0)}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-black text-white text-sm my-8 py-3 px-4"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
