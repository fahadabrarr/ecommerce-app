import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
    console.log(location.pathname);
  }, [location]);

  return showSearch && visible ? (
    <div className="border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center rounded-2xl  py-3 my-5 mx-3 px-5 w-3/4 sm:w-1/2 border border-black">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none px-5 py-1 text-sm text-black"
          type="text"
          placeholder="Search"
        />
        <img src={assets.search_icon} alt="" className="w-4" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        src={assets.cross_icon}
        alt=""
        className="inline w-3  cursor-pointer"
      />
    </div>
  ) : null;
};

export default SearchBar;
