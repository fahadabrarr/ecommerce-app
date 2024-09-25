import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products } = useContext(ShopContext); // Fetching products from context
  const [showFilter, setShowFilter] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  // Toggle for Category
  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Toggle for SubCategory
  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Apply Filter Logic
  const applyFilter = () => {
    let filtered = [...products]; // Copy products array

    // Category Filter
    if (category.length > 0) {
      filtered = filtered.filter((product) =>
        category.includes(product.category)
      );
    }

    // SubCategory Filter
    if (subCategory.length > 0) {
      filtered = filtered.filter((product) =>
        subCategory.includes(product.subCategory)
      );
    }

    return filtered;
  };

  // Sorting Logic
  const applySorting = (productList) => {
    let sorted = [...productList];

    switch (sortType) {
      case "low-high":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return sorted;
  };

  // Function to handle filter and sort together
  const handleFilterAndSort = () => {
    const filtered = applyFilter();
    const sorted = applySorting(filtered);
    setFilteredProducts(sorted);
  };

  // Run this on initial render and when products, category, subCategory, or sortType changes
  useEffect(() => {
    handleFilterAndSort();
  }, [products, category, subCategory, sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t px-5">
      {/* filter option */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            alt=""
            className={`h-3 ${showFilter ? "rotate-90" : ""}`}
          />
        </p>

        {/* category filter */}
        <div className="border border-gray-300 pl-5 py-3 mt-6">
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div>
            <p>
              <input
                type="checkbox"
                className="w-3"
                value="Men"
                onChange={toggleCategory}
              />{" "}
              Men
            </p>
            <p>
              <input
                type="checkbox"
                className="w-3"
                value="Women"
                onChange={toggleCategory}
              />{" "}
              Women
            </p>

            <p>
              <input
                type="checkbox"
                className="w-3"
                value="Kids"
                onChange={toggleCategory}
              />{" "}
              Kids
            </p>
          </div>
        </div>

        {/* sub categories */}
        <div className="border border-gray-300 pl-5 py-3 my-5">
          <p className="mb-3 text-sm font-medium">Type</p>
          <div>
            <p>
              <input
                type="checkbox"
                className="w-3"
                value="Topwear"
                onChange={toggleSubCategory}
              />{" "}
              Topwear
            </p>
            <p>
              <input
                type="checkbox"
                className="w-3"
                value="Bottomwear"
                onChange={toggleSubCategory}
              />{" "}
              Bottomwear
            </p>

            <p>
              <input
                type="checkbox"
                className="w-3"
                value="Winterwear"
                onChange={toggleSubCategory}
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTION"} />
          {/* sort product by price */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* map all the products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filteredProducts.map((item) => (
            <ProductItem
              key={item._id}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
