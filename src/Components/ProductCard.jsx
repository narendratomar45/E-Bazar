/* eslint-disable react/prop-types */
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { addToCart } from "../store/Slices/cartSlice";
import { addToWishlist } from "../store/Slices/cartSlice";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const ProductCard = ({ item, index }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Item added to Cart", { autoClose: 1000 });
  };
  const handleAddToWishlist = (item) => {
    dispatch(addToWishlist(item));
    toast.success("Item added to wishlist",{ autoClose: 1000 });
  };
  return (
    <div
      key={index}
      className="w-[270px] max-sm:w-[400px]  bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-indigo-600"
    >
      <div className=" h-[300px] max-sm:h-[400px] overflow-hidden  ">
        <Link to={`/${item.id}`}>
          <img
            src={item.image.src}
            alt={item.image.alt}
            loading="lazy"
            className="w-full h-full aspect-3/2 object-fill transition-transform duration-300 transform hover:scale-105"
          />
        </Link>
      </div>
      <div className="p-4">
        {/* Product Title and Wishlist Icon */}
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-lg font-semibold text-gray-800 truncate">
            {item.title}
          </h1>
          <i>
            <FaRegHeart
              className="text-xl text-gray-600 hover:text-blue-600 transition-colors duration-200"
              onClick={() => handleAddToWishlist(item)}
            />
          </i>
        </div>

        {/* Price and Add to Cart Button */}
        <div className="flex justify-between items-center">
          <button
            className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md font-semibold transition-all duration-200"
            onClick={() => handleAddToCart(item)}
          >
            Add To Cart
          </button>
          <h1 className="text-xl font-semibold text-gray-900">
            Rs. {item.price}
          </h1>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ProductCard;