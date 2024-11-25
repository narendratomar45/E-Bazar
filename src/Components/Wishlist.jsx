// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, removeWishlistItem } from "../store/Slices/cartSlice";

// const Wishlist = () => {
//   const wishlist = useSelector((state) => state.cartSlice.wishlist);
//   const dispatch = useDispatch();

//   return (
//     <div className="w-full">
//       <h1 className="w-40 h-12  bg-white rounded border border-black  my-10 flex justify-center mx-auto items-center">
//         Your Wishlist
//       </h1>
//       {wishlist.length === 0 ? (
//         <p className="w-40 h-12  bg-white rounded border border-black  my-10 flex justify-center mx-auto items-center">
//           No items in wishlist
//         </p>
//       ) : (
//         wishlist.map((item) => (
//           <div key={item.id}>
//             <div className="flex border border-black w-[70%] max-sm:w-[400px] bg-white justify-between mx-auto my-10">
//               <div className="w-30 h-48">
//                 <img
//                   src={item.image.src}
//                   alt={item.image.alt}
//                   className="w-full h-full bg-cover"
//                 />
//               </div>
//               <div>
//                 <h2 className="my-5">{item.title}</h2>
//                 <p>Price: Rs. {item.price}</p>
//                 <span>Size: {item.size}</span>
//               </div>
//               <div className="gap-x-5 flex flex-col mr-4">
//                 <button
//                   className="bg-blue-700 text-white my-5 mx-auto w-40 h-12 rounded-sm shadow-md"
//                   onClick={() => dispatch(addToCart(item))}
//                 >
//                   Add To Cart
//                 </button>
//                 <button
//                   className="bg-blue-700 text-white my-5 mx-auto w-40 h-12 rounded-sm shadow-md"
//                   onClick={() => dispatch(removeWishlistItem(item.id))}
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Wishlist;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeWishlistItem } from "../store/Slices/cartSlice";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.cartSlice.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="w-[80%] mx-auto py-10">
      {/* Wishlist Heading */}
      <h1 className="text-2xl font-bold text-gray-800 text-center my-5">
        Your Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <p className="text-lg text-gray-500 text-center bg-white py-4 px-6 mx-auto my-10 border border-gray-300 rounded shadow-md w-fit">
          No items in wishlist
        </p>
      ) : (
        <div className="space-y-6 px-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-md shadow-lg p-5"
            >
              {/* Product Image */}
              <div className="w-40 h-40 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-1">Price: ₹{item.price}</p>
                <p className="text-gray-600">Size: {item.size}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 md:ml-6">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-medium w-40"
                  onClick={() => dispatch(addToCart(item))}
                >
                  Add to Cart
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md font-medium w-40"
                  onClick={() => dispatch(removeWishlistItem(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
