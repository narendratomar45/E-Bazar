import React from "react";
import items from "../Data/Data.js";
import ProductCard from "../Components/ProductCard.jsx";
import { useLocation } from "react-router-dom";

const Category = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[1];
  const filteredPath = items.filter((item) => item.category3 == category);
  console.log("filtered path in Category", filteredPath);

  return (
    <div className=" flex flex-wrap justify-center items-center gap-10 my-10">
      {filteredPath.map((item, index) => (
        <>
          <ProductCard item={item} index={index} />
        </>
      ))}
    </div>
  );
};

export default Category;
