import { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const menu = [
  { title: "home", link: "/" },
  { title: "collection", link: "/collection" },
  { title: "about", link: "/about" },
  { title: "product", link: "/product" },
];

const Navbar = () => {
  const [path, setPath] = useState("/");
  const [visible, setVisible] = useState(false);
  const { setShowSearch } = useContext(ShopContext);
  return (
    <div className="flex max-w-screen-2xl mx-auto items-center justify-between py-5 font-medium px-5 border-b-2 border-gray-200 w-full h-20">
      <div className="flex gap-5 text-sm text-gray-500">
        <Link to="/">
          <p> logo</p>
        </Link>
      </div>
      <div className=" hidden sm:flex gap-4">
        {menu.map((item, idx) => {
          return (
            <NavLink
              to={item.link}
              key={idx}
              onClick={() => setPath(item.link)}
            >
              <p className="uppercase">{item.title}</p>
              {path === item.link && <hr className=" h-[2px] mt-1 bg-black" />}
            </NavLink>
          );
        })}
      </div>

      <div className=" flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt=""
          className="w-5 h-5 cursor-pointer"
          onClick={() => setShowSearch(true)}
        />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt=""
            className="w-5 h-5 cursor-pointer"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-xl">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="" className=" w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] w-4">
            5
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt=""
          className=" w-5 cursor-pointer sm:hidden"
        />
      </div>

      {/* side bar menu for small device */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-slate-400 transition-all duration-1000 ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-900">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-6 p-3 cursor-pointer"
          >
            <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
            <p>Back</p>
          </div>
          <div className=" flex flex-col gap-6 px-8 mt-6">
            {menu.map((item, idx) => {
              return (
                <NavLink
                  to={item.link}
                  key={idx}
                  onClick={() => setVisible(false)}
                >
                  <p className="uppercase">{item.title}</p>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
