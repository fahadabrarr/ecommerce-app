import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  return <div>SearchBar</div>;
};

export default SearchBar;
