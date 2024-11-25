import React, { useState } from "react";
import items from "../Data/Data.js";
import { useLocation } from "react-router-dom";
import { FaRupeeSign, FaShippingFast } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { addToCart } from "../store/Slices/cartSlice.js";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const path = useLocation();
  const category = path.pathname;
  const sliceCategory = category.split("/")[1];
  const selectedItem = items.find((item) => item.id === Number(sliceCategory));
  const [selectedImage, setSelectedImage] = useState(selectedItem.allimg[0]);

  const handleImage = (image) => {
    setSelectedImage(image);
  };

  if (!selectedItem) {
    return (
      <p className="text-center font-bold text-3xl text-orange-500">
        Item not found
      </p>
    );
  }

  const handleAddToCart = (selectedItem) => {
    dispatch(addToCart(selectedItem));
    toast.success("Item added to Cart");
  };

  return (
    <div className="w-[90%] mx-auto my-10 flex flex-wrap justify-center gap-10">
      {/* Left Section: Image Selector */}
      <div className="w-[500px] max-sm:w-full flex flex-col items-center">
        {/* Image Selector */}
        <div className="flex gap-5">
          <div className="flex flex-col gap-3">
            {selectedItem.allimg.map((image, index) => (
              <div
                key={index}
                className={`w-20 h-24 border-2 ${
                  selectedImage === image
                    ? "border-blue-800"
                    : "border-gray-300"
                } rounded-md overflow-hidden cursor-pointer hover:shadow-md`}
                onClick={() => handleImage(image)}
              >
                <img
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Main Image Display */}
          <div className="w-[400px] h-[417px] border border-gray-300 rounded-md overflow-hidden shadow-md">
            <img
              src={selectedImage}
              alt={selectedItem.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-5">
          <button
            className="px-8 py-3 bg-blue-800 text-white font-semibold rounded-md shadow-md hover:bg-blue-900 transition duration-300"
            onClick={() => handleAddToCart(selectedItem)}
          >
            Add To Cart
          </button>
          <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 transition duration-300">
            Buy Now
          </button>
        </div>
      </div>

      {/* Right Section: Product Details */}
      <div className="w-[500px] p-6 bg-white shadow-lg rounded-md max-sm:w-full">
        {/* Product Title and Price */}
        <h1 className="text-2xl font-bold text-gray-800">
          {selectedItem.title}
        </h1>
        <div className="flex items-center gap-2 mt-3">
          <FaRupeeSign className="text-blue-800" />
          <p className="text-xl font-bold text-blue-800">
            {selectedItem.price}
          </p>
          <p className="text-sm text-gray-500 ml-4">Inclusive of all taxes</p>
        </div>
        <p className="text-sm text-gray-600 mt-3">
          Free shipping on all orders above{" "}
          <span className="font-semibold">INR 699</span>
        </p>

        {/* Offers */}
        <div className="flex items-center gap-3 mt-5 bg-blue-50 p-4 rounded-md shadow-sm">
          <BiSolidOffer className="text-3xl text-blue-800" />
          <p className="text-gray-700">
            <span className="font-bold text-blue-800">40% OFF</span> - Offers &
            Discounts
          </p>
        </div>

        {/* Sizes */}
        <div className="mt-5">
          <p className="text-lg font-semibold">Available Sizes</p>
          <div className="flex gap-3 mt-3">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <button
                key={size}
                className="px-4 py-2 border border-blue-600 rounded-md shadow-lg text-gray-800 hover:bg-blue-100 hover:border-blue-800 transition"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Shipping and Return Policy */}
        <div className="mt-5">
          <h1 className="text-lg font-semibold">
            Return Policy: {selectedItem.returnPolicy} Days
          </h1>
          <div className="flex items-center gap-5 mt-3">
            <span className="flex items-center gap-2 text-gray-600">
              <FaShippingFast className="text-2xl text-indigo-500" />
              <span>Shipping:</span>
            </span>
            <span className="line-through text-gray-500">Rs 40</span>
            <span className="font-bold text-gray-800">
              {selectedItem.shipping}
            </span>
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-6">
          <h1 className="text-lg font-semibold">Product Details</h1>
          <ol className="mt-3 list-disc pl-5 text-gray-600 space-y-2">
            <li>
              Net Quantity:{" "}
              <span className="font-medium">
                {selectedItem.productDetail.netQuantity}
              </span>
            </li>
            <li>{selectedItem.productDetail.wash}</li>
            <li>{selectedItem.productDetail.clothType}</li>
            <li>
              Product Code:{" "}
              <span className="font-medium">
                {selectedItem.productDetail.productCode}
              </span>
            </li>
            <li>
              Marketed By:{" "}
              <span className="font-medium">
                {selectedItem.productDetail.marketedBy}
              </span>
            </li>
            <li>
              Manufactured By:{" "}
              <span className="font-medium">
                {selectedItem.productDetail.manufacturedBy}
              </span>
            </li>
            <li>
              Country of Origin:{" "}
              <span className="font-medium">
                {selectedItem.productDetail.countryOrigin}
              </span>
            </li>
            <li>
              Customer Address:{" "}
              <span className="font-medium">
                {selectedItem.productDetail.customerAddress}
              </span>
            </li>
          </ol>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ProductDetails;

// import React from "react";
// import { useParams } from "react-router-dom";
// // import items from "../Data/Data.js";

// function ProductDetails() {
//   const { id } = useParams();

//   return <div>{id}</div>;
// }

// export default ProductDetails;
