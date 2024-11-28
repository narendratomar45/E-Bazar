import React, { useEffect, useState } from "react";
import items from "../Data/Data.js";
import ProductCard from "../Components/ProductCard.jsx";
import { useLocation } from "react-router-dom";
import Shimmer from "../Components/Shimmer.jsx";

const Category = () => {
  const [shimmer, setShimmer] = useState(true);
  useEffect(() => {
    setTimeout((setShimmer(false), 3000));
  }, [shimmer]);
  if (shimmer) {
    return <Shimmer />;
  }
  const location = useLocation();
  const category = location.pathname.split("/")[1];
  const filteredPath = items.filter((item) => item.category3 == category);
  console.log("filtered path in Category", filteredPath);

  return (
    <div className=" w-[80%] mx-auto flex flex-wrap justify-center items-center gap-10 my-10">
      {filteredPath.map((item, index) => (
        <>
          <ProductCard item={item} index={index} />
        </>
      ))}
    </div>
  );
};

export default Category;
